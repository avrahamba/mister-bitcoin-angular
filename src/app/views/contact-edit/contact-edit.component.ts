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
  contactForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, nameValidator]],
    email: ['', [Validators.required, validateEmail]],
    phone: ['', [Validators.required]],
  });
  imgUrl: string;
  submited: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (this.route.snapshot.params['id?']) {
      const id = this.route.snapshot.params['id?'];
      this.imgUrl = 'https://robohash.org/' + id;
      this.contactService.getContactById(id)
        .then(contact => {
          this.id = contact._id
          this.contactForm = this.formBuilder.group({
            name: [contact.name, [Validators.required, nameValidator]],
            email: [contact.email, [Validators.required, validateEmail]],
            phone: [contact.phone, [Validators.required]],
          })
        })
    }
    else {
      this.imgUrl = 'assets/imgs/add-contact.svg';
    }

  }

  saveContact() {
    if (this.contactForm.status !== 'VALID') {
      console.log('test');
      this.submited=true
      return;
    }
    const sendObj = { ...this.contactForm.value }
    if (this.id) sendObj._id = this.id;
    this.contactService.saveContact(sendObj)
      .then(id => this.router.navigate(['/contact/' + id]));
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