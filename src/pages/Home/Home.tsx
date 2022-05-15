import {
	IonContent,
	IonFab,
	IonFabButton,
	IonFabList,
	IonHeader,
	IonIcon,
	IonPage,
} from '@ionic/react'
import { add, fileTrayFull, search } from 'ionicons/icons'
import React from 'react'
import { useHistory } from 'react-router-dom'
import ToolBar from '../../components/ToolBar'
import { ImageSource } from '../../models/ImageSource'
import './Home.css'

const Home: React.FC = () => {
	const history = useHistory()

	return (
		<IonPage>
			<IonHeader>
				<ToolBar />
			</IonHeader>
			<IonContent fullscreen>
				<IonFab vertical='bottom' horizontal='end'>
					<IonFabButton>
						<IonIcon icon={add} />
					</IonFabButton>
					<IonFabList side='top'>
						<IonFabButton
							onClick={() => history.push(`/item/add/${ImageSource.LOCAL}`)}
						>
							<IonIcon icon={fileTrayFull} />
						</IonFabButton>
						<IonFabButton
							onClick={() => history.push(`/item/add/${ImageSource.UNSPLASH}`)}
						>
							<IonIcon icon={search} />
						</IonFabButton>
					</IonFabList>
				</IonFab>
			</IonContent>
		</IonPage>
	)
}

export default Home
