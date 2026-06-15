import { useState ,useEffect,useRef, use} from "react";
import { getCustomCat } from "../services/catServices.jsx";
import '../App.css'
import CatImage from "../components/CatImage";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useCountContext } from "../countContext";


function CustomCat() {
  const [text, setText] = useState("");
  const {count,setCount} =useCountContext();

  const [fontSize,setFontSize] =useState("");
  const [color,setColor]=useState("");

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

      if ( !text || !fontSize || !color) {
        setError("Please enter both tag and text");
        return;
      }

      const url = await getCustomCat(text,fontSize,color);
      console.log(url);
      setImage(url);
      setCount({
        countValue: count.countValue+1
      })

      setColor("");
      setFontSize("");
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
    <div className="custom-cat-container">
      <h1>Custom Cat</h1>

      <input
      type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text like(Hello Hafsa)"
        ref={inputRef}
      />

      <input
      type="number"
        value={fontSize}
        onChange={(e) => setFontSize(e.target.value)}
        placeholder="Enter font Size"
      />
      <input
      type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Enter font Color"
      />

      <button onClick={fetchCat}>Generate Cat</button>

      {loading && <Loader />}

      {error && <Error message={error} />}

      {!loading && image && <CatImage imageURL={image} />}
     
    </div>
  );
}

export default CustomCat;