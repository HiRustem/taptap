import { useShallow } from "zustand/shallow";
import useUserStore from "../../model/store";
import styles from "./Energy.module.scss";
import IconLightning from "@/assets/lightning.svg?react";
import { useEffect } from "react";
import EnergyProgressBar from "./ui/EnergyProgressBar/EnergyProgressBar";

const Energy = () => {
  const { maxEnergy, energy, recoverEnergy } = useUserStore(
    useShallow((state) => ({
      maxEnergy: state.maxEnergy,
      energy: state.energy,
      recoverEnergy: state.recoverEnergy,
    }))
  );

  useEffect(() => {
    if (!energy) return;

    let timerId: NodeJS.Timeout;

    if (energy < maxEnergy) {
      timerId = setInterval(() => {
        recoverEnergy();
      }, 1000);
    }

    if (energy === maxEnergy) return () => clearInterval(timerId);

    return () => clearInterval(timerId);
  }, [energy]);

  return (
    <div className={styles.container}>
      <div className={styles.information}>
        <div className={styles.iconWrapper}>
          <IconLightning className={styles.icon} />
        </div>

        <div className={styles.energy}>
          <p className={styles.availableEnergy}>{energy}</p>
          <p>{"/"}</p>
          <p className={styles.allEnergy}>{maxEnergy}</p>
        </div>
      </div>

      <EnergyProgressBar />
    </div>
  );
};

export default Energy;
