import { Link } from "react-router-dom";
import Header from "../../Widgets/header/Header"
import styles from "./CurrentCoin.module.css"
import { IoIosArrowRoundBack } from "react-icons/io";
import { useState } from "react";

const CurrentCoin = ({item}) => {
    
    

    return(
    
    <div className={styles.wrapper}>
        <Header/>
        <div className={styles.dataWrapper}>
            <Link to={"/"} className={styles.exitText}>
                <IoIosArrowRoundBack style={{width:"30px", height:"fit-content"}}/>
                <p>Назад</p>
            </Link>
            <div className={styles.coinData}>
                <div>
                    <span className={styles.name}>Монета {item.name}</span>
                </div>
                <div className={styles.wrapperMain}>
                    <div className={styles.certainCoin}>
                        <div className={styles.topCertainCoin}>
                            <img src="" alt="" />
                            <span>{item.name}</span>
                            <img src="" alt="" />
                        </div>
                        <div className={styles.centralCertainCoin}>
                            <p>{item.name}</p>
                            <span>$ {item.price}</span>
                        </div>
                        <div className={styles.bottomCertainCoin}>
                            <div className={styles.bottomCertainCoinLeft}>

                            </div>
                            <div className={styles.bottomCertainCoinRight}>

                            </div>
                        </div>
                    </div>
                    <div className={styles.coinStats}>

                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}

export default CurrentCoin