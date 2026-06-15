import { useState ,useEffect,useRef} from "react";
import { getCatByTagAndText } from "../services/catServices.jsx";
import '../App.css'

import CatImage from "../components/CatImage";
import Loader from "../components/Loader";
import Error from "../components/Error";

function TagSays() {
  const [tag, setTag] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const inputRef = useRef();
  useEffect(() => {
        inputRef.current.focus();
        }, []);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchCat = async () => {
    try {
      setLoading(true);
      setError("");

      if (!tag || !text) {
        setError("Please enter both tag and text");
        return;
      }

      const url = await getCatByTagAndText(tag, text);
      setImage(url);

      setTag("");
      setText("");

    } 
    catch (err) {
      setError("Failed to load cat image");
    } 
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="tag-says-container">
      <h1>Tag Cat Says</h1>
    <div className="cat-tag-says-inputs">

        <input
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            placeholder="Enter tag like(funny,cute)"
            ref={inputRef}
        />

        <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text like(Hello Hafsa)"
        />
    </div>

      <button onClick={fetchCat}>Generate Cat</button>

      {loading && <Loader />}

      {error && <Error message={error} />}

      {!loading && image && <CatImage imageURL={image} />}
    </div>
  );
}

export default TagSays;