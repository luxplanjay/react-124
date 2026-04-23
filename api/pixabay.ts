import axios from "axios";

export interface Image {
  id: number;
  previewURL: string;
  webformatURL: string;
  largeImageURL: string;
  views: number;
  downloads: number;
  favorites: number;
  likes: number;
  comments: number;
}

export interface PixabayResponse {
  total: number;
  totalHits: number;
  hits: Image[];
}

export const getImages = async () => {
  const res = await axios.get<PixabayResponse>(
    `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=yellow+flowers&image_type=photo`,
  );
  return res.data.hits;
};

export const getImageById = async (imageId: string) => {
  const res = await axios.get<PixabayResponse>(
    `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&id=${imageId}`,
  );
  return res.data.hits[0];
};
