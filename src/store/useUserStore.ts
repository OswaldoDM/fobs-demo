import { create } from 'zustand';

interface UserState {
  user: User;
  setUser: (user: User) => void;
  updateUser: (fields: Partial<User>) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: {
    username: "John Doe",
    email: "johndoe@gmail.com",
    password: "z82o18@**",
  },
  setUser: (user) => set({ user }),
  updateUser: (fields) =>
    set((state) => ({
      user: { ...state.user, ...fields },
    })),
}));
