'use client';

import Link from 'next/link';
import css from './AppHeader.module.css';
import { useAuthStore } from '@/lib/store/authStore';
import { logout } from '@/lib/api/clientApi';
import { useRouter } from 'next/navigation';

export default function AppHeader() {
  const router = useRouter();
  const isAuthed = useAuthStore((state) => state.isAuthed);
  const user = useAuthStore((state) => state.user);
  const clearIsAuthed = useAuthStore((state) => state.clearIsAuthed);

  const handleLogout = async () => {
    await logout();
    clearIsAuthed();
    router.push('/login');
  };

  return (
    <header className={css.header}>
      <ul className={css.list}>
        <li>
          <Link href="/" className={css.link}>
            Home
          </Link>
        </li>

        {isAuthed && (
          <>
            <li>
              <Link href="/notes/filter/all" className={css.link}>
                Notes
              </Link>
            </li>
            <li>
              <Link href="/profile" className={css.link}>
                Profile
              </Link>
            </li>
          </>
        )}

        {!isAuthed && (
          <>
            <li>
              <Link href="/register" className={css.link}>
                Register
              </Link>
            </li>
            <li>
              <Link href="/login" className={css.link}>
                Login
              </Link>
            </li>
          </>
        )}
      </ul>
      {isAuthed && (
        <div className={css.userMenu}>
          <p>{user?.userName}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </header>
  );
}
