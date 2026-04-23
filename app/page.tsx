import Link from "next/link";

export default function Home() {
  return (
    <main style={{ backgroundColor: "lightblue", padding: 8 }}>
      <h2>Home Page</h2>
      <Link href="/auth/login">Log In</Link>
    </main>
  );
}
