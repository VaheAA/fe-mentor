import { ref, computed } from 'vue';
import { defineStore } from 'pinia';


type Toast = {
  message: string;
  isOpen: boolean;
  status: string
}

export type ToastState = {
  toast: Toast
};

export const useToastStore = () => defineStore({
  id: 'toastStore',
  state: () => ({
    toast: {
      message: '',
      isOpen: false,
      status: ''
    }
  } as ToastState),

  actions: {
    openToast(message: string, status: string) {
      this.toast.message = message;
      this.toast.status = status;
      this.toast.isOpen = true;
    }
  }
})