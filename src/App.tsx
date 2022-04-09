import { Route } from 'react-router-dom'
import React from 'react'
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import './global.scss'
import SignUp from './pages/signUpLogin/signUp'
import Login from './pages/signUpLogin/login'
import Landing from './pages/landing'
import Home from './pages/home'

setupIonicReact()

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<IonRouterOutlet>
				<Route path='/' component={Landing}></Route>
				<Route path='/signUp' component={SignUp}></Route>
				<Route path='/login' component={Login}></Route>
				<Route path='/home' component={Home}></Route>
			</IonRouterOutlet>
		</IonReactRouter>
	</IonApp>
)

export default App
