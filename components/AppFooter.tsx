"use client";

import { selectLang, useCounterStore } from "@/stores/counterStore";

export default function AppFooter() {
  const lang = useCounterStore(selectLang);

  return (
    <footer>
      <strong>{lang}</strong>
    </footer>
  );
}
