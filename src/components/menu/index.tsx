import React, { useContext } from 'react'
import './style.scss'

import {
	personOutline,
	listCircleOutline,
	bookmarkOutline,
	flashOutline,
	settingsOutline,
} from 'ionicons/icons'
import {
	IonMenu,
	IonHeader,
	IonToolbar,
	IonContent,
	IonList,
	IonItem,
	IonTitle,
	IonRouterOutlet,
	IonAvatar,
	IonIcon,
	IonButton,
	IonProgressBar,
} from '@ionic/react'
import defaultPic from '../../assets/images/default-pic.png'

import { UserContext } from '../../context/user/user.context'

const MenuLeft: React.FC = () => {
	const { user, loading, setLoading } = useContext(UserContext)

	const handleProfile = () => {
		setLoading(true)
		window.location.href = `/profile/${user.username}`
	}

	return (
		<>
			<IonMenu
				className='leftMenu'
				side='start'
				menuId='first'
				contentId='main'
			>
				{loading ? <IonProgressBar type='indeterminate' /> : null}
				<IonHeader>
					<IonToolbar color='primary'>
						<IonTitle>Información de cuenta</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent className='ion-padding'>
					<IonList lines='none'>
						<IonItem className='item'>
							<IonAvatar className='img-prof'>
								<img
									src={user.file === '' ? defaultPic : user.file}
									alt='Imagen perfil usuario'
								></img>
							</IonAvatar>
						</IonItem>
						<IonItem>
							Robin Bucad <br></br> @BucadRobin
						</IonItem>
						<IonItem>
							<IonButton onClick={handleProfile} color='dark' fill='clear'>
								<IonIcon icon={personOutline}></IonIcon>
								Perfil
							</IonButton>
						</IonItem>
						<IonItem>
							<IonButton color='dark' fill='clear'>
								<IonIcon icon={listCircleOutline}></IonIcon>
								Listas
							</IonButton>
						</IonItem>

						<IonItem>
							<IonButton color='dark' fill='clear'>
								<IonIcon icon={bookmarkOutline}></IonIcon>
								Guardados
							</IonButton>
						</IonItem>

						<IonItem>
							<IonButton color='dark' fill='clear'>
								<IonIcon icon={flashOutline}></IonIcon>
								Momentos
							</IonButton>
						</IonItem>

						<IonItem lines='inset'>
							<IonButton
								color='dark'
								onClick={e => console.log(e)}
								fill='clear'
							>
								<IonIcon icon={settingsOutline}></IonIcon>
								Configuración
							</IonButton>
						</IonItem>

						<IonItem>
							<IonButton color='dark' fill='clear'>
								Cerrar sesión
							</IonButton>
						</IonItem>
					</IonList>
				</IonContent>
			</IonMenu>
			<IonRouterOutlet id='main'></IonRouterOutlet>
		</>
	)
}

export default MenuLeft
