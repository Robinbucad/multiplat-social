import {
	IonAvatar,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonMenuToggle,
} from '@ionic/react'
import React, { useEffect, useState, useContext } from 'react'
import { useLocation } from 'react-router'
import defaultPic from '../../assets/images/default-pic.png'
import { UserContext } from '../../context/user/user.context'
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
	const { user } = useContext(UserContext)

	return (
		<IonHeader className='ion-padding'>
			<IonToolbar>
				<IonMenuToggle slot='start'>
					<IonAvatar className='img-prof'>
						<img
							src={user.file === '' ? defaultPic : user.file}
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
