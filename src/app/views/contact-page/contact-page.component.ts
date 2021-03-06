import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit, OnDestroy {
  subscription: Subscription
  contacts: Contact[];
  
  constructor(private contactService: ContactService) { }
  
  ngOnInit(): void {
    this.contactService.loadPets()
    this.subscription = this.contactService.contacts$.subscribe((contacts) => {
      this.contacts = [...contacts]
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  onFilter(filterBy: { term: string; }) {
    this.contactService.loadPets(filterBy)
  }
}
