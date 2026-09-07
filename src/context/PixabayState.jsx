import React, { useEffect, useState } from 'react'
import PixabayContext from './PixabayContext';


const PixabayState = (props) => {
  const api_key = import.meta.env.VITE_PIXABAY_KEY;

  const [imageData, setimageData] = useState([]);
  const [imageSearch, setimageSearch] = useState("");  //for Search Bar


  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);



  const fetchImages = async (queryParam) => {

    setLoading(true);
    setFetchError(null);

    try {
      const api = await fetch(`https://pixabay.com/api/?key=${api_key}&${queryParam}&image_type=photo&pretty=true&per_page=12`);
      const data = await api.json();
      setimageData(data.hits);

    } catch (err) {
      setFetchError(err.message || "Something went wrong while fetching images.");
      setimageData([]);

    } finally {
      setLoading(false);
    }
  };


  const handleCategory = (cat) => {
    fetchImages(`category=${cat}`);
  };


  const handleSearch = (e) => {
    e.preventDefault();
    if(!imageSearch.trim()) return;
    fetchImages(`q=${imageSearch}`);
  };


  useEffect(() => {
    fetchImages(`category=nature}`);
  }, []);


  return (
    <>
      <PixabayContext.Provider value={{ handleCategory, handleSearch, imageData, loading, fetchError, imageSearch, setimageSearch}} >{props.children}</PixabayContext.Provider>
    </>
  )
}

export default PixabayState