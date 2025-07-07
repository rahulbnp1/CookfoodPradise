import './EditPost.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditRecipe() {
  const { id } = useParams();
  const [imageData, setImageData] = useState('');
  const [imageName, setImageName] = useState('');
  const [imageType, setImageType] = useState('');
  const [title, setTitle] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [categorys, setCategorys] = useState([]);
  const [category, setCategory] = useState('');
  const [ytLink, setYtlink] = useState('');
  const [recipe, setRecipe] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:9090/recipe/${id}`)
    .then((response) => {
      const r = response.data;
      setTitle(r.title);
      setCookingTime(r.cookingTime);
      setCategory(r.category?.id);
      setYtlink(r.ytLink || '');
      setRecipe(r.recipe);
      setImageData(r.imageData);
      setImageName(r.imageName);
      setImageType(r.imageType);
    });

    axios.get("http://localhost:9090/category")
      .then((res) => setCategorys(res.data));
  }, [id]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        setImageData(base64String);
        setImageName(file.name);
        setImageType(file.type);
      };
      reader.readAsDataURL(file);
    }
  };

  const updateData = () => {
    const updatedRecipe = {
      id,
      title,
      cookingTime,
      category: { id: category },
      ytLink,
      recipe,
      imageData,
      imageName,
      imageType
    };

    axios.put(`http://localhost:9090/recipe/${id}`, updatedRecipe)
      .then(() => {
        alert("Recipe updated successfully!");
        navigate('/sideBaar/dashboard');
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="upload-container">
      <div className="upload-picture-container">
        <img
          src={`data:${imageType};base64,${imageData}`}
          alt="Preview"
          className="upload-picture"
        />
      </div>

      <div className="upload-form-container">
        <h1>Edit Your Recipe</h1>
        <form className="upload-form">
          <label>Picture:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />

          <label>Title:</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />

          <label>Cooking Time:</label>
          <input type="text" value={cookingTime} onChange={e => setCookingTime(e.target.value)} />

          <label>Category:</label>
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            {categorys.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>

          <label>YouTube Link:</label>
          <input type="text" value={ytLink} onChange={e => setYtlink(e.target.value)} />

          <label>Recipe:</label>
          <textarea rows="4" value={recipe} onChange={e => setRecipe(e.target.value)} />

          <button type="button" onClick={updateData}>Update</button>
        </form>
      </div>
    </div>
  );
}
