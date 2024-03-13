import styles from "./CertainCoin.module.css"
import testPNG from "../../shared/img/gala.png"
const CertainCoin = () => {

    return(
        <>
            <div className={styles.coin}>
                        <div className={styles.leftsideCoin}>
                            <img src={testPNG} alt="" />
                            <div className={styles.leftsideCoinText}>
                                <span>GALA</span>
                                <p>GALA</p>
                            </div>
                        </div>
                        <div className={styles.rightsideCoin}>
                            <div>
                                <p>Price to bitcoin:</p>
                                <span>0.0001123</span>
                            </div>
                            
                        </div>
                    </div>
        </>
    )
}

export default CertainCoin