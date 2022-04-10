import { UserContext } from './user.context'
import React, { useState, ReactNode } from 'react'
import { UserType } from '../../models'

type Props = {
	children: ReactNode
}

const userFromLocal: UserType = JSON.parse(localStorage.getItem('user') || '')

const UserProvider: React.FC<Props> = ({ children }: Props) => {
	const [userSession, getUserSession] = useState<any | boolean>('')
	const [user, setUser] = useState<UserType>(userFromLocal)

	return (
		<UserContext.Provider
			value={{ userSession, getUserSession, user, setUser }}
		>
			{children}
		</UserContext.Provider>
	)
}

export default UserProvider
