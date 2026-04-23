import Link from "next/link";
import { getImages } from "@/api/pixabay";
import css from "./page.module.css";

export default async function Gallery() {
  const images = await getImages();

  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li key={image.id} className={css.imageCard}>
          <img src={image.webformatURL} alt={`Image ${image.id}`} />
          <div className={css.imageInfo}>
            <Link href={`/gallery/${image.id}`}>View Details</Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

// /gallery
// /gallery/[imageId]
