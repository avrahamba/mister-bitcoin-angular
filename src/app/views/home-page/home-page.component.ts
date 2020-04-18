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
  bitcoinRateTitle: string;

  constructor(private bitcoinService: BitcoinService, private userService: UserService) { };
  
  ngOnInit(): void {
    this.coins = this.userService.getUser.coins;
    this.bitcoinService.getRate(this.coins).then(rate => this.bitcoinRate = Math.round((rate + Number.EPSILON) * 10000) / 10000);
  
    this.bitcoinService.getMarketPrice(6)
      .then(data => {
        data = data.map((price: { x: any; y: any; }) => {
          const date = new Date(Number(price.x) * 1000)
          const num = Number(price.y)
          return [(date.getFullYear() % 100) + '.' + date.getMonth() + '.' + date.getDate(), num]
        })
        this.bitcoinRateTitle = 'Bitcoin Rate: ' + data[data.length - 1][1]
        this.chart.data = data
      })
  }

  onSetGraf(month:number){
    this.bitcoinService.getMarketPrice(month)
    .then(data => {
      data = data.map((price: { x: any; y: any; }) => {
        const date = new Date(Number(price.x) * 1000);
        const num = Number(price.y);
        let dateString = (date.getFullYear() % 100) + '.' + (date.getMonth()+1) + '.' + date.getDate();
        if(month===1){
          dateString = date.getDate().toString();
        }
        return [dateString, num]
      })
      this.bitcoinRateTitle = 'Bitcoin Rate: ' + data[data.length - 1][1]
      this.chart.data = data
    })
  }


  get name() {
    return this.userService.getUser.name
  }

  chart = {
    title: 'title',
    type: 'ComboChart',
    data: [],
    columnNames: ['date', 'Bitcoin Rate'],
    options: {
      width:window.innerWidth-40,
      chartArea: {
        width: '100%',
        height: '100%',
      },
      titleTextStyle: {
        color: '#9fa6ad',
        fontSize: 14
      },
      colors: ['#ff9900'],
      is3D: false,
      backgroundColor: '#2d2d2d',
      hAxis: {
        textStyle: {
          color: '#9fa6ad',
          fontSize:14
        },
        textPosition: 'in',
      },
      vAxis: {
        textStyle: {
          color: '#9fa6ad'
        },
        textPosition: 'in',
      },
      legend: {
        position: 'none',

      }
    }
  }
}
