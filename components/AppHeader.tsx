import Link from "next/link";
import css from "./AppHeader.module.css";

export default function AppHeader() {
  return (
    <header className={css.header}>
      <ul className={css.list}>
        <li>
          <Link href="/" className={css.link}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/notes/filter/all" className={css.link}>
            Notes
          </Link>
        </li>
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
      </ul>
    </header>
  );
}
