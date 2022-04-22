
import { MethodPOST, Token, Tweet, UserType } from '../../models'
const token = sessionStorage.getItem('token')

export const LoginUser = async (data:FormData) => {
	
	const METHODLOG:MethodPOST = {
		method: 'post',
		body: JSON.stringify(Object.fromEntries(data)),
		headers: { 'Content-type': 'application/json' },
	}

	const res: Response = await fetch(
		`${process.env.REACT_APP_LOGIN_API}`,
		METHODLOG
	)
	if (res.status === 201) {
		const dat:Token = await res.json()
		sessionStorage.setItem('token', dat.access_token)

		const resSingleUser: Response = await fetch(
			'http://localhost:4000/users/single',
			{
				method: 'get',
				headers: {
					Authorization: `Bearer ${dat.access_token}`,
				},
			}
		)
		const dataSingleUser: UserType = await resSingleUser.json()
		localStorage.setItem('user', JSON.stringify(dataSingleUser))

		return { dataSingleUser, res } 	
	}
}

export const RegisterUser = async(data:FormData) => {
	const REGISTERMETHOD:MethodPOST = {
		method: 'post',
		body: JSON.stringify(Object.fromEntries(data)),
		headers: { 'Content-type': 'application/json' },
	}
	const res:Response = await fetch(`${process.env.REACT_APP_REGISTER_API}`,
	REGISTERMETHOD)
	return res
}

export const PostTweet = async(data:Tweet) => {
	const TweetMethod:MethodPOST = {
		method:'post',
		body:JSON.stringify(data),
		headers: { 'Content-type': 'application/json',Authorization: `Bearer ${token}` }
	}
	const res:Response = await fetch(`http://localhost:4000/tweets/`, TweetMethod)
	return res
}

export const GetAllUsers = async() => {
	const res:Response = await fetch(`http://localhost:4000/users/`,{
		method:'get',
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
	const dat:UserType[] = await res.json()

	return dat
}

export const GetUserTweets = async(userId:string) => {
	const res:Response = await fetch(`http://localhost:4000/tweets/${userId}`,{
		method:'get',
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
	const dat:Tweet[] = await res.json()

	return dat
}

export const deleteTweet = async(tweetId:string | undefined) => {
	
	const res:Response = await fetch(`http://localhost:4000/tweets/${tweetId}`, {
		method:'delete',
		headers: {
			Authorization: `Bearer ${token}`
		},
		
	})
	const dat = await res.json()
	console.log(dat)
}