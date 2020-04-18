import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Contact } from '../models/contact';
import { Move } from '../models/move';
import { BehaviorSubject } from 'rxjs';
import { BitcoinService } from './bitcoin.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user: User;

  private _moves$ = new BehaviorSubject<Move[]>([]);

  public move$ = this._moves$.asObservable()
  private _currContactId: string;

  constructor(private bitcoinService:BitcoinService) {
    if (localStorage.user) {
      this._user = JSON.parse(localStorage.user);
    }
  }

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

  transforCoins(amount: number, contact: Contact) {
    this._user.coins -= amount;
    this._user.moves.unshift({
      amount,
      at: Date.now(),
      to: contact.name,
      toId: contact._id
    })
    localStorage.user = JSON.stringify(this._user);
    console.log('this._currContactId :', this._currContactId);
    if (this._currContactId) {
      this.bitcoinService.getRate(1)
      .then(rate=>{
        this._moves$.next(this._user.moves
          .filter(move => move.toId === this._currContactId)
          .map(move=>{
            move.bitcoin = Math.round(((move.amount * rate) + Number.EPSILON) * 10000) / 10000;
            return move
          })
          );
        })
        }
      }

  get lastThree(): Move[] {
    return this._user.moves.slice(0, 3);
  }

  getMovesById(contactId: string) {
    this._currContactId = contactId;
    this._moves$.next(this._user.moves.filter(move => move.toId === contactId));
    return this.move$
  }
}
