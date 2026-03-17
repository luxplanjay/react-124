import AppHeader from "../AppHeader/AppHeader";
import CatList from "../CatList";
import catsData from "../../cats.json";
import css from "./App.module.css";

export default function App() {
  const availableCats = catsData.filter((cat) => cat.available);
  const takenCats = catsData.filter((cat) => !cat.available);

  return (
    <div className={css.container}>
      <AppHeader />

      <h2>Available cats</h2>
      <CatList cats={availableCats} />

      <h2>Taken cats</h2>
      <CatList cats={takenCats} />
    </div>
  );
}
