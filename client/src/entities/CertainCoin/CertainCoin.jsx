import styles from "./CertainCoin.module.css"
import testPNG from "../../shared/img/gala.png"
import plus from "../../shared/img/plus.svg"
import plusActive from "../../shared/img/plusActive.svg"
import { Link } from "react-router-dom"

const CertainCoin = ({name, item, setItem}) => {
    

    return(
        <>
            <Link to={"/coin"} onClick={() => setItem(item)} className={styles.coin}>
                        <div className={styles.leftsideCoin}>
                            <img src={testPNG} alt="" />
                            <div className={styles.leftsideCoinText}>
                                <span>{name}</span>
                                <p>{name}</p>
                            </div>
                        </div>
                        <div className={styles.rightsideCoin}>
                            <div className={styles.rightsideCoinText}>
                                <p>Price to bitcoin:</p>
                                <span>123</span>
                            </div>
                        <img src={plusActive} className={styles.imgAddActive}/>
                        <img src={plus} className={styles.imgAdd}/>
                        </div>
                    </Link>
        </>
    )
}

export default CertainCoin