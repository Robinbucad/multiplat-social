import { IonFab, IonFabButton, IonIcon } from '@ionic/react'
import { pencil } from 'ionicons/icons'
import React from 'react'

const CreateTweetBtn: React.FC = () => {
	const handleAddTweet = () => {
		window.location.href = `/compose/tweet`
	}
	return (
		<IonFab vertical='bottom' horizontal='end' slot='fixed'>
			<IonFabButton onClick={handleAddTweet}>
				<IonIcon icon={pencil} />
			</IonFabButton>
		</IonFab>
	)
}

export default CreateTweetBtn
