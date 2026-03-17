import MainNav from "../MainNav";
import css from "./AppHeader.module.css";

export default function AppHeader() {
  return (
    <header className={css.container}>
      <a href="">Logo</a>
      <MainNav />
    </header>
  );
}
