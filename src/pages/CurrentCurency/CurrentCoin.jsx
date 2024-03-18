import { Link } from "react-router-dom";
import Header from "../../Widgets/header/Header"
import styles from "./CurrentCoin.module.css"
import { IoIosArrowRoundBack } from "react-icons/io";

const CurrentCoin = ({name}) => {
    
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
                    <span className={styles.name}>Монета BrainCoin</span>
                </div>
                <div className={styles.wrapperMain}>
                    <div className={styles.certainCoin}>

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