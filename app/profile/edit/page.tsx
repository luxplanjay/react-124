import { notFound } from "next/navigation";

export default function Edit() {
  notFound();
  return <h1>Edit page</h1>;
}

// 2022 /profile/edit зробили собі закладку в браузері

// 2025 /profile/edit - не працює, бо ми видалили цю сторінку, але вона є в закладках, тому ми можемо показати сторінку 404 або зробити редірект на /profile
