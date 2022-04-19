import { UserContext } from './user.context'
import React, { useState, ReactNode, useEffect } from 'react'
import { UserType } from '../../models'

type Props = {
	children: ReactNode
}

const UserProvider: React.FC<Props> = ({ children }: Props) => {
	const userFromLocal = localStorage.getItem('user') || ''
	const [user, setUser] = useState<UserType>()
	const [loading, setLoading] = useState<boolean>(false)

	useEffect(() => {
		try {
			const userData: UserType = JSON.parse(userFromLocal)
			setUser(userData)
		} catch (err) {}
	}, [])

	return (
		<UserContext.Provider value={{ user, setUser, loading, setLoading }}>
			{children}
		</UserContext.Provider>
	)
}

export default UserProvider
