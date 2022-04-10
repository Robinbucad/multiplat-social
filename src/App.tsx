import { Route } from 'react-router-dom'
import React from 'react'
import {
	IonApp,
	IonIcon,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	setupIonicReact,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import './global.scss'
import SignUp from './pages/signUpLogin/signUp'
import Login from './pages/signUpLogin/login'
import Landing from './pages/landing'
import Home from './pages/home'
import Explore from './pages/explore'
import { triangle } from 'ionicons/icons'

setupIonicReact()

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<IonRouterOutlet>
				<Route exact path='/' component={Landing}></Route>
				<Route exact path='/signUp' component={SignUp}></Route>
				<Route exact path='/login' component={Login}></Route>
				<Route exact path='/home' component={Home}></Route>
				<Route exact path='/explore' component={Explore}></Route>
			</IonRouterOutlet>
		</IonReactRouter>
	</IonApp>
)

export default App
