import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  amount: number = 0;
  constructor(private userService: UserService) { }
  
  @Input() contact: Contact;

  ngOnInit(): void {
  }
  
  transfer() {
    if (this.amount > 0) this.userService.transforCoins(this.amount, this.contact)
    this.amount = 0;
  }
}
