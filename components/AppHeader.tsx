import Link from "next/link";
import css from "./AppHeader.module.css";

export default function AppHeader() {
  // const {gId, cId, mId} = await getStudentData()
  return (
    <header>
      <ul className={css.list}>
        <li>
          <Link href="/" className={css.link}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/login" className={css.link}>
            Login
          </Link>
        </li>
        <li>
          {/* <Link href=`/learn/${gId}/${cId}/${mId}` className={css.link}> */}
          <Link href="/learn/10/11/12" className={css.link}>
            Learn
          </Link>
        </li>
      </ul>
    </header>
  );
}
