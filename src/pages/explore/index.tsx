import {
	IonAvatar,
	IonContent,
	IonItem,
	IonLabel,
	IonList,
	IonPage,
} from '@ionic/react'
import React, { useState } from 'react'
import defPic from '../../assets/images/default-pic.png'
import Header from '../../components/header'
import MenuLeft from '../../components/menu'
import ToolBar from '../../components/toolBar'
import { GetAllUsers } from '../../functions/API'
import { useSessionUser } from '../../functions/Utils'
import { UserType } from '../../models'

const ExploreApp: React.FC = () => {
	useSessionUser()
	const [searchUser, setSearchUser] = useState<UserType[]>([])
	const handleSearch = async (e: any) => {
		if (e === '') {
			setSearchUser([])
		} else {
			const allUsers = await GetAllUsers()
			const allUsersFiltered = allUsers.filter(u =>
				u.name.toLowerCase().includes(e)
			)
			setSearchUser(allUsersFiltered)
		}
	}
	return (
		<IonPage>
			<Header handleSearch={handleSearch}></Header>
			<MenuLeft></MenuLeft>
			<IonContent fullscreen>
				<IonList>
					{searchUser.length === 0 ? (
						<p className='ion-text-center'>Intenta buscar una persona</p>
					) : (
						searchUser.map((e, i) => (
							<IonItem key={i}>
								<IonAvatar>
									<img src={e.file === '' ? defPic : e.file} />
								</IonAvatar>
								<IonLabel className='ion-padding'>{e.name}</IonLabel>
							</IonItem>
						))
					)}
				</IonList>
			</IonContent>
			<ToolBar />
		</IonPage>
	)
}

export default ExploreApp
