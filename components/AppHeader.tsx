import Link from "next/link";

export default function AppHeader() {
  return (
    <header>
      <ul style={{ display: "flex", gap: 8, listStyle: "none" }}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </header>
  );
}
