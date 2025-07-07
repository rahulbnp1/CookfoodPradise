import { useState } from 'react';
import './search.css';
import { useNavigate } from 'react-router-dom';

export default function Search() {

  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (keyword.trim() !== "") {
      navigate(`/searchedbyname?query=${encodeURIComponent(keyword)}`);
    }
  };

  return (
    <div id='banner'>
      <br />
      <h1 id='heading'>Hello Foodiess !!!</h1>
      <input
        id="searching"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        type='search'
        placeholder='Search for recipes'
      />
      <br />
      <button id='btn1' type='button' onClick={handleSearch}>Search</button>
    </div>
  );
}
