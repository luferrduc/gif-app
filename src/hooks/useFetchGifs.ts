import { getGifs } from "@/helpers/getGifs"
import { Gif } from "@/interfaces/gifs.interfaces"
import { useEffect, useState } from "react"


export const useFetchGifs = (category: string) => {
	const [images, setImages] = useState<Gif[]>([])
  const [isLoading, setIsLoading] = useState(true)

	const getImages = async () => {
		const imagesList = await getGifs(category)
		setImages(imagesList)
    setIsLoading(false)
	}

	useEffect(() => {
		getImages()
	}, [])

	return {
		images,
		isLoading,
    error: ''
	}
}
