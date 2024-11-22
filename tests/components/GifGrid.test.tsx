import React from 'react'
import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components"
// import { useFetchGifs } from "../../src/hooks/useFetchGifs"
import * as hooks from "../../src/hooks/useFetchGifs"

// jest.mock('../../src/hooks/useFetchGifs');
/*
  useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })

  Da errores con tipado

  https://vitest.dev/api/vi.html#vi-spyon -> opción con vitest
*/

describe('Se prueba <GifGrid />', () => { 
  
  const mockFetch = jest.spyOn(hooks, "useFetchGifs");

  const category = 'Shingeki no Kyojin';

  test('debe hacer match con el snapshot', () => { 
      
    mockFetch.mockReturnValue({
      images: [],
      isLoading: true
    })

    const { container } = render(<GifGrid category={category} />)
    expect(container).toMatchSnapshot()
  })

  test('debe existir la categoría como texto en un h3', () => { 

    mockFetch.mockReturnValue({
      images: [],
      isLoading: true
    })

    render(<GifGrid category={category} />)
    expect(screen.getByRole('heading', {
      level: 3
    }).innerHTML).toBe(category)

  })

  test('debe de mostar el loading inicialmente', () => {
  
    mockFetch.mockReturnValue({
      images: [],
      isLoading: true
    })
    
    render(<GifGrid category={category} />)
    expect(screen.getByText('Loading...'))
  })

  test('debe de mostrar items cuando se cargan las imagenes del useFetchGifs', () => { 
    
    const gifs = [
      {
        id: "123ajhASD7A8",
        title: "Eren Yeager",
        url: "https://giphy.com/gifs/eren_yeager.gif"
      },
      {
        id: "ASDHB&SGD79A6",
        title: "Mikasa",
        url: "https://giphy.com/gifs/mikasa_akerman.gif"
      }
    ];

    
    mockFetch.mockReturnValue({
      images: gifs,
      isLoading: false
    })
    
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);

  })

})