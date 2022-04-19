import { IonContent, IonPage, IonProgressBar } from '@ionic/react'

import React, { useContext } from 'react'
import Header from '../../components/header'
import MenuLeft from '../../components/menu'

import PostList from '../../components/postList'
import ToolBar from '../../components/toolBar'
import { UserContext } from '../../context/user/user.context'

import { useSessionUser } from '../../functions/Utils'

const Home: React.FC = () => {
	useSessionUser()
	const { loading } = useContext(UserContext)
	return (
		<IonPage>
			<Header title='Inicio'></Header>
			<MenuLeft></MenuLeft>
			<IonContent fullscreen>
				{loading ? (
					<IonProgressBar type='indeterminate'></IonProgressBar>
				) : null}
				<PostList></PostList>
			</IonContent>

			<ToolBar />
		</IonPage>
	)
}

export default Home
