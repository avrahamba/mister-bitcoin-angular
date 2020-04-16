import { Injectable } from '@angular/core';
import { user } from '../models/user';
import { contact } from '../models/contact';
import { move } from '../models/move';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
    if (localStorage.user) {
      this._user = JSON.parse(localStorage.user);
    }
  }
  private _user: user;
  get getUser() {
    if (this._user) return this._user
    return null;
  }
  signup(name) {
    this._user = {
      name,
      coins: 100,
      moves: []
    }
    localStorage.user = JSON.stringify(this._user);
    return Promise.resolve()
  }
  transforCoins(amount: number, contact: contact) {
    this._user.coins -= amount;
    this._user.moves.unshift({
      amount,
      at: Date.now(),
      to: contact.name,
      toId: contact._id
    })
    localStorage.user = JSON.stringify(this._user);
  }
  get lastThree() :move[] {
    return this._user.moves.slice(0, 3);
  }
  getMovesById(contactId:string): move[]{
    return this._user.moves.filter(move=>move.toId===contactId)
  }
}
