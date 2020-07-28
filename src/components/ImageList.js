import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const dataImages = props.images.map((images) => {
    return (
      <ImageCard
        image={images}
        key={images.id}
        alt={images.description}
        {...props}
      />
    );
  });
  const morePics = () => props.showMorePag;
  return (
    <>
      <div className="imgCon">{dataImages} </div>
    </>
  );
};

export default ImageList;
