import React, { useState, useEffect } from 'react';
import Chart from 'chart.js';
import axios from 'axios';
import styles from "./CurrentCoin.module.css"

const CoinPriceChart = (findId) => {
    const [prices, setPrices] = useState([]);
    const [labels, setLabels] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.coingecko.com/api/v3/coins/${findId.findId}/market_chart?vs_currency=usd&days=1`
                );
                const data = response.data.prices;
                const pricesData = data.map(item => item[1]); // Цены на момент времени
                const labelsData = data.map(item => new Date(item[0]).toLocaleTimeString()); // Временные метки
                setPrices(pricesData);
                setLabels(labelsData);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (prices.length > 0 && labels.length > 0) {
            const ctx = document.getElementById('priceChart').getContext('2d');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Цена (USD)',
                        data: prices,
                        borderColor: 'blue',
                        fill: false
                    }]
                }
            });
        }
    }, [prices, labels]);

    return (
        <div className={styles.graphWrapper}>
            <canvas className={styles.graph} height={373} id="priceChart" width="600"></canvas>
        </div>
    );
};

export default CoinPriceChart;
