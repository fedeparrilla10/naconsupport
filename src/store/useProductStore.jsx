import { create } from "zustand";

const useProductStore = create((set) => ({
  selectedProduct: null,
  selectedVariant: null,
  updateProduct: (product) => set({ selectedProduct: product }),
  updateVariant: (variant) => set({ selectedVariant: variant }),
}));

export default useProductStore;
