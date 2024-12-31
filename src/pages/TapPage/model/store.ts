import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type IUseUserStoreState = {
  balance?: number;
  level: number;
  levelCost?: number;
  energy?: number;
  maxEnergy: number;
};

type IUseUserStoreActions = {
  setValue: <K extends keyof IUseUserStoreState>(
    fieldName: K,
    fieldValue: IUseUserStoreState[K]
  ) => void;
  pushCoinButton: () => void;
  recoverEnergy: () => void;
};

const initialState: IUseUserStoreState = {
  balance: 3700000,
  level: 1,
  levelCost: 7,
  energy: 5000,
  maxEnergy: 5000,
};

const useUserStore = create<IUseUserStoreState & IUseUserStoreActions>()(
  immer((set, get) => ({
    setValue: (fieldName, fieldValue) => {
      set({ [fieldName]: fieldValue });
    },
    recoverEnergy: () => {
      const energy = get().energy;
      const maxEnergy = get().maxEnergy;
      const levelCost = get().levelCost;

      if (!energy || !maxEnergy || !levelCost) return;

      if (energy + levelCost > maxEnergy) {
        set({ energy: maxEnergy });
      } else {
        set({ energy: energy + levelCost });
      }
    },
    pushCoinButton: () => {
      const balance = get().balance;
      const levelCost = get().levelCost;
      const energy = get().energy;

      if (!balance || !levelCost || !energy) return;

      const newBalance = balance + levelCost;
      const newEnergy = energy - levelCost;

      set({ balance: newBalance, energy: newEnergy });
    },
    ...initialState,
  }))
);

export default useUserStore;
