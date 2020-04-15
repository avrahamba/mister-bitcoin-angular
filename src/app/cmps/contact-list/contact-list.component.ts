import { Component, OnInit, Input } from '@angular/core';
import { contact } from 'src/app/models/contact';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor() { }
  @Input() contacts: contact[];
  ngOnInit(): void {
  }

}
