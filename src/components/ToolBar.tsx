import {
	IonButton,
	IonButtons,
	IonIcon,
	IonImg,
	IonPopover,
	IonToolbar,
} from '@ionic/react'
import {
	ellipsisHorizontal,
	ellipsisVertical,
	logOutOutline,
	personCircle,
} from 'ionicons/icons'
import imgIcon from '../icon/icon.png'

import './ToolBar.css'

import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const ToolBar: React.FC = () => {
	const history = useHistory()
	const [showPopover, setShowPopover] = useState<{
		open: boolean
		event: Event | undefined
	}>({
		open: false,
		event: undefined,
	})
	return (
		<IonToolbar>
			<IonButtons slot='secondary'>
				<IonButton
					onClick={e => setShowPopover({ open: true, event: e.nativeEvent })}
				>
					<IonIcon slot='icon-only' icon={personCircle}>
						<IonPopover
							isOpen={showPopover.open}
							event={showPopover.event}
							onDidDismiss={e =>
								setShowPopover({ open: false, event: undefined })
							}
						>
							<IonButton onClick={() => history.push('/')}>
								log out
								<IonIcon icon={logOutOutline} />
							</IonButton>
						</IonPopover>
					</IonIcon>
				</IonButton>
			</IonButtons>
			<IonButtons slot='primary'>
				<IonButton color='secondary'>
					<IonIcon
						slot='icon-only'
						ios={ellipsisHorizontal}
						md={ellipsisVertical}
					/>
				</IonButton>
			</IonButtons>
			<IonImg src={imgIcon} slot='start' style={{ width: 100, height: 80 }} />
		</IonToolbar>
	)
}

export default ToolBar
