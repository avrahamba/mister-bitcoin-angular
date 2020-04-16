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
  }

  get signup(): boolean {
    const r = this.router.routerState.snapshot.url
    return this.router.routerState.snapshot.url === "/signup"
  }
}
