import { IonTabBar, IonTabButton, IonIcon } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'

import {
	notificationsOutline,
	mailOutline,
	searchOutline,
	homeOutline,
} from 'ionicons/icons'
import React from 'react'
import { useHistory } from 'react-router'

const ToolBar: React.FC = () => {
	const history = useHistory()

	return (
		<IonReactRouter>
			<IonTabBar>
				<IonTabButton tab='home' onClick={() => console.log('Hola')}>
					<IonIcon icon={homeOutline} />
				</IonTabButton>

				<IonTabButton tab='explore' href='/explore'>
					<IonIcon icon={searchOutline} />
				</IonTabButton>
				<IonTabButton>
					<IonIcon icon={notificationsOutline} />
				</IonTabButton>

				<IonTabButton>
					<IonIcon icon={mailOutline} />
				</IonTabButton>
			</IonTabBar>
		</IonReactRouter>
	)
}

export default ToolBar
