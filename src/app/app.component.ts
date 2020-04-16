import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private userService: UserService, private router: Router) {
    if (!userService.getUser) {
      router.navigate(['/signup']);
      this.signup = true;
      router.events.subscribe((ev: Event) => {
        if (ev instanceof NavigationStart) {
          this.signup = false;
        }
      })
    }
  }
  signup: boolean = false;
}
