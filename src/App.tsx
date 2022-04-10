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
const token = sessionStorage.getItem('token')

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<IonRouterOutlet>
				<Route
					exact
					path='/'
					render={() => {
						return token ? <Landing /> && <Home /> : <Landing />
					}}
				></Route>
				<Route exact path='/signUp' component={SignUp}></Route>
				<Route exact path='/login' component={Login}></Route>
				<Route
					exact
					path='/home'
					render={() => {
						return token ? <Landing /> && <Home /> : <Landing />
					}}
				></Route>
			</IonRouterOutlet>
		</IonReactRouter>
	</IonApp>
)

export default App
