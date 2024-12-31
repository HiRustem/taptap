import useUserStore from "@/pages/TapPage/model/store";
import styles from "./EnergyProgressBar.module.scss";
import { useShallow } from "zustand/shallow";
import { useMemo } from "react";

const EnergyProgressBar = () => {
  const { energy, maxEnergy } = useUserStore(
    useShallow((state) => ({
      energy: state.energy,
      maxEnergy: state.maxEnergy,
    }))
  );

  const percent = useMemo(() => {
    if (!energy) return 0;

    const onePercent = maxEnergy / 100;

    return energy / onePercent;
  }, [energy]);

  return (
    <div className={styles.container}>
      <div
        style={
          {
            "--progress_width": `${percent}%`,
          } as React.CSSProperties
        }
        className={styles.progress}
      ></div>
    </div>
  );
};

export default EnergyProgressBar;
