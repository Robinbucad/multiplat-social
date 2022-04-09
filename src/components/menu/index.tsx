import React from 'react'
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
} from '@ionic/react'
import defaultPic from '../../assets/images/default-pic.png'

const MenuLeft: React.FC = () => {
	return (
		<>
			<IonMenu
				className='leftMenu'
				side='start'
				menuId='first'
				contentId='main'
			>
				<IonHeader>
					<IonToolbar color='primary'>
						<IonTitle>Información de cuenta</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent className='ion-padding'>
					<IonList>
						<IonItem className='item'>
							<IonAvatar className='img-prof'>
								<img src={defaultPic} alt='Imagen perfil usuario'></img>
							</IonAvatar>
						</IonItem>
						<IonItem>
							Robin Bucad <br></br> @BucadRobin
						</IonItem>
						<IonItem>
							<IonIcon icon={personOutline}></IonIcon>
							Perfil
						</IonItem>
						<IonItem>
							<IonIcon icon={listCircleOutline}></IonIcon>
							Listas
						</IonItem>
						<IonItem>
							<IonIcon icon={bookmarkOutline}></IonIcon>
							Guardados
						</IonItem>

						<IonItem>
							<IonIcon icon={flashOutline}></IonIcon>
							Momentos
						</IonItem>

						<IonItem>
							<IonIcon icon={settingsOutline}></IonIcon>
							Perfil
						</IonItem>

						<IonItem>Cerrar sesión</IonItem>
					</IonList>
				</IonContent>
			</IonMenu>
			<IonRouterOutlet id='main'></IonRouterOutlet>
		</>
	)
}

export default MenuLeft
