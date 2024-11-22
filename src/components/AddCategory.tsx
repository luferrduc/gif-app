import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
  onAddCategory(category: string): void 
}

export const AddCategory = ({ onAddCategory }: Props ) => {
  const [inputValue, setInputValue] = useState<string>('');

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value)
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const newInputValue = inputValue.trim();
    if(newInputValue.length <= 2) return
    
    onAddCategory(newInputValue)
    setInputValue("") 
  }

  return (
    <form className="form" onSubmit={ onSubmit } aria-label="form">
      <input 
        type="text" 
        id="input-category"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}