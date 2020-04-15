import { Component, OnInit, Input } from '@angular/core';
import { contact } from '../../models/contact';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  constructor() {
  }
  @Input() contact: contact;
  ngOnInit(): void {
  }

}
