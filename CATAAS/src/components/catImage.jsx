function CatImage ({imageURL}){
    return(
        <img src={imageURL} alt="Cat-Img" width="350" style={{borderRadius:"20px"}}
        onError={(e)=>{e.target.src= "https://cataas.com/cat";}}/>
    )
}
export default CatImage;