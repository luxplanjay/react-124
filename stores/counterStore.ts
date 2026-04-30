import { create } from "zustand";
import { persist } from "zustand/middleware";
import { produce } from "immer";

export type AppLang = "en" | "uk" | "pl";

type CounterStore = {
  counter: {
    value: number;
  };
  lang: AppLang;
  increment: () => void;
  changeLang: (nextLang: AppLang) => void;
};

export const useCounterStore = create<CounterStore>()(
  persist(
    (set) => {
      return {
        counter: {
          value: 0,
        },
        lang: "en",
        increment: () => {
          set(
            produce((state: CounterStore) => {
              state.counter.value += 1;
            }),
          );
        },
        changeLang: (nextLang) => {
          set(
            produce((state: CounterStore) => {
              state.lang = nextLang;
            }),
          );
        },
      };
    },
    {
      name: "counter-store",
      partialize: (state) => {
        return {
          lang: state.lang,
          counter: {
            value: state.counter.value,
          },
        };
      },
    },
  ),
);

export const selectLang = (state: CounterStore) => state.lang;

export const selectChangeLang = (state: CounterStore) => state.changeLang;

export const selectCounter = (state: CounterStore) => state.counter.value;

export const selectIncrement = (state: CounterStore) => state.increment;

// Приклад чому create<>()()
// const typedCreateStore = create<CounterStore>();

// const useCounterStore = typedCreateStore(() => {
//   return {
//     counter: 0,
//   };
// });

// set((state) => {
//   return {
//     counter: {
//       ...state.counter,
//       value: state.counter.value + 1,
//     },
//   };
// });

// set(() => {
//   return {
//     lang: nextLang,
//   };
// });
