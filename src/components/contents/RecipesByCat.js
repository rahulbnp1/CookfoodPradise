import { useNavigate, useParams } from "react-router-dom";
import CategoryBar from "../category/CategoryBar";
import NavBar from "../navBar/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../footer/Footer";
import Copyright from "../copyright/Copyright";

export default function RecipesByCat() {
    
  const {id} = useParams();
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const fetchData = () => {
    axios.get(`http://localhost:9090/recipe/category/${id}`)
      .then(response => {
        setData(response.data);
        setLoading(false);
        console.log("All recipes:", response.data);
       
      })
      .catch(error => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) return <p className="loading-text">Still Cooking...</p>;
  if (!data || data.length === 0) navigate("/");

  return (<>
    <NavBar />
    <CategoryBar />
    <div className="contents-wrapper">
      {data.map((item, index) => (
        <div key={index} className="recipe-card" onClick={() => navigate(`/recipe/${item.id}`)}>
          <div className="recipe-header">
             {item?.imageData && item?.imageType && (
             <img
                src={`data:${item.imageType};base64,${item.imageData}`}
                alt={item?.title}
                className="recipe-image"
                />
               )}
            <h2 className="recipe-title">{item?.title}</h2>
            <span className="recipe-category">{item?.category?.name || "No category"}</span>
          </div>
          <p className="recipe-description">{item?.recipe.slice(0, 100)}...</p>
          <button className="view-btn">View Recipe</button>
        </div>
      ))}
    </div>
    <Footer />
    <Copyright />
 </> );
}