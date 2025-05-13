import React, { useState } from 'react';
import './Dashboard.css'; // ⬅️ Link the CSS file

const initialData = [
  { title: 'Spicy Paneer Tikka', date: '2025-05-01', duration: '30 mins' },
  { title: 'Mango Lassi', date: '2025-04-28', duration: '10 mins' },
  { title: 'Aloo Paratha', date: '2025-04-20', duration: '25 mins' },
  { title: 'Butter Chicken', date: '2025-04-15', duration: '45 mins' },
];

export default function Dashboard() {
  const [videoData, setVideoData] = useState(initialData);

  const handleEdit = (index) => {
    alert(`Edit clicked for: ${videoData[index].title}`);
  };

  const handleDelete = (index) => {
    const updatedData = videoData.filter((_, i) => i !== index);
    setVideoData(updatedData);
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>Below is the list of uploaded cooking videos:</p>

      <table className="video-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date of Upload</th>
            <th>Cooking Duration</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {videoData.map((video, index) => (
            <tr key={index}>
              <td>{video.title}</td>
              <td>{video.date}</td>
              <td>{video.duration}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(index)}>Edit</button>
              </td>
              <td>
                <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
