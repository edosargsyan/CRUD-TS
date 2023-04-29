export interface UsersState{
    users:any[];
}
export interface UsersDel{
    id:string
}
export interface UserAction {
    type:string,
    payload?: any;  
}

export interface IUsers{
    name:string,
    lastname:string,
    age:string,
    username:string,
    email:string,
    password:string
    _id?:string
}