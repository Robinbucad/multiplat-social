import {
	IonAvatar,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonMenuToggle,
} from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import defaultPic from '../../assets/images/default-pic.png'
import './style.scss'

const Header: React.FC = () => {
	const location = useLocation()
	const [title, setTitle] = useState<string>('')
	useEffect(() => {
		const handleTitle = (path: string) => {
			switch (path) {
				case '/home':
					setTitle('Inicio')
			}
		}
		handleTitle(location.pathname)
	}, [location])

	return (
		<IonHeader className='ion-padding'>
			<IonToolbar>
				<IonMenuToggle slot='start'>
					<IonAvatar className='img-prof'>
						<img
							src={defaultPic}
							className='img-prof'
							alt='Imagen del usuario'
						/>
					</IonAvatar>
				</IonMenuToggle>

				<IonTitle color='dark'>{title}</IonTitle>
			</IonToolbar>
		</IonHeader>
	)
}

export default Header
