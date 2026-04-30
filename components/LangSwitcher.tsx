"use client";

import {
  selectChangeLang,
  selectLang,
  useCounterStore,
  type AppLang,
} from "@/stores/counterStore";

export default function LangSwitcher() {
  const lang = useCounterStore(selectLang);
  const changeLang = useCounterStore(selectChangeLang);

  return (
    <select
      value={lang}
      onChange={(event) => changeLang(event.target.value as AppLang)}
    >
      <option value="en">EN</option>
      <option value="uk">UK</option>
      <option value="pl">PL</option>
    </select>
  );
}
