import { makeAutoObservable } from "mobx";

class CoinsData {
    constructor() {
        this.coinsArray;
        makeAutoObservable(this);
        this.dataTake();
    }

    async dataTake() {
        await new Promise((resolve) => {
                this.coinsArray = [
                    {
                        price: 9.875,
                        name: "GALA",
                        imgURL: "gala",
                        cap: 4.6,
                        currentMarket: 21002030,
                        volume: 87654213,
             
                     },
                     {
                         price: 6.9876,
                         name:"kimbo",
                         imgURL: "gala.png",
                         cap: 4.6,
                         currentMarket: 21002030,
                         volume: 87654213,
                     },
                     {
                        price: 9.875,
                        name: "GALA",
                        imgURL: "gala",
                        cap: 4.6,
                        currentMarket: 21002030,
                        volume: 87654213,
             
                     },
                     {
                         price: 6.9876,
                         name:"kimbo",
                         imgURL: "gala.png",
                         cap: 4.6,
                         currentMarket: 21002030,
                         volume: 87654213,
                     },
                     {
                        price: 9.875,
                        name: "GALA",
                        imgURL: "gala",
                        cap: 4.6,
                        currentMarket: 21002030,
                        volume: 87654213,
             
                     },
                     {
                         price: 6.9876,
                         name:"kimbo",
                         imgURL: "gala.png",
                         cap: 4.6,
                         currentMarket: 21002030,
                         volume: 87654213,
                     },
                     {
                        price: 9.875,
                        name: "GALA",
                        imgURL: "gala",
                        cap: 4.6,
                        currentMarket: 21002030,
                        volume: 87654213,
             
                     },
                     {
                         price: 6.9876,
                         name:"kimbo",
                         imgURL: "gala.png",
                         cap: 4.6,
                         currentMarket: 21002030,
                         volume: 87654213,
                     },
                     {
                        price: 9.875,
                        name: "GALA",
                        imgURL: "gala",
                        cap: 4.6,
                        currentMarket: 21002030,
                        volume: 87654213,
                     }
                ];
        });
    }
}

export default CoinsData;
