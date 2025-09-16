import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './styles.css'
const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  async function fetchImages() {
    const res = await fetch(`${url}?page=${page}&limit=${limit}`);
    const data = await res.json();
    console.log(data);
    setImages(data);
  }

  function handlePrevious() {

    setCurrentImage(currentImage===0?images.length-1: currentImage-1)
  }

  function handleNext() {

    setCurrentImage(currentImage===images.length-1? 0: currentImage+1)
  }
  function handleClick(index){
    setCurrentImage(index)
  }
  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <div
      className="MainSliderCont"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="SliderCont">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="arrow arrow-left"
        />
        {images && images.length > 0
          ? images.map((item,index )=> (
              <img
              key={index}
                src={item.download_url}
                className={index===currentImage?'CurrImage':'hide'}
                
              ></img>
            ))
          : null}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="arrow arrow-right"
        />
        <span className="circle-indicators">
        {images && images.length > 0
          ? images.map((item,index )=> (
              <button onClick={()=>handleClick(index)} className={index===currentImage?'CurrIndicator':'CurrIndicator inactive'}></button>
            ))
          : null}
          </span>
      </div>
    </div>
  );
};

export default ImageSlider;
