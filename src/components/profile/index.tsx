import './style.scss'
import {
	IonAvatar,
	IonButton,
	IonCol,
	IonGrid,
	IonIcon,
	IonRow,
} from '@ionic/react'
import React, { useContext } from 'react'
import defaultPic from '../../assets/images/default-pic.png'
import { UserContext } from '../../context/user/user.context'
import { calendarOutline } from 'ionicons/icons'
import ToolBarProfile from '../toolBarProfile'

const UserProfile: React.FC = () => {
	const { user } = useContext(UserContext)

	return (
		<IonGrid>
			<IonRow>
				<IonCol>
					<IonAvatar>
						<img src={defaultPic}></img>
					</IonAvatar>
				</IonCol>
				<IonCol className='ion-align-self-center'>
					<IonButton size='small' shape='round' fill='outline'>
						Editar perfil
					</IonButton>
				</IonCol>
			</IonRow>
			<IonRow>
				<IonCol>
					<div className='info-user ion-padding-top'>
						<div className='username-tag'>
							<span className='username'>{user.name}</span>
							<span className='info info-profile'>@{user.username}</span>
						</div>

						<span className='info date-profile'>
							<IonIcon icon={calendarOutline}></IonIcon>
							Se unión el 09/04/2022
						</span>
						<span className='follows'>3 siguiendo 1 seguidor</span>
					</div>
				</IonCol>
			</IonRow>
			<IonRow>
				<ToolBarProfile></ToolBarProfile>
			</IonRow>
		</IonGrid>
	)
}

export default UserProfile
