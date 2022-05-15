import {
	IonButton,
	IonCol,
	IonGrid,
	IonImg,
	IonInput, IonRow
} from '@ionic/react'
import React from 'react'
import './PickUnsplashImage.css'

const UNSPLASH_URL = 'https://api.unsplash.com/search/photos'
const UNSPLASH_SECRET = 'xAwSERzXEXja2GweI7oF1568lWiEsZex0fEqmHFp6kk'

interface PickUnsplashImageProps {
	setImage: (url: string) => void
}

const PickUnsplashImage: React.FC<PickUnsplashImageProps> = ({ setImage }) => {
	const [images, setImages] = React.useState<string[]>([])
	const [searchTerm, setSearchTerm] = React.useState<string>('')

	const searchUnsplash = async (searchText: string) => {
		const searchParams = new URLSearchParams({
			client_id: UNSPLASH_SECRET,
			query: searchText,
		})

		const url = new URL(UNSPLASH_URL)
		url.search = searchParams.toString()

		const response = await fetch(url.toString()).then(res => res.json())
		const urls = response.results.map((result: any) => result.urls.small)

		setImages(urls)
	}

	return (
		<IonGrid>
			<IonRow>
				<IonInput
					value={searchTerm}
					placeholder='Search...'
					onIonChange={e => setSearchTerm(e.detail.value!)}
				/>
				<IonButton onClick={() => searchUnsplash(searchTerm)}>Search</IonButton>
			</IonRow>
			<IonRow>
				<IonGrid className='search-grid'>
					{images.length > 0 &&
						images
							.reduce(
								(acc: string[][], val: string) =>
									acc.at(0)!.length === 3
										? [[val], ...acc]
										: [[...acc.at(0)!, val], ...acc.slice(1)],
								[[]]
							)
							.reverse()
							.map(image => (
								<IonRow key={image.reduce((acc, val) => acc + val)}>
									{image.map(url => (
										<IonCol key={url}>
											<IonImg src={url} onClick={() => setImage(url)} />
										</IonCol>
									))}
								</IonRow>
							))}
				</IonGrid>
			</IonRow>
		</IonGrid>
	)
}

export default PickUnsplashImage
