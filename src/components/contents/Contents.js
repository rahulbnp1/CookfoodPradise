import cake from './cake.jpg';
import im404 from './im404.png';
import './Contents.css';
import { Link, useNavigate } from 'react-router-dom';

const data = [
  { img: cake, title: "Birthday Cake", category:"Cake", time: "1 Hour" },
  { img: cake, title: "Birthday Cake", category:"Cake", time: "1 Hour" },
  { img: im404, title: "Chicken Curry", category:"Cake", time: "1 Hour" },
  { img: cake, title: "Birthday Cake", category:"Cake", time: "1 Hour" },
  { img: cake, title: "Birthday Cake", category:"Cake", time: "1 Hour" },
  { img: cake, title: "Birthday Cake", category:"Cake", time: "1 Hour" },
  { img: im404, title: "Chicken Curry", category:"Cake", time: "1 Hour" },
  { img: cake, title: "Birthday Cake", category:"Cake", time: "1 Hour" },
  { img: im404, title: "Chicken Curry", category:"Cake", time: "1 Hour" },
  { img: cake, title: "Birthday Cake", category:"Cake", time: "1 Hour" },
  { img: cake, title: "Birthday Cake", category:"Cake", time: "1 Hour" },
  { img: cake, title: "Birthday Cake", category:"Cake", time: "1 Hour" },
];


export default function Contents() {

  const navigate = useNavigate();

  const recipePage = () => {
  navigate('/mainPage');
  };

  return (
    <div>
      <h3>Trending Now</h3>
      <div id='contentsBoxes' >
        {data.map((item, index) => (
          <div className="row1" key={index} onClick={recipePage}>
            <div className="row1-img">
              <img src={item.img} alt="dish" />
            </div>
            <div className="row1-text">
              <p><strong>User Name:</strong> CookfoodParadise</p>
              <p><strong>Title:</strong> {item.title}</p>
              <p><strong>Category:</strong> {item.category}</p>
              <p><strong>Cooking Time:</strong> {item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
