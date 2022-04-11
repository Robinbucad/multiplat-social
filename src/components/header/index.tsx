import {
	IonAvatar,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonMenuToggle,
	IonList,
	IonInput,
	IonCol,
	IonRow,
} from '@ionic/react'
import React, { useContext } from 'react'

import defaultPic from '../../assets/images/default-pic.png'
import { UserContext } from '../../context/user/user.context'
import './style.scss'

type Props = {
	title?: string
}

const Header: React.FC<Props> = props => {
	const { user } = useContext(UserContext)

	return (
		<IonHeader className='header'>
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

				{window.location.pathname === `/explore/` ? (
					<IonList lines='none'>
						<IonRow>
							<IonCol size='9'>
								<IonInput
									name='email'
									className='search-input'
									type='text'
									color='dark'
									placeholder='Buscar en twitter'
								></IonInput>
							</IonCol>
						</IonRow>
					</IonList>
				) : null}
				<IonTitle color='dark'>{props.title}</IonTitle>
			</IonToolbar>
		</IonHeader>
	)
}

export default Header
