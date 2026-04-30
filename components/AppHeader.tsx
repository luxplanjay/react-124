import Link from "next/link";
import css from "./AppHeader.module.css";
import LangSwitcher from "./LangSwitcher";

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
          <Link href="/posts" className={css.link}>
            Posts
          </Link>
        </li>
      </ul>
      <LangSwitcher />
    </header>
  );
}
