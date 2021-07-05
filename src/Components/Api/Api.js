import { useState,useEffect } from 'react';
import axios from 'axios';


// search image function that fetch images from API
const SearchImage=(query)=>{
    const [useImage,setImage]=useState([]);
    const [loading,setLoading]=useState(false);


    
    useEffect(()=>{
        const fetchData= async ()=>{
            setLoading(true);
        try {
            await
            axios.get(`https://jsonplaceholder.typicode.com/albums/${query}/photos`)
            .then(image=>{
                setImage(image.data);
            })
            setLoading(false);
        } catch(err){
          setLoading(false);
         
        }
    }

    fetchData();
    },[query]);   
    return {useImage,loading};
    
    }
export default SearchImage;