"use client";

import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const handleLogin = async (formData: FormData) => {
    // http запит
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(formData.get("username"));
    router.push("/profile");
  };

  return (
    <form action={handleLogin}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}
