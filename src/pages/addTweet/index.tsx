import {
	IonAvatar,
	IonButton,
	IonCol,
	IonContent,
	IonHeader,
	IonIcon,
	IonItem,
	IonPage,
	IonProgressBar,
	IonRow,
	IonTextarea,
	IonToast,
	NavContext,
} from '@ionic/react'
import { arrowBackOutline, imageOutline } from 'ionicons/icons'
import React, { useContext, useState, SyntheticEvent, useCallback } from 'react'
import { UserContext } from '../../context/user/user.context'
import defPic from '../../assets/images/default-pic.png'
import './style.scss'
import { PostTweet } from '../../functions/API'
import { Tweet } from '../../models'

const CreateTweet: React.FC = () => {
	const { user, loading, setLoading } = useContext(UserContext)
	const [text, setText] = useState<string>('')
	const [enableBtn, setEnabled] = useState<boolean>(true)
	const [showAddToast, setShowAddToast] = useState<boolean>(false)

	const redirect: Function = useCallback(
		() => navigate(`/profile/${user.username}`),
		[]
	)
	const { navigate } = useContext(NavContext)

	const handleAddTweet = (e: string) => {
		if (e === '') {
			setEnabled(true)
			setText('')
		} else {
			setText(e)
			setEnabled(false)
		}
	}
	const date = new Date()
	const currentDate = `${date.getDay()} ${date.toLocaleDateString('en-us', {
		month: 'short',
	})} ${date.getFullYear()}`

	const handleSubmitTweet = async (e: SyntheticEvent) => {
		setShowAddToast(true)
		e.preventDefault()
		setText('')
		setLoading(true)
		const tweet: Tweet = {
			tweet: text,
			user: user._id,
			date: currentDate,
		}
		try {
			const res: Response = await PostTweet(tweet)

			if (res.status === 200) {
				setLoading(false)
				redirect()
			} else {
				alert('Se ha producido un error al subir el tweet')
			}
		} catch (err) {
			console.log(err)
		}
	}
	return (
		<IonPage>
			<IonHeader className='header-post-tweet'>
				<IonButton fill='clear' color='dark'>
					<IonIcon icon={arrowBackOutline}></IonIcon>
				</IonButton>
				<IonButton
					onClick={handleSubmitTweet}
					shape='round'
					size='small'
					disabled={enableBtn}
				>
					Twittear
				</IonButton>
			</IonHeader>
			<IonRow>
				<IonCol>
					{loading ? (
						<IonProgressBar type='indeterminate'></IonProgressBar>
					) : null}
				</IonCol>
			</IonRow>
			<IonContent>
				<IonRow>
					<IonCol className='ion-padding' size='1.5'>
						<IonAvatar>
							<img
								className='img-prof-tweet'
								src={user.file === '' ? defPic : user.file}
							></img>
						</IonAvatar>
					</IonCol>
					<IonCol size='10'>
						<IonItem>
							<IonTextarea
								value={text}
								onIonChange={e => handleAddTweet(e.detail.value!)}
								rows={6}
								placeholder='¿Qué está pasando?'
							></IonTextarea>
						</IonItem>
						<IonRow>
							<IonCol size='2'>
								<IonButton fill='clear' size='small'>
									<IonIcon icon={imageOutline}></IonIcon>
								</IonButton>
							</IonCol>
						</IonRow>
					</IonCol>
				</IonRow>
				<IonToast
					isOpen={showAddToast}
					onDidDismiss={() => setShowAddToast(false)}
					message='Se ha subido correctamente.'
					duration={1000}
				/>
			</IonContent>
		</IonPage>
	)
}
export default CreateTweet
