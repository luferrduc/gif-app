import React from 'react'
import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('Se prueba <GifItem />', () => { 
  
  const image = {
    id: "",
    title: "Dragon Ball Gif",
    url: "https://giphy.com/gifs/dragon_ball.gif"
  }

  const { id, title, url } = image

  test('debe hacer match con el snapshot', () => { 
      
      const { container } = render(<GifItem key={id} title={title} url={url} />)
      expect(container).toMatchSnapshot()
  })

  test('debe de mostrar la imagen con el URL y el ALT indicado', () => { 
    
    render(<GifItem title={title} url={url} />)

    // expect(screen.getByRole('img').src).toBe(url)
    // expect(screen.getByRole('img').alt).toBe(title)
    const { src, alt } = screen.getByRole('img') as HTMLImageElement;
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  test('debe de mostrar el título entregado en las props', () => { 
    render(<GifItem title={title} url={url} />)
    
    expect(screen.getByText(title)).toBeTruthy()

  })
})