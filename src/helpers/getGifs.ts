import { Gif } from "@/interfaces/gifs.interfaces";

const apiKey = "3HGb93z27Grmkgv11OPXqhyVG986nguI";


export const getGifs = async (category: string): Promise<Gif[]> => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10` 

  try {
    const resp = await fetch(url)
    const { data } = await resp.json()  
    const gifs = data.map( (img: any) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))

    return gifs
  
  } catch (error) {
    console.log(error)
    return []
  }

}