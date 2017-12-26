export interface IGame {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    type: string;
    whoHas: Array<string>;
    whoWant: Array<string>;
}