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
import { useState } from 'react'
import './style.scss'
import defImg from '../../assets/images/default-pic.png'
import { Tweet } from '../../models'

type Props = {
	name: string
	username: string
	date: string
	e: Tweet
	tweet: string
	tweetImg: string
	likes: number
	retweets: number
	handleDelTweet: (id: string | undefined) => void
}

const TweetList = (props: Props) => {
	const [showActionSheet, setShowActionSheet] = useState<boolean>(false)
	const [currentTweet, setCurrentTweet] = useState<Tweet>()
	const [showDelAlert, setShowDelAlert] = useState<boolean>(false)
	const [showDelToast, setShowDelToast] = useState<boolean>(false)

	const handleOptsTweet = (e: Tweet) => {
		setCurrentTweet(e)
		setShowActionSheet(true)
	}

	return (
		<IonGrid>
			<IonRow class='tweet-card'>
				<IonCol className='ion-padding' sizeXs='2' sizeSm='1'>
					<IonAvatar className='prof-user-post'>
						<img src={defImg} alt='Imagen de usuario'></img>
					</IonAvatar>
				</IonCol>

				<IonCol sizeXs='10' sizeSm='11'>
					<IonRow className='tweet-info'>
						<IonCol sizeXs='12'>
							<div className='div-name'>
								<p className='name'>{props.name}</p>
								<span className='info'>@{props.username}</span>
								<span className='info'>{props.date}</span>
								<IonButton
									onClick={() => handleOptsTweet(props.e)}
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

					<IonRow>
						<IonCol sizeXs='12' sizeSm='8' sizeXl='3'>
							<div>{props.tweet}</div>
						</IonCol>
						{props.tweetImg !== '' ? <img src={props.tweetImg} /> : null}
					</IonRow>
					<IonRow>
						<IonCol sizeXs='3'>
							<IonButton fill='clear' color='medium' size='small'>
								<IonIcon slot='start' icon={chatbubbleOutline} />
							</IonButton>
						</IonCol>

						<IonCol sizeXs='3'>
							<IonButton fill='clear' color='medium' size='small'>
								<IonIcon slot='start' color='medium' icon={repeatOutline} />
								{props.retweets}
							</IonButton>
						</IonCol>

						<IonCol sizeXs='3'>
							<IonButton fill='clear' color='medium' size='small'>
								<IonIcon slot='start' icon={heartOutline} />
								{props.likes}
							</IonButton>
						</IonCol>

						<IonCol sizeXs='3'>
							<IonButton fill='clear' color='medium' size='small'>
								<IonIcon slot='start' icon={shareSocialOutline} />
							</IonButton>
						</IonCol>
					</IonRow>
				</IonCol>
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
									props.handleDelTweet(currentTweet?._id)
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
			</IonRow>
		</IonGrid>
	)
}

export default TweetList
