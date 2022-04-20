/* eslint-disable camelcase */
export type UserType = {
    email:string,
    name:string,
    date:string,
    file:string
    _id:string
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
    tweet:string,
    user:string,
    date:string
}