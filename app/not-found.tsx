"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  // useEffect(() => {
  //   const timerId = setTimeout(() => router.push("/profile"), 3000);
  //   return () => clearTimeout(timerId);
  // }, [router]);

  return (
    <div>
      <h1>Not Found page</h1>
      <p>You will be redirected to the profile page in 3 seconds.</p>
      <Link href="/">Back to home page</Link>
    </div>
  );
}
