'use client';

import { useEffect } from 'react';
import { checkSession, getMe } from '../lib/api/clientApi';
import { useAuthStore } from '../lib/store/authStore';

type Props = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
  const setUser = useAuthStore((state) => state.setUser);
  const clearIsAuthed = useAuthStore((state) => state.clearIsAuthed);

  useEffect(() => {
    const fetchUser = async () => {
      // Перевіряємо сесію
      const isAuthenticated = await checkSession();
      if (isAuthenticated) {
        // Якщо сесія валідна — отримуємо користувача
        const user = await getMe();
        if (user) {
          setUser(user);
        }
      } else {
        // Якщо сесія невалідна — чистимо стан
        clearIsAuthed();
      }
    };

    fetchUser();
  }, [setUser, clearIsAuthed]);

  return children;
}
