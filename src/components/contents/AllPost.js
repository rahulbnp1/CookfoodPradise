import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './AllPost.css';

export default function Contents() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:9090/recipe')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading-text">Still Cooking...</p>;
  if (!data || data.length === 0) return <p className="loading-text">No recipes found.</p>;

  return (
    <motion.div
      className="contents-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {data.map((item, index) => (
        <motion.div
          key={item.id}
          className="recipe-card"
          onClick={() => navigate(`/recipe/${item.id}`)}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="recipe-header">
            {item.imageData && item.imageType && (
              <img
                src={`data:${item.imageType};base64,${item.imageData}`}
                alt={item.title || "Recipe"}
                className="recipe-image"
              />
            )}
            <h2 className="recipe-title">{item.title}</h2>
            <span className="recipe-category">{item.category?.name || "No category"}</span>
          </div>
          <p className="recipe-description">{item.recipe.slice(0, 100)}...</p>
          <button className="view-btn">View Recipe</button>
        </motion.div>
      ))}
    </motion.div>
  );
}
