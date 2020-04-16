import { Component, OnInit, Input } from '@angular/core';
import { contact } from 'src/app/models/contact';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {

  constructor(private userService: UserService) { }
  @Input() contact: contact;
  amount: number = 0;
  ngOnInit(): void {
  }
  transfer() {
    if (this.amount > 0) this.userService.transforCoins(this.amount, this.contact)
    this.amount = 0;
  }
}
