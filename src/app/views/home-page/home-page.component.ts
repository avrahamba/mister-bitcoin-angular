import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';
import { user } from 'src/app/models/user';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService,
    private userService: UserService) {
    bitcoinService.getRate(1).then(rate => this.bitcoinRate = rate)
  }
  ngOnInit(): void {
  }
  bitcoinRate: number;
  get name() {
    return this.userService.getUser.name
  }
}
