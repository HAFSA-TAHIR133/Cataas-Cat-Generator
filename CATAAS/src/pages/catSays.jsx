import { useState,useRef ,useEffect} from "react";
import {getCatSays} from '../services/catServices.jsx';
import CatImage from "../components/catImage";

import { useCountContext } from "../countContext";

import Loader from "../components/Loader.jsx";
import Error from "../components/Error.jsx";
import '../App.css'

function CatSays(){

    const [loading,setLoading] =useState(false);
    const [error,setError] =useState("");
    const {count,setCount} =useCountContext();

    const [catSay,setCatSay] =useState("");
    const [image,setImage] =useState("");
    const inputRef= useRef();
    
    useEffect(() => {
        inputRef.current.focus();
        }, []);

    const fetchCat =async()=>{
        try{
            setLoading(true);

            if(!catSay){
                setError("Please Enter the says");
                return;
            }
            const url = await getCatSays(catSay);
            setImage(url);
            setCount({
                countValue: count.countValue+1
            })
            
            setCatSay("");
        }
        catch(err){
            setError("Failed to load the cat says images.");
        }
        finally{
            setLoading(false);
        }
        
    };

    return(
        <>
            <div className="cat-say-class">
                <h2>Random Cat Saying</h2>
                <input ref={inputRef} 
                    type="text" 
                    placeholder="Enter the text like Hello Hafsa..." 
                    value={catSay} 
                    onChange={(e) => setCatSay(e.target.value)} />
                <button onClick={fetchCat}>Get Cat</button>
                {loading && <Loader />}

                {error && <Error message={error} />}
                {image && <CatImage imageURL={image} />} 

            </div>
        
        </>
    )
}
export default CatSays;