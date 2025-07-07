import { useNavigate, useSearchParams } from "react-router-dom";
import CategoryBar from "../category/CategoryBar";
import NavBar from "../navBar/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../footer/Footer";
import Copyright from "../copyright/Copyright";

export default function SearchedRecipe() {
    
 
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("query");
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!keyword) return;

    axios.get(`http://localhost:9090/recipe/search?query=${encodeURIComponent(keyword)}`)
      .then(response => {
        setData(response.data);
        setLoading(false);
        console.log("Search results:", response.data);
      })
      .catch(error => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, [keyword]);

  if (loading) return <p className="loading-text">Still Cooking...</p>;
  if (!data || data.length === 0) return <p className="loading-text">No Recipes Found.</p>;

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