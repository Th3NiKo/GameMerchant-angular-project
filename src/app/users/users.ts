export interface IUser{
    id: number;
    login: string;
    password: string;
    rates: Array<number>;
    comments: Array<string>;
}