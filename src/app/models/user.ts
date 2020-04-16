import {Move} from './move';
export interface User {
    name: string,
    coins: number,
    moves: Move[]
}