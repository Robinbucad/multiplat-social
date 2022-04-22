import { IonHeader, IonTitle, IonIcon, IonButton } from '@ionic/react'
import React from 'react'
import { arrowBackOutline } from 'ionicons/icons'
import './style.scss'

type Props = {
	title?: string
}

const HeaderTweets: React.FC<Props> = props => {
	const handleHome = () => {
		window.location.href = `/home`
	}

	return (
		<IonHeader className='headerTweets ion-padding'>
			<IonButton onClick={handleHome} fill='clear' color='dark'>
				<IonIcon icon={arrowBackOutline}></IonIcon>
			</IonButton>

			<IonTitle color='dark'>{props.title}</IonTitle>
		</IonHeader>
	)
}

export default HeaderTweets
