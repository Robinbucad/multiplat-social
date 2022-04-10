import { IonTabBar, IonTabButton, IonIcon } from '@ionic/react'

import {
	notificationsOutline,
	mailOutline,
	searchOutline,
	homeOutline,
} from 'ionicons/icons'
import React from 'react'

const ToolBar: React.FC = () => {
	return (
		<IonTabBar>
			<IonTabButton tab='home' href='/home'>
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
	)
}

export default ToolBar
