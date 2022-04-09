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
	IonTitle,
} from '@ionic/react'

const SignUpLogin: React.FC = () => {
	return (
		<IonGrid>
			<IonRow>
				<IonButton
					className='ion-align-self-center'
					color='dark'
					fill='clear'
					href='/'
				>
					<IonIcon size='large' icon={closeOutline} />
				</IonButton>

				<IonCol className='ion-text-center'>
					<IonIcon icon={logoTwitter} size='large' color='secondary' />
				</IonCol>
			</IonRow>
			<IonRow className='ion-text-center'>
				<IonCol>
					<IonTitle className='ion-text-start'>Crea tu cuenta</IonTitle>
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
									placeholder='Nombre'
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

						<IonList>
							<IonItem>
								<IonInput
									className='primary-input'
									type='password'
									placeholder='Repita la contraseña'
								></IonInput>
							</IonItem>
						</IonList>
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol>
						<IonTitle className='date-birth  ion-text-start'>
							Fecha de nacimiento
						</IonTitle>
					</IonCol>
				</IonRow>
				<IonRow className='ion-padding'>
					<IonCol>
						<IonList>
							<IonItem>
								<IonInput className='primary-input' type='date'></IonInput>
							</IonItem>
						</IonList>
					</IonCol>
				</IonRow>
				<IonButton shape='round' className='btn-signUp ' expand='block'>
					Registrarse
				</IonButton>
			</form>
		</IonGrid>
	)
}
export default SignUpLogin
