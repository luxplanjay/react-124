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
          <Link href="/recipes" className={css.link}>
            Recipes
          </Link>
        </li>
        <li>
          <Link href="/profile" className={css.link}>
            Profile
          </Link>
        </li>
        <li>
          <Link href="/tasks" className={css.link}>
            Tasks
          </Link>
        </li>
      </ul>
    </header>
  );
}
