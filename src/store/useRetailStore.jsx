import { create } from "zustand";

const useRetailStore = create((set) => ({
  selectedStore: null,
  selectedRetail: null,
  updateStore: (store) => set({ selectedStore: store }),
  updateRetail: (retail) => set({ selectedRetail: retail }),
}));

export default useRetailStore;
