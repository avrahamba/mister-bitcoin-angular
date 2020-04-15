import { Injectable } from '@angular/core';
import { contact } from '../models/contact';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() {
    if (localStorage.contacts) this._contacts = JSON.parse(localStorage.contacts)
    else this._contacts = [{
      _id: "5a56640269f443a5d64b32ca",
      name: "Ochoa Hyde",
      email: "ochoahyde@renovize.com",
      phone: "+1 (968) 593-3824"
    }, {
      _id: "5a56640269fhs3a5d64b32ca",
      name: "Puki Ben David",
      email: "poki@renovize.com",
      phone: "+1 (968) 565-0282"
    }]
    localStorage.contacts = JSON.stringify(this._contacts);
  }

  private _contacts: contact[];

  private _contacts$ = new BehaviorSubject<contact[]>(this._contacts);
  public contacts$ = this._contacts$.asObservable()

  public loadPets(filterBy = { term: '' }) {
    const pets = this._contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filterBy.term.toLowerCase());
    });
    this._contacts$.next(pets);
  }

  public getContactById(id: string) {
    return Promise.resolve(this._contacts.find(contact => contact._id === id))
  }


  public saveContact(contact: contact) {
    if (contact._id) {
      const idx = this._contacts.findIndex(currContact => currContact._id === contact._id)
      this._contacts[idx] = contact;
    } else {
      contact._id = makeId();
      this._contacts.push(contact)
    }
    localStorage.contacts = JSON.stringify(this._contacts);
    return Promise.resolve(contact._id);
  }

}


const makeId = (length = 24) => {
  var txt = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}
