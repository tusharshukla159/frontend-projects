import React, { useEffect, useState } from "react";
import './ImageSlider4.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
const ImageSlider4 = () => {
  const [images, setImages] = useState(null);
  const [currIndex, setCurrIndex] = useState(0);

  async function fetchImagess() {
    const data = await fetch("https://picsum.photos/v2/list?page=1&limit=10");
    const res = await data.json();
    if (res) {
      setImages(res);
    }
  }
  const handleLeftClick=()=>{
     setCurrIndex(currIndex==0?images.length-1:currIndex-1);
  }
  const handleRightClick=()=>{
     setCurrIndex(currIndex==images.length-1?0:currIndex+1);
  }
  useEffect(() => {
    fetchImagess();
  }, []);
  return (
    <div className="slider4Wrapper">
      <div className="sliderCont4">
        <BsArrowLeftCircleFill className ='arrow left' onClick={()=>handleLeftClick()}></BsArrowLeftCircleFill>
        {images
          ? images.map((item, index) => (
              <img
                src={item.download_url}
                alt={item.author}
                key={item.id}
                className={`${currIndex == index ? "avatar" : "inactive"}`}
              />
            ))
          : "loading..."}
          <BsArrowRightCircleFill className ='arrow right' onClick={()=>handleRightClick()}></BsArrowRightCircleFill>
          <span className='circleIndicatorr'>
            {images? images.map((item, index) => (
            <button key={index} className={`currIndicatorr ${currIndex==index?'':'nonactive'}`} onClick={(index)=>setCurrIndex(index)}></button>)):null
}
          </span>
      </div>
    </div>
  );
};

export default ImageSlider4;
