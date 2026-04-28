import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Not Found page</h1>
      <p>You will be redirected to the profile page in 3 seconds.</p>
      <Link href="/">Back to home page</Link>
    </div>
  );
}
