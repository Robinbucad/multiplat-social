import { useEffect } from "react"

export const useSessionUser = () => {
    const token = sessionStorage.getItem('token')
	useEffect(() => {
		if (token === null) window.location.href = '/'
	}, [])

}