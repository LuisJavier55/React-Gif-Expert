import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

export const useFetchGifs = (category) =>{
const [imagenes, setImagenes] = useState([]);
const [isLoading, setIsLoading] = useState(true)

const getImagenes = async() => {
        const newImages = await getGif(category); 
        setImagenes(newImages);
        setIsLoading(false);
  }

   useEffect(()=>{
       getImagenes(); 
   },[]) 
   

    return {
        imagenes,
        isLoading,
    }
}



//fsmdgmsdmgsmdgmsd
// fsdnsngddgkng
// safñfmssmg
// mgsldmglg