import { create } from 'zustand';
import { User } from '../api/clientApi';

type AuthStore = {
  isAuthed: boolean;
  user: User | null;
  setUser: (user: User) => void;
  clearIsAuthed: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthed: false,
  user: null,
  setUser: (user: User) => {
    set(() => ({
      user,
      isAuthed: true,
    }));
  },
  clearIsAuthed: () => {
    set(() => ({
      user: null,
      isAuthed: false,
    }));
  },
}));
