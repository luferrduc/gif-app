import { getGifs } from '../../src/helpers/getGifs'

describe('Probando getGifs()', () => { 

  test('debería traer listado de gifs', async () => { 

    const category = 'Kimetsu no Yaiba';
    const gifs = await getGifs(category)

    expect(gifs.length).toBeGreaterThan(0)
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    })

    // También podría ser
    // expect(gifs[0]).toHaveProperty('id')
    // expect(gifs[0]).toHaveProperty('title')
    // expect(gifs[0]).toHaveProperty('url')
  })
})