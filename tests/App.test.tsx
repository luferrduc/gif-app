import React from 'react'
import { fireEvent, render, screen } from "@testing-library/react"
import { App } from '../src/App'


describe('Pruebas en <App />', () => { 
  

  test('debe hacer match con el snapshot', () => { 
      
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  })


  test('debe de aparecer el texto Gif Expert App en una etiqueta h1', () => { 
    
    render(<App />);
    expect(screen.getByRole('heading', {
      level: 1
    }).innerHTML).toBe('Gif Expert App');
    

  })

  test('debe de aparecer el input vacío', () => { 
    
    render(<App />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('');
    

  })


  test('debe de aparecer un h2 con el texto "One Punch" al ingresar el valor en el input y mandar el formulario', () => { 
    
    render(<App />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    const form = screen.getByRole('form') as HTMLFormElement;

    fireEvent.input(input, {
      target: {
        value: "One Punch"
      }
    })

    fireEvent.submit(form);

    expect(screen.getByRole('heading', { level: 3 }).innerHTML).toBe('One Punch');

  })
})