import './Upload.css';
import im404 from './im404.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Upload() {

    const [imageData, setImageData] = useState(im404);
    const [imageName, setImageName] = useState('');
    const [imageType, setImageType] = useState('');
    const [title, setTitle] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [categorys, setCategorys] = useState([]);
    const [category, setCategory] = useState('');
    const [ytLink, setYtlink] = useState('');
    const [recipe, setRecipe] = useState('');

    const [titleError, setTitleError] = useState('');
    const [cookingTimeError, setCookingTimeError] = useState('');
    const [categoryError, setCategoryError] = useState('');
    const [recipeError, setRecipeError] = useState('');

    
    const navigate = useNavigate();

    
    useEffect(() => {
        axios.get("http://localhost:9090/category")
            .then((response) => {
                setCategorys(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            

        fetch(im404)
        .then(res => res.blob())
        .then(blob => {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageData(reader.result); 
                setImageName("im404.png");
                setImageType("image/png");
            };
            reader.readAsDataURL(blob);
        })
        .catch(err => {
            console.error("Error loading default image", err);
        });


    }, [])





    const postData = () => {

         if(title == ''){
            setTitleError('Title is required');
         }else{
            setTitleError('');
         }

         if(cookingTime == ''){
            setCookingTimeError('Cooking Time is required');
         }else{
            setCookingTimeError('');
         }

         if(category == ''){
            setCategoryError('Category is required');
         }else{
            setCategoryError('');
         }

         if(recipe == ''){
            setRecipeError('Recipe is required');
         }else{
            setRecipeError('');
         }


        const recipeData = { 
            title,
            cookingTime,
           category: { id: category }, 
            ytLink,
            recipe,
            imageData,
            imageName,
            imageType
        }

    if(title !== '' && cookingTime !== '' && category !== '' && recipe !== ''){

        axios.post("http://localhost:9090/recipe", recipeData)
            .then((response) => {
                console.log(response.data)
                 alert("Recipe uploaded successfully!");
                 setTitle('');
                 setCookingTime('');
                 setCategory('');
                 setYtlink('');
                 setRecipe('');
                 setImageData(im404); // reset to default image 
                 setImageName('');
                 setImageType('');   
                 navigate('/sideBaar');

            })
            .catch((error) => {
                console.log(error)
            })
        }
    }


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



    return (
        <>
            <div className="upload-container">
                <div className="upload-picture-container">
                    <img
                    src={imageData.startsWith('data:') ? imageData : `data:${imageType};base64,${imageData}`}
                    alt="Recipe Preview"
                    className="upload-picture"
                    />
                </div>

                <div className="upload-form-container">
                    <h1>Upload Your Recipe</h1>
                    <p className="upload-description">Share your favorite dish with the community</p>
                    <form className="upload-form">
                        <label>Picture:</label>
                        <input type="file" accept="image/*"  onChange={handleImageChange} />

                        <label>Title:</label>
                        <input type="text" 
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder="Enter recipe title" /> 
                {titleError && <p className="error-message">{titleError}</p>}

                        <label>Cooking Time:</label>
                        <input type="text" 
                            value={cookingTime}
                            onChange={e => setCookingTime(e.target.value)}
                            placeholder="e.g. 45 minutes" />
                {cookingTimeError && <p className="error-message">{cookingTimeError}</p>}
                        
                        <label>Category: </label>
                        <select value={category} 
                            onChange={e => setCategory(e.target.value)}>
                            <option value="">Select Category</option>
                            {categorys.map(cat => {
                                return <option key={cat.id} value={cat.id}>{cat.name} </option>
                            })}

                        </select>
                {categoryError && <p className="error-message">{categoryError}</p>}

                        <label>YouTube Link: (Optional) </label>
                        <input type="text"  
                            value={ytLink}
                            onChange={e => setYtlink(e.target.value)}
                            placeholder="Enter YouTube link" />

                        <label>Recipe:</label>
                        <textarea  
                            value={recipe}
                            onChange={e => setRecipe(e.target.value)}
                            placeholder="Write the recipe..." rows="4"></textarea>
                {recipeError && <p className="error-message">{recipeError}</p>}

                        <button type="button" onClick={postData}>Upload</button>
                    </form>
                </div>
            </div>
        </>
    );
}
