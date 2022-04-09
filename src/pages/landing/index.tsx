import {
	IonButton,
	IonCol,
	IonGrid,
	IonIcon,
	IonRow,
	IonText,
	IonTitle,
} from '@ionic/react'
import { logoTwitter, logoGoogle } from 'ionicons/icons'
import './style.scss'
import React from 'react'
import twBanner from '../../assets/images/logintw.png'

const Home: React.FC = () => {
	return (
		<IonGrid>
			<IonRow>
				<IonCol className='ion-text-center'>
					<IonRow>
						<IonCol className='ion-text-start ion-padding'>
							<IonIcon
								color='secondary'
								size='large'
								icon={logoTwitter}
							></IonIcon>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>
							<IonTitle className='ion-text-start title-landing'>
								Lo que está <br /> pasando ahora
							</IonTitle>
						</IonCol>
					</IonRow>

					<IonRow>
						<IonCol className='ion-text-start ion-padding-top'>
							<IonTitle className='subtitle-landing'>Únete hoy mismo</IonTitle>
						</IonCol>
					</IonRow>

					<IonRow>
						<IonCol>
							<IonButton
								className='btn-landing ion-margin-top'
								shape='round'
								fill='outline'
							>
								<IonIcon icon={logoGoogle} />
								Registrarse con Google
							</IonButton>

							<IonButton href='/signUp' className='btn-landing' shape='round'>
								Registrarse con Nosotros
							</IonButton>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol className='ion-text-start pol'>
							<IonText>
								Al registrarte, aceptas los Términos de servicio y la Política
								de privacidad, incluida la política de Uso de Cookies
							</IonText>
						</IonCol>
					</IonRow>

					<IonRow>
						<IonCol>
							<IonTitle className='ion-text-start ion-padding-top'>
								¿Ya tienes cuenta?
							</IonTitle>

							<IonButton
								href='login'
								className='btn-landing ion-margin-top'
								shape='round'
								fill='outline'
							>
								Iniciar sesión
							</IonButton>
						</IonCol>
					</IonRow>
				</IonCol>
			</IonRow>
			<IonRow>
				<IonCol>
					<img className='img-banner' src={twBanner} />
				</IonCol>
			</IonRow>
		</IonGrid>
	)
}

export default Home
