import Balance from "./components/Balance/Balance";
import Energy from "./components/Energy/Energy";
import TapCoin from "./components/TapCoin/TapCoin";
import styles from "./TapPage.module.scss";

const TapPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Balance />
        <TapCoin />
        <Energy />
      </div>
    </div>
  );
};

export default TapPage;
