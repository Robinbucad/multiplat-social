import { IonContent, IonPage } from '@ionic/react'
import React from 'react'

import Header from '../../components/header'
import MenuLeft from '../../components/menu'
import ToolBar from '../../components/toolBar'
import { useSessionUser } from '../../functions/Utils'

const ExploreApp: React.FC = () => {
	useSessionUser()
	return (
		<IonPage>
			<Header></Header>
			<MenuLeft></MenuLeft>
			<IonContent fullscreen>
				<h1>HOLA</h1>
			</IonContent>
			<ToolBar />
		</IonPage>
	)
}

export default ExploreApp
