import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {


  
  constructor(private route: ActivatedRoute, private contactService: ContactService ) { 
    contactService.getContactById(this.route.snapshot.params.id)
    .then(contact=>this.contact=contact)
  }
  contact:contact;
  ngOnInit(): void {
  }
}
