import { IonContent, IonGrid } from '@ionic/react'
import React from 'react'
import SinglePost from '../post'
const PostList: React.FC = () => {
	return (
		<IonContent>
			<IonGrid>
				<SinglePost></SinglePost>
				<SinglePost></SinglePost>
				<SinglePost></SinglePost>
				<SinglePost></SinglePost>
			</IonGrid>
		</IonContent>
	)
}

export default PostList
