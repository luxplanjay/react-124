import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>NotFound in Profile</h1>
      <p>
        Друже тут була сторінка музики, але ми іі не підтримуємо більше сорі
      </p>
      <Link rel="stylesheet" href="/">
        Back to home page
      </Link>
    </div>
  );
}
