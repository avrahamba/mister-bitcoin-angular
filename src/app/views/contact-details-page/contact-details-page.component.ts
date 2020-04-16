import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';
import { Move } from 'src/app/models/move';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {
  contact: Contact;
  moves: Move[];
  subscription: Subscription

  constructor(private route: ActivatedRoute, private contactService: ContactService, private userService: UserService) {
    this.contactService.getContactById(this.route.snapshot.params.id)
      .then(contact => this.contact = contact)
      .then(contact => {
        this.subscription = this.userService.getMovesById(contact._id)
          .subscribe((moves) => {
            this.moves = [...moves]
          })
      })
  }
  // this.moves =
  ngOnInit(): void {
  }
}
