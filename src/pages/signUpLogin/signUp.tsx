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
				<IonCol size='1' className='ion-align-self-center'>
					<IonIcon size='large' icon={closeOutline} />
				</IonCol>
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
								<IonInput type='text' placeholder='Nombre'></IonInput>
							</IonItem>
						</IonList>

						<IonList>
							<IonItem>
								<IonInput type='password' placeholder='Contraseña'></IonInput>
							</IonItem>
						</IonList>

						<IonList>
							<IonItem>
								<IonInput
									type='password'
									placeholder='Repita la contraseña'
								></IonInput>
							</IonItem>
						</IonList>
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol>
						<IonTitle className='date-birth ion-text-start'>
							Fecha de nacimiento
						</IonTitle>
					</IonCol>
				</IonRow>
				<IonRow className='ion-padding'>
					<IonCol>
						<IonList>
							<IonItem>
								<IonInput type='date'></IonInput>
							</IonItem>
						</IonList>
					</IonCol>
				</IonRow>
				<IonButton className='btn-signUp' expand='block'>
					Registrarse
				</IonButton>
			</form>
		</IonGrid>
	)
}
export default SignUpLogin
