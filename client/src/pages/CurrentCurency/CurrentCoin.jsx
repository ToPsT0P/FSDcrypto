import { Link } from "react-router-dom";
import Header from "../../Widgets/header/Header"
import styles from "./CurrentCoin.module.css"
import { IoIosArrowRoundBack } from "react-icons/io";
import { useState } from "react";
import imgpng from "../../shared/img/gala.png"
import { CiStar } from "react-icons/ci";

const CurrentCoin = ({setIsModal, item}) => {
    
    

    return(
    
    <div className={styles.wrapper}>
        <Header setIsModal={setIsModal}/>
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
                            <div className={styles.topCeratinCoinLeft}>
                                <img src={imgpng} alt="" />
                                <span>{item.name}</span>
                            </div>
                            <CiStar className={styles.likeButton}/>
                        </div>
                        <div className={styles.centralCertainCoin}>
                            <p>{item.name} price:</p>
                            <span>$ {item.price}</span>
                        </div>
                        <div className={styles.bottomCertainCoin}>
                            <div className={styles.bottomCertainCoinLeft}>
                                <span  style={{width:"100%", display:"flex", justifyContent:"center"}}>Market Cap {item.cap}% (1d)</span>
                                <p>$ {item.currentMarket}</p>
                            </div>
                            <div className={styles.bottomCertainCoinRight}>
                                <span style={{width:"100%", display:"flex", justifyContent:"center"}}>Volume</span>
                                <p>{item.volume}</p>
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