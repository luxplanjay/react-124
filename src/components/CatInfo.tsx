import { DiAndroid } from "react-icons/di";
import { type Cat } from "../types/cat";

interface CatInfoProps {
  info: Cat;
}

export default function CatInfo({ info }: CatInfoProps) {
  return (
    <>
      <img src={info.image} alt="" width="80" />
      <p>Name: {info.name}</p>
      <p>
        <DiAndroid size="40" />
        Age: {info.age}
      </p>
      <p>{info.available ? "Available" : "Taken"}</p>
    </>
  );
}
