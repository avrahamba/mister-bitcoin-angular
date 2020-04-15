import { Injectable } from '@angular/core';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  _user: user = {
    name: "Ochoa Hyde",
    coins: 100,
    moves: []
    }
  get getUser(){
    return this._user
  }
}
