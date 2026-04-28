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
          <Link href="/posts" className={css.link}>
            Posts
          </Link>
        </li>
      </ul>
    </header>
  );
}
