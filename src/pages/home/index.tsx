import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import Header from '../../components/header'
import MenuLeft from '../../components/menu'

import PostList from '../../components/postList'
import ToolBar from '../../components/toolBar'

const Home: React.FC = () => {
	return (
		<IonPage>
			<Header></Header>
			<MenuLeft></MenuLeft>
			<IonContent fullscreen>
				<PostList></PostList>
			</IonContent>
			<ToolBar />
		</IonPage>
	)
}

export default Home
