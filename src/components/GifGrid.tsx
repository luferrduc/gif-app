import { GifItem } from "./GifItem"
import { useFetchGifs } from "@/hooks/useFetchGifs"
import { Loading } from "./Loading"

interface Props {
	category: string
}

export const GifGrid = ({ category }: Props) => {
	const { images, isLoading } = useFetchGifs(category)

	
	return (
		<section>
			<h3 className="title">{category}</h3>
			<article className="card-grid">
				
				{ isLoading && <Loading />}
				{ images.map((image) => (<GifItem key={image.id} {...image} />)) }

			</article>
		</section>
	)
}

