import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';
import { move } from 'src/app/models/move';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {



  constructor(private route: ActivatedRoute, contactService: ContactService, userService: UserService) {
    contactService.getContactById(this.route.snapshot.params.id)
      .then(contact => this.contact = contact)
      .then(contact => this.moves = userService.getMovesById(contact._id))
  }
  contact: contact;
  ngOnInit(): void {
  }
  moves: move[];
}
