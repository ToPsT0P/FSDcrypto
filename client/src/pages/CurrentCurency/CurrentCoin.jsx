import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../Widgets/header/Header";
import styles from "./CurrentCoin.module.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import Loader from "../../shared/Loader/Loader";

const CurrentCoin = ({ setIsModal }) => {
    const [coinData, setCoinData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchCoinData = async () => {
            try {
                const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?x_cg_demo_api_key=CG-7RkMX3moi38DckTXKB8DJXY8`);
                const data = await response.json();
                setCoinData(data);
            } catch (error) {
                console.error('Error fetching coin data:', error);
            }
        };

        fetchCoinData();
    }, [id]);

    // Проверяем, загружены ли данные перед их использованием
    if (!coinData) {
        return <Loader/>
    }

    const marketCap = Math.trunc(coinData.market_data.market_cap_change_24h_in_currency.usd )

    return (
        <div className={styles.wrapper}>
            <Header setIsModal={setIsModal}/>
            <div className={styles.dataWrapper}>
                <Link to={"/"} className={styles.exitText}>
                    <IoIosArrowRoundBack style={{width:"30px", height:"fit-content"}}/>
                    <p>Назад</p>
                </Link>
                <div className={styles.coinData}>
                    <div>
                        <span className={styles.name}>Монета {coinData.name}</span>
                    </div>
                    <div className={styles.wrapperMain}>
                        <div className={styles.certainCoin}>
                            <div className={styles.topCertainCoin}>
                                <div className={styles.topCeratinCoinLeft}>
                                    <img src={coinData.image.small} alt="" />
                                    <span>{coinData.id}</span>
                                </div>
                                <CiStar className={styles.likeButton}/>
                            </div>
                            <div className={styles.centralCertainCoin}>
                                <p> price change 7d:</p>
                                <span>{coinData.market_data.price_change_percentage_7d} %</span>
                            </div>
                            <div className={styles.bottomCertainCoin}>
                                <div className={styles.bottomCertainCoinLeft}>
                                    <span  style={{width:"100%", display:"flex", justifyContent:"center"}}>Market Cap {Math.floor((coinData.market_data.market_cap_change_percentage_24h * 100) / 100)} % (1d)</span>
                                    <p>$ {marketCap}</p>
                                </div>
                                <div className={styles.bottomCertainCoinRight}>
                                    <span style={{width:"100%", display:"flex", justifyContent:"center"}}>Volume</span>
                                    <p>$ {coinData.market_data.total_volume.usd}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.coinStats}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentCoin;
