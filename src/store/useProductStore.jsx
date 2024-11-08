import { create } from "zustand";

const useProductStore = create((set) => ({
  selectedProduct: null,
  updateProduct: (product) => set({ selectedProduct: product }),
}));

export default useProductStore;
