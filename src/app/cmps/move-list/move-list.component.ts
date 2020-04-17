import { Component, OnInit, Input } from '@angular/core';
import { Move } from 'src/app/models/move';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService) { }
  @Input() moves: Move[];
  @Input() name: string
  ngOnInit(): void {
    this.bitcoinService.getRate(1)
      .then(rate => {
        this.moves.map(move => move.bitcoin = Math.round(((move.amount * rate) + Number.EPSILON) * 10000) / 10000)
      })
  }

}
