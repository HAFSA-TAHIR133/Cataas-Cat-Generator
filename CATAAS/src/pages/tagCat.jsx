import { useState,useRef,useEffect } from "react";
import {getTaggedCat} from '../services/catServices.jsx';
import CatImage from "../components/catImage";

import Loader from "../components/Loader.jsx";
import Error from "../components/Error.jsx";
import '../App.css'
function TagCat(){

    const [loading,setLoading] =useState(false);
    const [error,setError] =useState("");

    const [tag,setTag] =useState("");
    const [image,setImage] =useState("");
    const inputRef= useRef();

    useEffect(() => {
        inputRef.current.focus();
        }, []);

    const fetchCat =async()=>{
        try{
            setLoading(true);
            if(!tag){
                setError("Please Enter the cat tag.");
                return;
            }
            const url = await getTaggedCat(tag);
            setImage(url);

            setTag("");
        }
        catch(err){
            setError("Failed to load the tag image.");
        }
        finally{
            setLoading(false);
        }
        
    }

    return(
        <>
            <div className="tag-cat-class">
                <h2>Search Cat By Tag</h2>
                <input ref={inputRef} 
                    type="text" 
                    placeholder="Enter tag like cute,funny..." 
                    value={tag} 
                    onChange={(e) => setTag(e.target.value)} />
                <button onClick={fetchCat}>Get Cat</button>

                {loading && <Loader /> }
                {error &&  <Error message={error} />}
                {image && <CatImage imageURL={image} />} 

            </div>
        
        </>
    )
}
export default TagCat;