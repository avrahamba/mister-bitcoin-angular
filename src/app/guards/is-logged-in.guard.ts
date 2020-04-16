import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) { }
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const loggedInUser = this.userService.getUser
    if (!loggedInUser) {
      this.router.navigate(['/signup']);
    }
    return !!loggedInUser;
  }
}
