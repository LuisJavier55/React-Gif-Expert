import { useState } from "react"
import { AddCategory,GifGrid } from "../src/components/"






export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto']);

  
  /*
    const AgregarCate = () =>{
        //setCategories(categories.concat('perrita'))
        //otra forma 
        setCategories([...categories,'perrita2'])
    }
   */
    const agregarComponenteDesdeAddCategory = (valueReturAddCategory) =>{

      console.log("valor de agregar componenete" + valueReturAddCategory);
      
      if(categories.includes(valueReturAddCategory)){
        alert("ingresaste un elemnto dentro de la lista ")
      }
      setCategories([valueReturAddCategory,...categories]);
    }

  

  return (
    <>
      <h1>GifExpertApp</h1>


      <AddCategory 
      onNewCategory={(valueReturAddCategory) => agregarComponenteDesdeAddCategory(valueReturAddCategory)}/>

        {
            categories.map(categ =>(
              <GifGrid key={categ} category={categ}/>
            )  
            ) 
        }

    </>
  )
}




