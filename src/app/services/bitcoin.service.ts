import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
    providedIn: 'root'
})
export class BitcoinService {

    constructor() { }



    async  getRate(coins: number) {
        try {
            const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=1`)
            const rate: number = +res.data;
            return rate * coins;
        } catch (err) {
            console.log('err');
        }
    }

    async getMarketPrice(month: number): Promise<any[]> {
        try {
            const res = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=${month}months&format=json&cors=true&limit=10`)
            return res.data.values;
        } catch (err) {
            console.log('err');
        }

    }
    getConfirmedTransactions() {

    }

}
