import { ChangeEvent, FormEvent, useState } from 'react';
import './AddCategory.css'

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState('One Punch');

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value)
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <input 
        type="text" 
        id="input-category"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={ onInputChange }
      />
    </form>
  )
}