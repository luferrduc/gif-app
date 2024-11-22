import React from 'react'
import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('Se prueba <AddCategory />', () => { 
  

  test('debe hacer match con el snapshot', () => { 
      
    const { container } = render(<AddCategory onAddCategory={ () => {} } />)
    expect(container).toMatchSnapshot()
  })

  test('debe de cambiar el valor de la caja de texto', () => { 
      
    const category = 'Naruto';
    render(<AddCategory onAddCategory={ () => {} } />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.input(input, {
      target: {
        value: category
      }
    })

    expect(input.value).toBe(category)

  })

  test('debe de llamar onNewCategory si el input tiene un valor', () => { 
      
    const inputValue = 'Kurosaki Ichigo';
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={ onAddCategory } />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    const form = screen.getByRole('form') as HTMLFormElement;

    fireEvent.input(input, {
      target: {
        value: inputValue
      }
    });

    fireEvent.submit(form);
    
    expect(input.value).toBe('');
    expect(onAddCategory).toHaveBeenCalled();
    expect(onAddCategory).toHaveBeenCalledTimes(1);
    expect(onAddCategory).toHaveBeenCalledWith(inputValue);

  })

  test('no debe llamar el onNewCategory si el input no tiene un valor al hacer submit del formulario', () => { 
      
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={ onAddCategory } />);
    const form = screen.getByRole('form') as HTMLFormElement;

    fireEvent.submit(form);
    
    expect(onAddCategory).not.toHaveBeenCalled();

  })

  test('no debe llamar el onNewCategory si el input tiene un valor con longitud 2 o menos', () => { 
      
    const inputValue = 'Ku';
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={ onAddCategory } />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    const form = screen.getByRole('form') as HTMLFormElement;

    fireEvent.input(input, {
      target: {
        value: inputValue
      }
    });

    fireEvent.submit(form);
    expect(onAddCategory).not.toHaveBeenCalled();
  })

})