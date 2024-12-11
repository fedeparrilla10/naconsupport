import { create } from "zustand";

const useProductStore = create((set) => ({
  selectedCategory: null,
  selectedProduct: null,
  selectedVariant: null,
  updateCategory: (category) => set({ selectedCategory: category }),
  updateProduct: (product) => set({ selectedProduct: product }),
  updateVariant: (variant) => set({ selectedVariant: variant }),
}));

export default useProductStore;
