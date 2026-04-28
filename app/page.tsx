import Image from "next/image";
import imgUrl from "./cover.png";

export default function Home() {
  return (
    <main>
      <h2>Home Page</h2>
      {/* <Image src="/cat.webp" alt="qweqwe" width="480" height="641" /> */}
      {/* <Image
        src={imgUrl}
        alt="ascaf"
        width="400"
        height="600"
        loading="eager"
      /> */}
      <Image
        src="https://cdn.pixabay.com/photo/2025/06/09/17/31/insects-9650481_1280.jpg"
        alt="qweqe"
        width={1280}
        height={720}
        loading="eager"
      />
    </main>
  );
}
