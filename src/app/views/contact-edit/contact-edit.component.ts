import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  id: string;
  contactForm: FormGroup;
  imgUrl: string;

  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService, private formBuilder: FormBuilder) { }
  
  ngOnInit(): void { 
      if (this.route.snapshot.params['id?']) {
      const id = this.route.snapshot.params['id?'];
      this.imgUrl = 'https://robohash.org/' + id;
      this.contactService.getContactById(id)
        .then(contact => {
          this.id = contact._id
          this.contactForm = this.formBuilder.group({
            email: [contact.email, [Validators.required, validateEmail]],
            name: [contact.name, [Validators.required, nameValidator]],
            phone: [contact.phone, [Validators.required]],
          })
        })
    }
    else {
      this.imgUrl = 'assets/imgs/add-contact.svg';
      this.contactForm = this.formBuilder.group({
        email: ['', [Validators.required, validateEmail]],
        name: ['', [Validators.required, nameValidator]],
        phone: ['', [Validators.required]],

      })
    }
  
  }

  saveContact() {
    if (this.contactForm.status !== 'VALID') return
    const sendObj = { ...this.contactForm.value }
    if (this.id) sendObj._id = this.id;
    this.contactService.saveContact(sendObj)
      .then(id => this.router.navigate(['/contact/' + id]))
  }
}


const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateEmail(c: FormControl) {
  return EMAIL_REGEXP.test(c.value) ? null : {
    validateEmail: {
      valid: false
    }
  };
}

function nameValidator(control: FormControl): { [s: string]: any } {
  if (!control.value.match(/^[a-z]/i)) {
    return { invalidName: true };
  }
}