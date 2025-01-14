import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type PlantType = {
  id: string;
  name: string;
  wateringFrequencyDays: number;
  lastWateredAtTimestamp?: number;
};

type PlantState = {
  nextId: number;
  plants: PlantType[];
  addPlant: (name: string, wateringFrequencyDays: number) => void;
  removePlant: (plantId: string) => void;
  waterPlant: (plantId: string) => void;
};

export const usePlantStore = create(
  persist<PlantState>(
    (set) => ({
      plants: [],
      nextId: 1,
      addPlant: (name: string, wateringFrequencyDays: number) => {
        return set((state) => {
          let newState = { ...state, nextId: state.nextId + 1 };
          newState.plants.push({
            id: String(state.nextId),
            name,
            wateringFrequencyDays,
          });
          return newState;
        });
      },
      removePlant: (plantId: string) => {
        return set((state) => {
          return {
            ...state,
            plants: state.plants.filter((plant) => plant.id !== plantId),
          };
        });
      },
      waterPlant: (plantId: string) => {
        return set((state) => {
          return {
            ...state,
            plants: state.plants.map((plant) => {
              if (plantId === plant.id) {
                return {
                  ...plant,
                  lastWateredAtTimestamp: Date.now(),
                };
              }
              return plant;
            }),
          };
        });
      },
    }),
    {
      name: 'plantly-plants-store',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
