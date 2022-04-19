import { IonButton, IonItem, IonToolbar } from '@ionic/react'

import './style.scss'

import React, { useContext } from 'react'
import { UserContext } from '../../context/user/user.context'

const ToolBarProfile: React.FC = () => {
	const { user } = useContext(UserContext)
	const handleHome = () => {
		window.location.href = `/profile/${user.username}/`
	}

	const handleMedia = () => {
		window.location.href = `/${user.username}/media`
	}

	const handleLikes = () => {
		window.location.href = `${user.username}/likes`
	}

	return (
		<IonToolbar className='ion-justify-content-between'>
			<IonItem className='toolb' lines='full'>
				<IonButton onClick={handleHome} fill='clear' className='btn-toolProf'>
					Tweets
				</IonButton>

				<IonButton onClick={handleMedia} fill='clear' className='btn-toolProf'>
					Fotos y videos
				</IonButton>

				<IonButton onClick={handleLikes} fill='clear' className='btn-toolProf'>
					Me gusta
				</IonButton>
			</IonItem>
		</IonToolbar>
	)
}

export default ToolBarProfile
