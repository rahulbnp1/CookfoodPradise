import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
        console.log("Recipe fetched:", response.data);
        console.log("dateOfPublish:", data.dateOfPublish);
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
      <h3 onClick={()=> navigate("/")}>&lt;--Go back</h3>
      <div className="container">
        <h2>{data.title}</h2>
        <div className="recipe-container">
          <div className="recipe-left-img">
            {data.imageData && (
              <img
                src={`data:${data.imageType};base64,${data.imageData}`}
                alt={data.title}
              />
            )}
          </div>

          <div className="recipe-right">
            <p>
              <strong>Cooking Time:</strong> {data.cookingTime}
            </p>
            <p>
              <strong>Date of Publish:</strong>{" "}
              {new Date(data.dateOfPublish).toLocaleString()}
            </p>
            <p>
              <strong>Category:</strong> {data.category?.name || "No category"}
            </p>
            <div className="recipe-description">
              <strong>Full Recipe:</strong>
              <p>{data.recipe}</p>
            </div>
          </div>
        </div>

        {embedUrl && (
          <div className="recipe-video">
            <iframe
              src={embedUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
      <br />
      <Footer />
      <Copyright />
    </>
  );
}
