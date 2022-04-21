import {
	IonActionSheet,
	IonAlert,
	IonAvatar,
	IonButton,
	IonCol,
	IonGrid,
	IonIcon,
	IonRow,
	IonToast,
} from '@ionic/react'
import {
	chatbubbleOutline,
	repeatOutline,
	heartOutline,
	shareSocialOutline,
	ellipsisHorizontalCircleOutline,
} from 'ionicons/icons'
import React, { useContext, useEffect, useState } from 'react'
import './style.scss'
import defImg from '../../assets/images/default-pic.png'
import { UserContext } from '../../context/user/user.context'
import { deleteTweet, GetUserTweets } from '../../functions/API'
import { Tweet } from '../../models'

const TweetList: React.FC = () => {
	const { user } = useContext(UserContext)
	const [tweets, setTweets] = useState<Tweet[]>([])
	const [showActionSheet, setShowActionSheet] = useState<boolean>(false)
	const [currentTweet, setCurrentTweet] = useState<Tweet>()
	const [showDelAlert, setShowDelAlert] = useState<boolean>(false)
	const [showDelToast, setShowDelToast] = useState<boolean>(false)
	useEffect(() => {
		const handleTweets = async () => {
			const userTweets: Tweet[] = await GetUserTweets(user._id)
			setTweets(userTweets)
		}
		handleTweets()
	}, [])

	const handleOptsTweet = (e: Tweet) => {
		setCurrentTweet(e)
		setShowActionSheet(true)
	}
	const handleDelTweet = async (id: string | undefined) => {
		const delTweetNoRefresh = tweets.filter(t => t._id !== id)
		setTweets(delTweetNoRefresh)
		await deleteTweet(id)
	}

	return (
		<IonGrid>
			{tweets.map((e, i) => (
				<IonRow key={i}>
					<IonCol className='ion-padding' sizeXs='2' sizeSm='1'>
						<IonAvatar className='prof-user-post'>
							<img src={defImg} alt='Imagen de usuario'></img>
						</IonAvatar>
					</IonCol>

					<IonCol sizeXs='10' sizeSm='11'>
						<IonRow className='tweet-info'>
							<IonCol sizeXs='12'>
								<div className='div-name'>
									<p className='name'>{user.name}</p>
									<span className='info'>@{user.username}</span>
									<span className='info'>{e.date}</span>
									<IonButton
										onClick={() => handleOptsTweet(e)}
										className='div-name'
										fill='clear'
									>
										<IonIcon
											color='dark'
											icon={ellipsisHorizontalCircleOutline}
										></IonIcon>
									</IonButton>
								</div>
							</IonCol>
						</IonRow>
						<IonActionSheet
							isOpen={showActionSheet}
							onDidDismiss={() => setShowActionSheet(false)}
							cssClass='my-custom-class'
							buttons={[
								{
									text: 'Delete',
									role: 'destructive',

									id: 'delete-button',
									data: {
										type: 'delete',
									},
									handler: () => {
										setShowDelAlert(true)
									},
								},
								{
									text: 'Share',

									data: 10,
									handler: () => {
										console.log('Share clicked')
									},
								},

								{
									text: 'Favorite',

									handler: () => {
										console.log('Favorite clicked')
									},
								},
								{
									text: 'Cancel',

									role: 'cancel',
									handler: () => {
										console.log('Cancel clicked')
									},
								},
							]}
						></IonActionSheet>
						<IonAlert
							isOpen={showDelAlert}
							onDidDismiss={() => setShowDelAlert(false)}
							cssClass='alert'
							header={'¿Quieres eliminar el tweet?'}
							message={
								'Esta acción no se puede revertir, y se lo eliminará de tu perfil, de la cronología de las cuentas que te sigan y de los resultados de búsqueda de Twitter.'
							}
							buttons={[
								{
									text: 'Eliminar',
									role: 'delete',
									cssClass: 'btn-del',
									handler: () => {
										setShowDelToast(true)
										setTimeout(() => {
											handleDelTweet(currentTweet?._id)
										}, 500)
									},
								},
								{
									text: 'Cancelar',
									role: 'cancel',
									cssClass: 'btn-cancel',
									handler: () => {
										console.log('Confirm Cancel')
									},
								},
							]}
						/>
						<IonToast
							isOpen={showDelToast}
							onDidDismiss={() => setShowDelToast(false)}
							message='Se ha borrado correctamente.'
						/>

						<IonRow>
							<IonCol sizeXs='12' sizeSm='8' sizeXl='3'>
								<div>{e.tweet}</div>
							</IonCol>
							{e.img !== '' ? <img src={e.img} /> : null}
						</IonRow>
						<IonRow>
							<IonCol sizeXs='3'>
								<IonButton fill='clear' color='medium' size='small'>
									<IonIcon slot='start' icon={chatbubbleOutline} />
								</IonButton>
							</IonCol>

							<IonCol sizeXs='3'>
								<IonButton fill='clear' color='medium' size='small'>
									<IonIcon slot='start' color='primary' icon={repeatOutline} />
									20
								</IonButton>
							</IonCol>

							<IonCol sizeXs='3'>
								<IonButton fill='clear' color='medium' size='small'>
									<IonIcon slot='start' icon={heartOutline} />
									10
								</IonButton>
							</IonCol>

							<IonCol sizeXs='3'>
								<IonButton fill='clear' color='medium' size='small'>
									<IonIcon slot='start' icon={shareSocialOutline} />
								</IonButton>
							</IonCol>
						</IonRow>
					</IonCol>
				</IonRow>
			))}
		</IonGrid>
	)
}

export default TweetList
