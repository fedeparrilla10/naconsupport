import { create } from "zustand";

const useUserData = create((set) => ({
  contactFormData: null,
  productFormData: null,
  selectedDate: null,
  userTicket: null,
  userMedia: {
    ticket: null,
    video: null,
    images: [],
  },
  updateContactFormData: (contactData) => set({ contactFormData: contactData }),
  updateProductFormData: (productData) => set({ productFormData: productData }),
  updateSelectedDate: (date) => set({ selectedDate: date }),
  updateUserTicket: (ticket) => set({ userTicket: ticket }),
  updateUserMedia: (mediaType, media) =>
    set((state) => ({
      userMedia: {
        ...state.userMedia,
        [mediaType]: media,
      },
    })),
}));

export default useUserData;