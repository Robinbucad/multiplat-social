import { IonContent, IonPage } from '@ionic/react'
import React, { useContext } from 'react'

import HeaderTweets from '../../components/headerTweets'
import MenuLeft from '../../components/menu'
import UserProfile from '../../components/profile'
import ToolBar from '../../components/toolBar'
import Tweet from '../../components/tweet'
import TweetList from '../../components/tweetList/indext'
import { UserContext } from '../../context/user/user.context'

const UserPage: React.FC = () => {
	const { user } = useContext(UserContext)
	return (
		<IonPage>
			<HeaderTweets title={user.name}></HeaderTweets>
			<MenuLeft></MenuLeft>
			<IonContent>
				<UserProfile></UserProfile>
				<TweetList></TweetList>
				<TweetList></TweetList>
				<TweetList></TweetList>
				<Tweet></Tweet>
			</IonContent>

			<ToolBar></ToolBar>
		</IonPage>
	)
}

export default UserPage
