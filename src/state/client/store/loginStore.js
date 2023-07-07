import { create } from "zustand";

export const useLoginStore = create((set) => ({
  email: "",
  setEmail: (email) => set({ email }),
  password: "",
  setPassword: (password) => set({ password }),
}));
