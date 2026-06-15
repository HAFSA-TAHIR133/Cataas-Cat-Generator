const BaseURL = "https://cataas.com"


export const getRandomCat = async()=>{
    return `${BaseURL}/cat?timestamp=${Date.now()}`
};

export const getGifCat =async()=>{
    return`${BaseURL}/cat/gif?timestamp=${Date.now()}`
};

export const getTaggedCat = async(tag)=>{
    return `${BaseURL}/cat/${encodeURIComponent(tag)}?timestamp=${Date.now()}`
};

export const getCatSays = async (catSay) => {
  return `${BaseURL}/cat/says/${encodeURIComponent(catSay)}`;
};

export const getCatByTagAndText = (tag, text) => {
  return `${BaseURL}/cat/${encodeURIComponent(tag)}/says/${encodeURIComponent(text)}`;
};

export const getCustomCat =(text,fontSize,color)=>{
  return `${BaseURL}/cat/says/${encodeURIComponent(text)}?fontSize=${fontSize}&fontColor=${color}` ;
}