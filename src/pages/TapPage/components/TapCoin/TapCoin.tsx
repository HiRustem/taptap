import { useShallow } from "zustand/shallow";
import useUserStore from "../../model/store";
import styles from "./TapCoin.module.scss";

import IconCoin from "@/assets/coin.svg?react";

const TapCoin = () => {
  const { levelCost, energy, pushCoinButton } = useUserStore(
    useShallow((state) => ({
      levelCost: state.levelCost,
      energy: state.energy,
      pushCoinButton: state.pushCoinButton,
    }))
  );

  const handleCoinClick = () => {
    pushCoinButton();
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.coinButton}
        onClick={handleCoinClick}
        disabled={!levelCost || !energy || levelCost > energy}
      >
        <IconCoin className={styles.coin} />
      </button>
    </div>
  );
};

export default TapCoin;
