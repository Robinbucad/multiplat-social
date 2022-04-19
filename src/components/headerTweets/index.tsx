import { IonHeader, IonTitle, IonIcon } from '@ionic/react'
import React from 'react'
import { arrowBackOutline } from 'ionicons/icons'
import './style.scss'

type Props = {
	title?: string
}

const HeaderTweets: React.FC<Props> = props => {
	return (
		<IonHeader className='headerTweets ion-padding'>
			<IonIcon icon={arrowBackOutline}></IonIcon>
			<IonTitle color='dark'>{props.title}</IonTitle>
		</IonHeader>
	)
}

export default HeaderTweets
