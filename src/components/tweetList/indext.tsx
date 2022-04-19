import {
	IonAvatar,
	IonButton,
	IonCol,
	IonGrid,
	IonIcon,
	IonRow,
} from '@ionic/react'
import {
	chatbubbleOutline,
	repeatOutline,
	heartOutline,
	shareSocialOutline,
} from 'ionicons/icons'
import React from 'react'

import defImg from '../../assets/images/default-pic.png'
import test from '../../assets/images/test.jpg'

const TweetList: React.FC = () => {
	return (
		<IonGrid>
			<IonRow>
				<IonCol sizeXs='2' sizeSm='1'>
					<IonAvatar className='prof-user-post'>
						<img src={defImg} alt='Imagen de usuario'></img>
					</IonAvatar>
				</IonCol>

				<IonCol sizeXs='10' sizeSm='11'>
					<IonRow className='tweet-info'>
						<IonCol sizeXs='12'>
							<span className='name'>Robin</span>
							<span className='info'>@RobinBucad</span>
							<span className='info'>09/04/2022</span>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol sizeXs='12' sizeSm='8' sizeXl='3'>
							<div>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Accusamus aliquam molestiae iusto molestias soluta aperiam
								pariatur ex quas incidunt repudiandae?
							</div>

							<img className='img-post' src={test} alt='Imagen del post'></img>
						</IonCol>
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
		</IonGrid>
	)
}

export default TweetList
