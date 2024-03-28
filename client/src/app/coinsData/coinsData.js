import { makeAutoObservable } from "mobx";

class CoinsData {
    constructor() {
        this.coinsArray;
        makeAutoObservable(this);
        this.dataTake();
    }

    async dataTake() {
        try {
            const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=btc&page=12&x_cg_demo_api_key=CG-7RkMX3moi38DckTXKB8DJXY8');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            if (Array.isArray(data) && data.length > 0) {
                this.coinsArray = data.slice(0, 12);
            } else {
                throw new Error('Empty or invalid data received from the server');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    
}

export default CoinsData;
