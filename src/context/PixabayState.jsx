import React, { useEffect, useState } from 'react'
import PixabayContext from './pixabayContext';


const PixabayState = (props) => {
    const api_key = import.meta.env.VITE_PIXABAY_KEY;

    const [imageData, setimageData] = useState([]);
    const [imageCat, setimageCat] = useState("fashion");  //for different category
    const [imageSearch, setimageSearch] = useState("");  //for Search Bar

    useEffect(()=>{
        const fetchData = async() => {
            const api = await fetch(`https://pixabay.com/api/?key=${api_key}&category=${imageCat}&image_type=photo&pretty=true&per_page=12`);
            const data = await api.json();
            setimageData(data.hits);
            // console.table(data.hits);
        };
        fetchData();       
    },[imageCat]);

    const fetchImagebycat = async(e) => {
          e.preventDefault();
          const api = await fetch(`https://pixabay.com/api/?key=${api_key}&q=${imageSearch}&image_type=photo&pretty=true&per_page=12`);
          const data = await api.json();
          setimageData(data.hits);
          setimageSearch("");
          // console.table(data.hits);
    }

  return (
    <>
    <PixabayContext.Provider value={{imageData, fetchImagebycat, setimageSearch, imageSearch, setimageCat}} >{props.children}</PixabayContext.Provider>
    </>
  )
}

export default PixabayState