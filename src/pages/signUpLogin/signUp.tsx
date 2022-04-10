import React, { useState, useCallback, useContext } from 'react'
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
	IonTitle,
	NavContext,
} from '@ionic/react'

const SignUpLogin: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(false)
	const { navigate } = useContext(NavContext)
	const redirect = useCallback(() => navigate('/'), [])

	const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()
		setLoading(true)
		const userFormData = new FormData(e.target)
		const METHOD = {
			method: 'post',
			body: JSON.stringify(Object.fromEntries(userFormData)),
			headers: { 'Content-type': 'application/json' },
		}

		const res = await fetch(`${process.env.REACT_APP_REGISTER_API}`, METHOD)
		if (res.status === 201) {
			alert('Se te ha enviado un correo de validación')
			setLoading(false)
			redirect()
		}
		if (res.status === 409) {
			alert('El usuario ya existe')
			setLoading(false)
		}
	}

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
									type='email'
									placeholder='Email'
								></IonInput>
							</IonItem>
						</IonList>
						<IonList>
							<IonItem>
								<IonInput
									name='name'
									className='primary-input'
									type='text'
									placeholder='Nombre'
								></IonInput>
							</IonItem>
						</IonList>
						<IonList>
							<IonItem>
								<IonInput
									name='username'
									className='primary-input'
									type='text'
									placeholder='@Username'
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

						<IonList>
							<IonItem>
								<IonInput
									name='password'
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
								<IonInput
									name='date'
									className='primary-input'
									type='date'
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
					Registrarse
				</IonButton>
			</form>
		</IonGrid>
	)
}
export default SignUpLogin
