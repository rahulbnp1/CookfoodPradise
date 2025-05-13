import './MainPage.css';
import cake from './cake.jpg';
import React from 'react';
import NavBar from '../navBar/NavBar';
import Search from '../searchBar/search';
import CategoryBar from '../category/CategoryBar';
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom';


export default function MainPage() {

    const datas = [
        { img: cake, title: "Birthday Cake", category:"Cake", time: "1 Hour", 
            recipe: "Chicken curry-Instructions Marinate the chicken (optional but recommended): Mix chicken with yogurt, turmeric, and salt. Let it rest for 30 mins. Heat oil in a pan. Add whole spices if using. Let them sizzle. Add onions and sauté until golden brown. Add ginger-garlic paste and cook for 1–2 minutes until raw smell goes away. Add pureed tomatoes, red chili powder, coriander powder, and salt. Cook until the oil starts separating from the masala (about 7–10 minutes). Add the marinated chicken and mix well to coat it in the masala. Cover and cook for 10–15 minutes, stirring occasionally. Add water (about 1 cup) for desired gravy consistency. Cover and cook until the chicken is fully cooked (another 10–15 mins). Finish with garam masala and cook for 2 minutes uncovered. Garnish with fresh coriander leaves."},
        ]
    const navBack = useNavigate();
    const handleBack = () => {
        navBack("/");
    }


    return(<>

         <NavBar />
         <Search />
        <CategoryBar />
        <h4 onClick={handleBack} className="back">   &lt;-Back</h4>
        <br />

        {datas.map((item, index) => (
          <div className="row" key={index}>
            <div className="row-img">
              <img src={item.img} alt="dish" />
            </div>
            <div className="row-text">
              <p><strong>User Name:</strong> CookfoodParadise</p>
              <p><strong>Title:</strong> {item.title}</p>
              <p><strong>Category:</strong> {item.category}</p>
              <p><strong>Cooking Time:</strong> {item.time}</p>
              <p><strong>Recipe:</strong> {item.recipe}</p>
            </div>
          </div>
        ))}
        <br/>

        <Footer />
    
    </>)
}