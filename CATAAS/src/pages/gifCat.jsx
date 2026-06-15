import { useState,useRef } from "react";
import {getGifCat} from '../services/catServices.jsx';
import CatImage from "../components/catImage";
import Loader from "../components/Loader.jsx";
import Error from "../components/Error.jsx";
import '../App.css'

import { useCountContext } from "../countContext";


function GifCat(){
    const [loading,setLoading] =useState(false);
    const [error,setError] =useState("");

    const {count,setCount} =useCountContext();

    const [image,setImage] =useState("");
    const inputRef= useRef();
    const handleRef = ()=>{
        inputRef.current.focus();
    }
    const fetchCat =async ()=>{
        try{
            setLoading(true);
            const url = await getGifCat();
            setImage(url);
            setCount({
                countValue:count.countValue+1
            })
        }
        catch(err){
            setError("Failed to fetch the Gif image.")
        }
        finally{
            setLoading(false);

        }
        
    }

    return(
        <>
            <div className="gif-cat-class random-cat-class">
                <h2>Generate a Cat Gif</h2>
                <button onClick={fetchCat}>Get Cat</button>
                {loading && <Loader /> }
                {error &&  <Error message={error} />}
                {image && <CatImage imageURL={image} />} 

            </div>
        
        </>
    )
}
export default GifCat;