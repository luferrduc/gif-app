import { AddCategory, GifGrid } from "@components";
import { useState } from "react"



export const App = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const onAddCategory = (category: string) => {

    const isNewCategoryExists = categories?.find( cat => cat?.toLowerCase() === category.toLowerCase() )
    if(isNewCategoryExists) return
    
    setCategories([category,...categories]);
  }
  
  return (
    <>
      <h1 className="title">Gif Expert App</h1>
      {/* Form con el input para buscar */}
      
      <AddCategory onAddCategory={onAddCategory} />
      {/* Otra forma de hacerlo mandando el setState de una, no tan recomendado */}
      {/* <AddCategory setCategories={setCategories} /> */} 
      {/* Grid o listdo de gifs según el input */}

      
      {
        categories.map(category => (<GifGrid key={category} category={category}/>))
      }
 
    </>
  )
}