import { IonContent, IonPage } from '@ionic/react'
import React, { useContext, useState, useEffect } from 'react'

import HeaderTweets from '../../components/headerTweets'
import MenuLeft from '../../components/menu'
import UserProfile from '../../components/profile'
import ToolBar from '../../components/toolBar'
import CreateTweetBtn from '../../components/tweet'

import TweetList from '../../components/tweetList/indext'
import { UserContext } from '../../context/user/user.context'
import { deleteTweet, GetUserTweets } from '../../functions/API'
import { useSessionUser } from '../../functions/Utils'
import { Tweet } from '../../models'

const UserPage: React.FC = () => {
	const { user } = useContext(UserContext)
	useSessionUser()

	const [tweets, setTweets] = useState<Tweet[]>([])

	useEffect(() => {
		const handleTweets = async () => {
			const userTweets: Tweet[] = await GetUserTweets(user._id)
			setTweets(userTweets)
		}
		handleTweets()
	}, [])

	const handleDelTweet = async (id: string | undefined) => {
		const delTweetNoRefresh = tweets.filter(t => t._id !== id)
		setTweets(delTweetNoRefresh)
		await deleteTweet(id)
	}

	return (
		<IonPage>
			<HeaderTweets title={user.name}></HeaderTweets>
			<MenuLeft></MenuLeft>
			<IonContent>
				<UserProfile></UserProfile>
				{tweets.map((e, i) => (
					<TweetList
						key={i}
						name={e.name}
						username={e.username}
						date={e.date}
						e={e}
						tweet={e.tweet}
						tweetImg={e.tweetImg}
						likes={e.likes.length}
						retweets={e.retweets.length}
						handleDelTweet={handleDelTweet}
					></TweetList>
				))}
			</IonContent>

			<CreateTweetBtn />
			<ToolBar></ToolBar>
		</IonPage>
	)
}

export default UserPage
