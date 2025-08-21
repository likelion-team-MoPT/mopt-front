import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: number;
  nickname: string;
  email: string;
  phone_number: string;
  profileImage?: string | null;
  birthdate?: string | null;
}

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  clearUser: () => void;
  updateUser: (updates: Partial<User>) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      setUser: (user) => set({ user, isAuthenticated: true }),
      clearUser: () => set({ user: null, isAuthenticated: false }),
      updateUser: (updates) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...updates } : null,
        })),
    }),
    {
      name: 'mopt-user-store',
    }
  )
);

// 임시 사용자 ID (실제 프로덕션에서는 인증 시스템에서 가져와야 함)
export const TEMP_USER_ID = 1;
