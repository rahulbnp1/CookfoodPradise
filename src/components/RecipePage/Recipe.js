import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "./Recipe.css";
import NavBar from "../navBar/NavBar";
import CategoryBar from "../category/CategoryBar";
import Footer from "../footer/Footer";
import Copyright from "../copyright/Copyright";


function getEmbedUrl(link) {
  try {
    const url = new URL(link);
    if (url.hostname === "youtu.be") {
      const videoId = url.pathname.slice(1);
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.hostname.includes("youtube.com")) {
      const videoId = url.searchParams.get("v");
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    }
    return null;
  } catch {
    return null;
  }
}

export default function Recipe() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const fetchData = () => {
    axios.get(`http://localhost:9090/recipe/${id}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>Recipe not found.</p>;

  const embedUrl = data.ytLink ? getEmbedUrl(data.ytLink) : null;

  return (
    <>
      <NavBar />
      <CategoryBar />
      <motion.h3
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        onClick={() => navigate("/")}
      >
        &lt;-- Go back
      </motion.h3>

      <motion.div
        className="container shade-cn"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>{data.title}</h2>

        <motion.div
          className="recipe-container"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="recipe-left-img">
            {data.imageData && (
              <img
                src={`data:${data.imageType};base64,${data.imageData}`}
                alt={data.title}
              />
            )}
          </div>

          <div className="recipe-right">
            <p><strong>Cooking Time:</strong> {data.cookingTime}</p>
            <p><strong>Date of Publish:</strong> {new Date(data.dateOfPublish).toLocaleString()}</p>
            <p><strong>Category:</strong> {data.category?.name || "No category"}</p>
            <div className="recipe-description">
              <strong>Full Recipe:</strong>
              <p>{data.recipe}</p>
            </div>
          </div>
        </motion.div>

        {embedUrl && (
          <motion.div
            className="recipe-video"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <iframe
              src={embedUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        )}
      </motion.div>
      <br />
      <Footer />
      <Copyright />
    </>
  );
}
