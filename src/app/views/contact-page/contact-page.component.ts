import { Component, OnInit } from '@angular/core';
import { contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  subscription: Subscription
  constructor(private contactService: ContactService) {
    this.contactService.loadPets()
    this.subscription = this.contactService.contacts$.subscribe((contacts) => {
      this.contacts = [...contacts]
    })
  }

  ngOnInit(): void {
  }
  contacts: contact[];
  onFilter(filterBy) {
    this.contactService.loadPets(filterBy)
  }
}
