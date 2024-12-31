import styles from "./Balance.module.scss";

import useUserStore from "../../model/store";

import IconCoin from "@/assets/coin.svg?react";

const Balance = () => {
  const balance = useUserStore((state) => state.balance);

  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <IconCoin className={styles.icon} />
      </div>

      <p className={styles.balance}>{balance}</p>
    </div>
  );
};

export default Balance;
