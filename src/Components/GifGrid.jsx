import { useState, useEffect } from "react";
import { getGifs } from "../helpers/GetGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  const [isLoding, setIsLoding] = useState(true);

  useEffect(() => {
    getGifs(category).then((newImages) => setImages(newImages));
    setIsLoding(false)
  }, []);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoding && (<h2>Cagando...</h2>)
      }
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id}
                  {...image}
          />
        ))}
      </div>
    </>
  );
};
