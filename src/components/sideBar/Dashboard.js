import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchData = () => {
    axios.get('http://localhost:9090/recipe')
      .then(response => {
        setData(response.data);
        setLoading(false);
        console.log("All recipes:", response.data);
        console.log("All recipes:", response.data.dateOfPublish);
      })
      .catch(error => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);



  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this recipe?")){
    axios.delete(`http://localhost:9090/recipe/${id}`)
      .then(response => {
        console.log("Recipe deleted:", response.data);
        fetchData();
      })
      .catch(error => {
        console.error("Delete error:", error);
      })
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>Below is the list of uploaded recipes:</p>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="video-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date of Upload</th>
              <th>Cooking Duration</th>
              <th>Category</th>
              <th>View</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((recipe) => (
              <tr key={recipe.id}>
                <td>{recipe.title}</td>
                <td>{new Date(recipe.dateOfPublish).toLocaleDateString('en-GB', {
                 day: '2-digit',
                  month: 'short',
                  year: 'numeric'
                  })}</td>

                <td>{recipe.cookingTime}</td>
                <td>{recipe.category.name}</td>
                <td><button onClick={() =>
                     navigate(`/recipe/${recipe.id}`)}
                      className='eye-btn'><FaEye /></button></td>
                <td>
                  <button className="edit-btn" onClick={() => navigate(`/sidebaar/editPost/${recipe.id}`)}>Edit</button>
                </td>
                <td>
                  <button className="delete-btn" onClick={() => handleDelete(recipe.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
