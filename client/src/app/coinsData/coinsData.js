import { makeAutoObservable, observable, observe } from "mobx";
import { observer } from "mobx-react-lite";


class CoinsData {
    constructor() {
        this.coinsArray;
        makeAutoObservable(this);
        this.page = 1;
    }


    async dataTake(currectPage) {
        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=btc&per_page=12&page=${currectPage.page}&x_cg_demo_api_key=CG-7RkMX3moi38DckTXKB8DJXY8`);
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

    // Преобразуем page в MobX-observable
    setPage(page) {
        this.page = page;
    }

    // Метод для изменения страницы и вызова повторного запроса данных
    async pageChange(userPage) {
        this.setPage(userPage); // Установить новое значение page
        await this.dataTake(); // Вызвать повторный запрос данных
    }
}

export default (CoinsData)
