import React from 'react'
import { useSessionUser } from '../../functions/Utils'

const ExploreApp: React.FC = () => {
	useSessionUser()
	return <h1>Hola</h1>
}

export default ExploreApp
