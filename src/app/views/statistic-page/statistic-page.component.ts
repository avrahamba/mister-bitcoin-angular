import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {

  constructor(private bitcoinService:BitcoinService) { 
    bitcoinService.getMarketPrice().then(data=>{
      
      console.log('data :', data);
      data = data.map(price=>{
        
        const date =new Date(Number(price.x)*1000)
        const num = Number(price.y)
        return [date.toString(), num]
      
      
      })

      this.chart.data=data})
  }
  chart={
    title:'title',
    type:'ComboChart',
    data:[],
    columnNames:['Browser', 'Percentage'],
    options:{   colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'], is3D: true}
  }



  ngOnInit(): void {
  }

}
