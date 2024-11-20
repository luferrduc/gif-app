import React from 'react'
import { render } from "@testing-library/react"
import { GifItem } from "../../src/components"
// import { GifItem } from '@co'

describe('Se prueba <GifItem />', () => { 
  
  const images = {
    id: "",
    title: "Dragon Ball Gif",
    url: "https://giphy.com/gifs/dragon_ball.gif"
  }

  test('debe hacer match con el snapshot', () => { 
      const { title, url } = images
      const { container } = render(<GifItem key={images.id} title={title} url={url} />)
      expect(container).toMatchSnapshot()
  })
})