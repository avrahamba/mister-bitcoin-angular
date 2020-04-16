import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  bitcoinRate: number;
  coins: number;
  moves = this.userService.lastThree;

  constructor(bitcoinService: BitcoinService, private userService: UserService) {
    this.coins = userService.getUser.coins;
    bitcoinService.getRate(this.coins).then(rate => this.bitcoinRate = rate);
  };

  ngOnInit(): void {
  }

  get name() {
    return this.userService.getUser.name
  }

}
