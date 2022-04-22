import { IonContent, IonPage, IonProgressBar } from '@ionic/react'

import React, { useContext, useState, useEffect } from 'react'
import Header from '../../components/header'
import MenuLeft from '../../components/menu'
import ToolBar from '../../components/toolBar'
import CreateTweetBtn from '../../components/tweet'
import TweetList from '../../components/tweetList/indext'
import { UserContext } from '../../context/user/user.context'
import { deleteTweet, GetUserTweets } from '../../functions/API'

import { useSessionUser } from '../../functions/Utils'
import { Tweet } from '../../models'

const Home: React.FC = () => {
	useSessionUser()
	const { user, loading } = useContext(UserContext)

	const [tweets, setTweets] = useState<Tweet[]>([])

	useEffect(() => {
		const handleTweets = async () => {
			const userTweets: Tweet[] = await GetUserTweets(user._id)
			setTweets(userTweets)
		}
		handleTweets()
	}, [])

	const handleDelTweet = async (id: string | undefined) => {
		console.log(id)
		const delTweetNoRefresh = tweets.filter(t => t._id !== id)
		setTweets(delTweetNoRefresh)
		await deleteTweet(id)
	}

	return (
		<IonPage>
			<Header title='Inicio'></Header>
			<MenuLeft></MenuLeft>
			<IonContent fullscreen>
				{loading ? (
					<IonProgressBar type='indeterminate'></IonProgressBar>
				) : null}
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
				<CreateTweetBtn />
			</IonContent>

			<ToolBar />
		</IonPage>
	)
}

export default Home
