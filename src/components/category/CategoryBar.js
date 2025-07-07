import { useEffect, useState } from 'react';
import './CategoryBar.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CategoryBar() {

    const [categorys, setCategorys] = useState([]);
    const navigate = useNavigate();
  
      useEffect(() => {
          axios.get("http://localhost:9090/category")
              .then((response) => {
                  setCategorys(response.data);
                  console.log(response.data.categorys);
              })
              .catch((error) => {
                  console.log(error);
              })
      }, [])

  return(<>
  <div id='categoryBar'>
    {categorys.map((cat) =>(
      <p key={cat.id} onClick={()=> navigate(`/recipeByCat/${cat.id}`)}>{cat.name}</p>
    ))}
  </div>
  
  </>)
}