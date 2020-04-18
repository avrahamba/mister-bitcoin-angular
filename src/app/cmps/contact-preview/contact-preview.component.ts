import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../models/contact';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  constructor() { }
  @Input() contact: Contact;
  ngOnInit(): void {
  }

}
