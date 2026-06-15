import { useRef ,useState} from "react";
import {getRandomCat} from '../services/catServices.jsx';
import CatImage from "../components/catImage";

import Loader from "../components/Loader.jsx";
import Error from "../components/Error.jsx";
import '../App.css'
import { useCountContext } from "../countContext.jsx";

function RandomCat(){
    const [loading,setLoading] =useState(false);
    const [error,setError] =useState("");

    const {count,setCount} =useCountContext();

    const [image,setImage] =useState("");
    const inputRef= useRef();
    const handleRef = ()=>{
        inputRef.current.focus();
    }
    const fetchCat =async()=>{
        try{
            setLoading(true);
            const url = await getRandomCat();
            setImage(url);
            setCount({
                countValue: count.countValue+1
            })
        }
        catch(err){
            setError("Failed to load the random image.");
        }
        finally{
            setLoading(false);
        }
        
    };

    return(
        <>
            <div className="random-cat-class">
                <h2>Generate a Random Cat</h2>
                <button onClick={fetchCat}>Get Cat</button>

                {loading && <Loader /> }
                {error &&  <Error message={error} />}
                {image && <CatImage imageURL={image} />} 

            </div>
        
        </>
    )
}
export default RandomCat;