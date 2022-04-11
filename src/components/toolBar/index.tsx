import { IonIcon, IonButton, IonItem, IonToolbar } from '@ionic/react'

import './style.scss'
import {
	notificationsOutline,
	mailOutline,
	searchOutline,
	homeOutline,
} from 'ionicons/icons'
import React from 'react'

const ToolBar: React.FC = () => {
	const handleExplore = () => {
		window.location.href = `/explore/`
	}
	const handleHome = () => {
		window.location.href = `/home/`
	}

	return (
		<IonToolbar>
			<IonItem>
				<IonButton onClick={handleHome} fill='clear' className='btn-tool'>
					<IonIcon icon={homeOutline} />
				</IonButton>

				<IonButton fill='clear' onClick={handleExplore} className='btn-tool'>
					<IonIcon icon={searchOutline} />
				</IonButton>

				<IonButton fill='clear' className='btn-tool'>
					<IonIcon icon={notificationsOutline} />
				</IonButton>

				<IonButton fill='clear' className='btn-tool'>
					<IonIcon icon={mailOutline} />
				</IonButton>
			</IonItem>
		</IonToolbar>
	)
}

export default ToolBar
