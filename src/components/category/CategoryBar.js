import './CategoryBar.css';

export default function CategoryBar() {
    const clickedCategory = () => {
        console.log("clicked");
    }
  return(<>
  <div id='categoryBar'>
    <p onClick={clickedCategory}>Veg</p>
    <p onClick={clickedCategory}>Non-Veg</p>
    <p onClick={clickedCategory}>Cakes</p>
    <p onClick={clickedCategory}>Desserts</p>
    <p onClick={clickedCategory}>Snacks</p>
    <p onClick={clickedCategory}>South Indian</p>
    <p onClick={clickedCategory}>North Indian</p>
    <p onClick={clickedCategory}>Chinese</p>
    <p onClick={clickedCategory}>Italian</p>    
    <p onClick={clickedCategory}>Mexican</p>
    <p onClick={clickedCategory}>Beverages</p>
    <p onClick={clickedCategory}>Fast Food</p>
    <p onClick={clickedCategory}>Burger</p>
  </div>
  
  </>)
}