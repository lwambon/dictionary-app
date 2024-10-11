import { create } from 'zustand'; 
import { devtools, persist } from 'zustand/middleware';

const useStore = create(
  devtools(
    persist((set) => ({
      word: '',
      setWord: (newWord) => set({ word: newWord }),
    }))
  )
);

export default useStore;
