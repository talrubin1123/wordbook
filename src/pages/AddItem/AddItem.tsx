import {
	IonButton,
	IonContent,
	IonHeader,
	IonImg,
	IonInput,
	IonPage,
	IonText,
	IonTitle,
	IonToolbar,
} from '@ionic/react'
import React from 'react'
import { useParams } from 'react-router'
import { useRecoilState } from 'recoil'
import { userState } from '../../atom/userAtom'
import CategoryPicker from '../../components/CategoryPicker'
import ImagePicker from '../../components/ImagePicker'
import Image from '../../models/Image'
import { ImageSource } from '../../models/ImageSource'
import Item from '../../models/Item'
import './AddItem.css'

interface AddItemParams {
	source: ImageSource
}

enum AddItemStep {
	PickImage = 1,
	AddTitle = 2,
	PickCategory = 3,
}

const imageSourceDisplayName = {
	[ImageSource.LOCAL]: 'local storage',
	[ImageSource.UNSPLASH]: 'Unsplash',
}

const IMAGE_PLACEHOLDER =
	'https://background-filters.herokuapp.com/placeholder.jpg'

const AddItem: React.FC = () => {
	const params = useParams<AddItemParams>()
	const source = params.source as ImageSource

	const [user] = useRecoilState(userState)

	const [item, setItem] = React.useState<Item>({
		title: '',
		image: new Image({ url: IMAGE_PLACEHOLDER }),
		categories: [],
	})
	const [step, setStep] = React.useState<AddItemStep>(AddItemStep.PickImage)

	const validate = () => {
		const errors: {
			image: string | undefined
			title: string | undefined
			categories: string | undefined
		} = {
			image: undefined,
			title: undefined,
			categories: undefined,
		}

		if (item.image.url === IMAGE_PLACEHOLDER)
			errors.image = 'Please pick an image'
		if (
			item.title === undefined ||
			item.title === null ||
			item.title.trim().length === 0
		)
			errors.title = 'Please enter a title'
		if (item.categories.length === 0)
			errors.categories = 'Please pick a category'

		return errors
	}

	const handleSubmit = async () => {
		const errors = validate()

		if (Object.values(errors).some(v => v !== undefined)) {
			alert(JSON.stringify(errors))
			return
		}

		const body = new FormData()
		body.append('title', item.title)
		body.append('categories', JSON.stringify(item.categories))

		if (item.image.file) body.append('image', item.image.file)
		else body.append('image', item.image.url)

		const response = await fetch('/api/items', {
			method: 'POST',
			headers: {
				'Content-Type': 'multipart/form-data',
				Authorization: `Bearer ${user.accessToken}`,
			},
			body,
		})

		console.log(response)
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Add item from {imageSourceDisplayName[source]}</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonImg src={item.image.url} />
				<IonText>{item.title}</IonText>
				{step === AddItemStep.PickImage && (
					<ImagePicker
						source={source}
						setImage={image => setItem({ ...item, image })}
					/>
				)}
				{step === AddItemStep.AddTitle && (
					<IonInput
						placeholder='Item name goes here...'
						value={item.title}
						onIonChange={e => setItem({ ...item, title: e.detail.value! })}
					/>
				)}
				{step === AddItemStep.PickCategory && (
					<CategoryPicker
						selectedCategories={item.categories}
						setSelectedCategories={selectedCategories =>
							setItem({
								...item,
								categories: selectedCategories,
							})
						}
					/>
				)}
				{step !== AddItemStep.PickImage && (
					<IonButton onClick={() => setStep(step - 1)}>Back</IonButton>
				)}
				{step !== AddItemStep.PickCategory && (
					<IonButton onClick={() => setStep(step + 1)}>Next</IonButton>
				)}
				{step === AddItemStep.PickCategory && (
					<IonButton onClick={handleSubmit}>Submit</IonButton>
				)}
			</IonContent>
		</IonPage>
	)
}

export default AddItem
