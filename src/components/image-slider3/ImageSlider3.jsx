import React, { useEffect, useState } from "react";
import "./imageslider3.css";
import { BsArrowLeft, BsArrowLeftCircleFill, BsArrowRight, BsArrowRightCircleFill } from "react-icons/bs";
const ImageSlider3 = () => {
  const [images, setImages] = useState(null);
  const [currIndex, setCurrIndex] = useState(0);

  async function fetchImages() {
    const data = await fetch("https://picsum.photos/v2/list?page=1&limit=10");
    const res = await data.json();
    if (res) {
      setImages(res);
    }
  }
  const handleLeftClick=()=>{
    setCurrIndex(currIndex==0?images.length-1: currIndex-1);
  }
  const handleRightClick=()=>{
    setCurrIndex(currIndex==images.length-1? 0: currIndex+1);
  }
  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <div className="sliderwrap3">
      <div className="sliderCont3">
        <BsArrowLeftCircleFill onClick={ ()=>handleLeftClick() }className='arrow Left'/>
        {images
          ? images.map((item,index) => (
              <img
                src={item.download_url}
                alt={item.author}
                className={`  ${currIndex == index? "avatar" : "inactive"}`}
                key={item.id}
              />
            ))
          : "loading"}
          <BsArrowRightCircleFill onClick={ ()=>handleRightClick()} className='arrow Right'/>
          <span className="circleIndicator">
            {
               images
               ? images.map((item,index) => (
                <button key={index} className={`currentIndicator ${currIndex==index? '': 'nonactive'}`} onClick={()=>setCurrIndex(index)}></button> )):null
            }
            </span>
      </div>
    </div>
  );
};

export default ImageSlider3;
