import {
	IonButton,
	IonContent,
	IonFab,
	IonFabButton,
	IonHeader,
	IonIcon,
	IonImg,
	IonInput,
	IonModal,
	IonPage,
	IonText,
	IonTitle,
	IonToolbar,
} from '@ionic/react'
import { add } from 'ionicons/icons'
import React from 'react'
import './Home.css'

interface Item {
	image: string
	title: string
}

const Home: React.FC = () => {
	const [showModal, setShowModal] = React.useState<boolean>(false)
	const [item, setItem] = React.useState<Item>({
		image: 'https://designshack.net/wp-content/uploads/placehold.jpg',
		title: '',
	})

	const handleAdd = () => {
		alert(item)
		setShowModal(false)
		setItem({
			image: 'https://designshack.net/wp-content/uploads/placehold.jpg',
			title: '',
		})
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Spic</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonFab
					vertical='bottom'
					horizontal='end'
					onClick={e => setShowModal(true)}
				>
					<IonFabButton>
						<IonIcon icon={add} />
					</IonFabButton>
				</IonFab>
			</IonContent>
			<IonModal isOpen={showModal} onWillDismiss={() => setShowModal(false)}>
				<IonContent>
					<IonHeader>
						<IonToolbar>
							<IonTitle>Add item</IonTitle>
						</IonToolbar>
					</IonHeader>
					<IonImg src={item.image} onClick={() => {}} />
					<IonInput
						placeholder='Item name goes here...'
						onIonChange={e => setItem({ ...item, title: e.detail.value! })}
					>
						{item.title}
					</IonInput>
					<IonButton onClick={handleAdd}>Add</IonButton>
				</IonContent>
			</IonModal>
		</IonPage>
	)
}

export default Home
