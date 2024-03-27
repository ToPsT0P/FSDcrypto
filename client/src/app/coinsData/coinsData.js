import { makeAutoObservable } from "mobx";

class CoinsData {
    constructor() {
        this.coinsArray = [];
        makeAutoObservable(this);
        this.dataTake();
    }

    async dataTake() {
                this.coinsArray = 
                    [fetch('https://api.coingecko.com/api/v3/coins/list?x_cg_demo_api_key=CG-7RkMX3moi38DckTXKB8DJXY8')
                    .then(response => response.json())
                     
    ];

    }
}

export default CoinsData;
