import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  
  ngOnInit(): void {
  }

  @Output() singuped = new EventEmitter<any>();

  onSubmit(form) {
    if (form.name) {
      this.userService.signup(form.name)
        .then(() => {
          this.router.navigate(['/']);
        })
    }
  }
}
