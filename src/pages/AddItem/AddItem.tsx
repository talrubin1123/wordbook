import {
	IonContent,
	IonHeader,
	IonImg,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react'
import { useParams } from 'react-router'
import { ImageSource } from '../../models/ImageSource'
import PickLocalImage from '../../components/ImagePicker/PickLocalImage'
import PickUnsplashImage from '../../components/ImagePicker/PickUnsplashImage'
import './AddItem.css'
import React from 'react'
import ImagePicker from '../../components/ImagePicker'

interface AddItemParams {
	mode: ImageSource
}

enum AddItemStep {
	PickImage = 1,
	AddTitle = 2,
	AddCategory = 3,
}

const imageSourceDisplayName = {
	[ImageSource.LOCAL]: 'local storage',
	[ImageSource.UNSPLASH]: 'Unsplash',
}

const IMAGE_PLACEHOLDER =
	'https://background-filters.herokuapp.com/placeholder.jpg'

const AddItem: React.FC = () => {
	const params = useParams<AddItemParams>()
	const mode = params.mode as ImageSource

	const [image, setImage] = React.useState<string>(IMAGE_PLACEHOLDER)
	const [step, setStep] = React.useState<AddItemStep>(AddItemStep.PickImage)

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Add item from {imageSourceDisplayName[mode]}</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonImg src={image} />
				{step === AddItemStep.PickImage && (
					<>
                    <ImagePicker mode={mode} setImage={setImage} />
						{mode === ImageSource.LOCAL && (
							<PickLocalImage
								setImage={setImage}
								onConfirm={() => setStep(AddItemStep.AddTitle)}
							/>
						)}
						{mode === ImageSource.UNSPLASH && (
							<PickUnsplashImage
								setImage={setImage}
								onConfirm={() => setStep(AddItemStep.AddTitle)}
							/>
						)}
					</>
				)}
			</IonContent>
		</IonPage>
	)
}

export default AddItem
