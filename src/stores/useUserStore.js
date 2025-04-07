import { create } from "zustand";
import { toast } from "react-hot-toast";

import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import axiosInstance from "../libs/axios.js";

export const useUserStore = create((set, get) => ({
  user: null,

  login: async ({name,password}) => {
    try {
      const response = await axiosInstance.post('/login',{name,password});  
      set({ user: response.data });  
      toast.success("Login successful", { toastId: "uniqueToastId" });
    } catch (error) {
      toast.error("Failed to login", { toastId: "uniqueToastId" });
    }
  },
  logout : async(navigate)=>{
     await signOut(auth);
        navigate("/");
  },
  setUser: (userData) => set({ user: userData }),
  

 
}));
