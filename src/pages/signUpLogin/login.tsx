import React from 'react'
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
	IonRow,
	IonText,
	IonTitle,
} from '@ionic/react'

const Login: React.FC = () => {
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

			<form>
				<IonRow className='ion-padding'>
					<IonCol>
						<IonList>
							<IonItem>
								<IonInput
									className='primary-input'
									type='text'
									placeholder='Coreo Electronico'
								></IonInput>
							</IonItem>
						</IonList>

						<IonList>
							<IonItem>
								<IonInput
									className='primary-input'
									type='password'
									placeholder='Contraseña'
								></IonInput>
							</IonItem>
						</IonList>
					</IonCol>
				</IonRow>

				<IonButton shape='round' className='btn-signUp ' expand='block'>
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
