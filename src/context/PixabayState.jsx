import React, { useEffect, useState } from 'react'
import PixabayContext from './PixabayContext';


const PixabayState = (props) => {
  const api_key = import.meta.env.VITE_PIXABAY_KEY;

  const [imageData, setimageData] = useState([]);
  const [imageSearch, setimageSearch] = useState("");  //for Search Bar


  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("category=nature")


  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);


  const [selectedImg, setSelectedImg] = useState(null);



  const fetchImages = async (queryParam, pageNum=1) => {

    setLoading(true);
    setFetchError(null);

    try {
      const api = await fetch(`https://pixabay.com/api/?key=${api_key}&${queryParam}&image_type=photo&pretty=true&per_page=12&page=${pageNum}`);
      const data = await api.json();

      setimageData(data.hits);
      setPage(pageNum);
      setQuery(queryParam);

    } catch (err) {
      setFetchError(err.message || "Something went wrong while fetching images.");
      setimageData([]);

    } finally {
      setLoading(false);
    }
  };


  const handleCategory = (cat) => {
    fetchImages(`category=${cat}`, 1);
  };


  const handleSearch = (e) => {
    e.preventDefault();
    if(!imageSearch.trim()) return;
    fetchImages(`q=${imageSearch}`, 1);
  };


  useEffect(() => {
    fetchImages(query, 1);
  }, []);

  
  const loadNext = () =>{
    fetchImages(query, page+1);
  }

  const loadPrev = () =>{
    if(page > 1){
      fetchImages(query, page-1);
    }
  }


  return (
    <>
      <PixabayContext.Provider value={{ handleCategory, handleSearch, imageData, loading, fetchError, imageSearch, setimageSearch, loadNext, loadPrev, page, selectedImg, setSelectedImg}} >{props.children}</PixabayContext.Provider>
    </>
  )
}

export default PixabayState