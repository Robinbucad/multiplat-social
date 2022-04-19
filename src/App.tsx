import { Route } from 'react-router-dom'
import React from 'react'
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import './global.scss'
import SignUp from './pages/signUpLogin/signUp'
import Login from './pages/signUpLogin/login'
import Landing from './pages/landing'
import Home from './pages/home'
import Explore from './pages/explore'
import UserPage from './pages/profile'
import CreateTweet from './pages/addTweet'

setupIonicReact()

const App: React.FC = () => {
	return (
		<IonApp>
			<IonReactRouter>
				<IonRouterOutlet>
					<Route path='/' component={Landing}></Route>
					<Route path='/signUp' component={SignUp}></Route>
					<Route path='/login' component={Login}></Route>
					<Route path='/home' component={Home}></Route>
					<Route path='/explore' component={Explore}></Route>
					<Route path='/profile/:userid' component={UserPage}></Route>
					<Route path='/compose/tweet' component={CreateTweet}></Route>
				</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
	)
}

export default App
