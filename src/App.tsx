import { AddCategory } from "@components/AddCategory";
import { useState } from "react"



export const App = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = () => {
    // e.preventDefault()
    const $categoryInput = document.querySelector<HTMLInputElement>('#input-category')!;

    const newCategory = $categoryInput?.value;
    if(!newCategory){
      return
    }

    setCategories([newCategory,...categories]);
    $categoryInput.value = "";  
  }
  
  return (
    <>
      <h1>Gif Expert App</h1>
      {/* Form con el input para buscar */}
      
      <AddCategory />
      {/* <div className="form">
        <input type="text" id="input-category"/>
        <button onClick={onAddCategory}>Agregar</button>
      </div> */}
      {/* Grid o listdo de gifs según el input */}

      <ol>
        {
          categories.map(category => <li key={category}>{category}</li>)
        }
      </ol>
    </>
  )
}