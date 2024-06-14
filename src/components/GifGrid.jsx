import { useEffect, useState } from "react";
import { GifExpertApp } from "../GifExpertApp";
import { AddInfoImages } from "./AddInfoImage";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {

  
    const {imagenes, isLoading} = useFetchGifs(category)

    console.log({imagenes,isLoading})

   return (
        <>
        <h3>{category}</h3>
        {
          isLoading && (<h2>Cargando.....</h2>)
        }


        <div className="card-grid">
          {
            imagenes.map((imag) => (
               <AddInfoImages 
               key={imag.id} 
               {...imag}
               />
            ))
          }
        </div>
            
        </>
    )

}

