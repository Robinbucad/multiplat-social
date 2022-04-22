/* eslint-disable camelcase */
export type UserType = {
    email:string,
    name:string,
    date:string,
    file:string
    _id:string
    followers:[],
    following:[]
}

export type MethodPOST = {
    method:string,
    body:string,
    headers:{
        'Content-type':string,
        Authorization?:string
    }
}

export type UserLoggin = {
    dataSingleUser:UserType
    res:Response
} | undefined

export type Token = {
    access_token:string
}

export type Tweet = {
    name:string
    tweet:string,
    user:string,
    username:string
    date:string
    id?:string
    _id?:string
    likes:[],
    retweets:[]
    tweetImg:string
}