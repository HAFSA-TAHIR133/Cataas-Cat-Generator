import { Link } from "react-router-dom"
import '../App.css'
import { useCountContext } from "../countContext";

function Navbar(){
    const {count} =useCountContext();
    return(
        <>
        <div className="link-items">
            <Link to="/">Home</Link>
            <Link to="/cat-say">Cat Says</Link>
            <Link to="/cat-tag">Cat Tag</Link>
            <Link to="custom-cat">Custom Cat</Link>
            <Link to="/random-cat">Random Cat</Link>
            <Link to="/gif-cat">Gif Cat</Link>
            <Link to="/tag-says">Tag Cat Says</Link>
            <p className="navbar-para">Generated Images: {count.countValue}</p>
        </div>
            
        </>
    )
}

export default Navbar;