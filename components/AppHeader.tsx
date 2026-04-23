import Link from "next/link";
import css from "./AppHeader.module.css";

export default function AppHeader() {
  return (
    <header>
      <ul className={css.list}>
        <li>
          <Link href="/" className={css.link}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/playlist" className={css.link}>
            Playlist
          </Link>
        </li>
        <li>
          <Link href="/gallery" className={css.link}>
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/auth/login" className={css.link}>
            Login
          </Link>
        </li>
      </ul>
    </header>
  );
}
