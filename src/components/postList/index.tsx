import { IonContent } from '@ionic/react'

import React from 'react'
import CreateTweet from '../tweet'

const PostList: React.FC = () => {
	return (
		<IonContent>
			<CreateTweet></CreateTweet>
		</IonContent>
	)
}

export default PostList
