import { IonButton, IonContent, IonItem } from '@ionic/react'
import React from 'react'
import './PickLocalImage.css'

interface PickLocalImageProps {
	setImage: (url: string) => void
}

const PickLocalImage: React.FC<PickLocalImageProps> = ({
	setImage,
}) => {
	const handleChange = (files: FileList | null) => {
		if (files && files.length > 0) {
			const file = files[0]
			setImage(URL.createObjectURL(file))
		}
	}

	return (
		<IonContent>
			<IonItem class='ion-input'>
				<input
					type='file'
					accept='image/png, image/jpeg'
					onChange={e => handleChange(e.target.files)}
				/>
			</IonItem>
		</IonContent>
	)
}

export default PickLocalImage
