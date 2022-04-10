import React, { useCallback, useContext, useState } from 'react'
import './style.scss'
import { logoTwitter, closeOutline } from 'ionicons/icons'
import {
	IonButton,
	IonCol,
	IonGrid,
	IonIcon,
	IonInput,
	IonItem,
	IonList,
	IonProgressBar,
	IonRow,
	IonText,
	IonTitle,
	NavContext,
} from '@ionic/react'
import { UserContext } from '../../context/user/user.context'
import { LoginUser } from '../../functions/API'

const Login: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(false)
	const { navigate } = useContext(NavContext)
	const redirect = useCallback(() => navigate('/home'), [])
	const { setUser } = useContext(UserContext)

	const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()
		setLoading(true)
		const userFormData = new FormData(e.target)
		const user = await LoginUser(userFormData)
		if (user?.dataSingleUser) {
			await setUser(user)
			setLoading(false)
			redirect()
		}
		if (user?.res === undefined) {
			alert('Datos incorrectos')
			setLoading(false)
		}
	}
	return (
		<IonGrid>
			<IonRow>
				<IonCol size='2'>
					<IonButton
						className='ion-align-self-center'
						color='dark'
						fill='clear'
						href='/'
					>
						<IonIcon size='large' icon={closeOutline} />
					</IonButton>
				</IonCol>

				<IonCol className='ion-text-center'>
					<IonIcon icon={logoTwitter} size='large' color='secondary' />
				</IonCol>
			</IonRow>
			<IonRow className='ion-text-center'>
				<IonCol className='ion-margin-top'>
					<IonTitle className='ion-text-start title-Login'>
						Inicia sesión en Twitter
					</IonTitle>
				</IonCol>
			</IonRow>

			<form onSubmit={handleSubmit}>
				{loading ? (
					<IonProgressBar type='indeterminate'></IonProgressBar>
				) : null}
				<IonRow className='ion-padding'>
					<IonCol>
						<IonList>
							<IonItem>
								<IonInput
									name='email'
									className='primary-input'
									type='text'
									placeholder='Coreo Electronico'
								></IonInput>
							</IonItem>
						</IonList>

						<IonList>
							<IonItem>
								<IonInput
									name='password'
									className='primary-input'
									type='password'
									placeholder='Contraseña'
								></IonInput>
							</IonItem>
						</IonList>
					</IonCol>
				</IonRow>

				<IonButton
					type='submit'
					shape='round'
					className='btn-signUp '
					expand='block'
				>
					Iniciar sesión
				</IonButton>

				<IonButton
					fill='outline'
					shape='round'
					className='btn-signUp ion-margin-top'
					expand='block'
				>
					¿Olvidaste tu contraseña?
				</IonButton>
			</form>
			<IonRow>
				<IonCol className='notAcc'>
					<IonText>
						¿No tienes una cuenta? <a href='/signUp'>Regístrate</a>
					</IonText>
				</IonCol>
			</IonRow>
		</IonGrid>
	)
}
export default Login
