import React, { useEffect, useState } from "react";
import './ImageSlider5.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
const ImageSlider5 = () => {
    const [images, setImages]=useState(null);
    const [curIndex, setCurIndex]=useState(0);

   async function fetchPhotos(){
        const data= await fetch('https://picsum.photos/v2/list?page=1&limit=10');
        const res=await data.json();
        if(res){
            setImages(res)
        }
    }
    function handleLeftClick(){
        setCurIndex(curIndex==0?images.length-1:curIndex-1)
    }
    function handleRightClick(){
        setCurIndex(curIndex==images.length-1?0:curIndex+1)
    }
    useEffect(()=>{
        fetchPhotos();
    },[])
  return (
    <div className="sliderWrapper5">
      <div className="slidercont5">
        <BsArrowLeftCircleFill color = ' white' className ='arroww leftt' onClick={()=>handleLeftClick()}></BsArrowLeftCircleFill>
       {
       images? images.map((item,index)=>(
        <img src={item.download_url}
              alt={item.author}
              key={item.id}
              className={`${curIndex==index?'avatarr':'inactivee'}`}/>
       )):'loading'
       }
       <BsArrowRightCircleFill className = 'arroww rightt ' color = ' white'  onClick={()=>handleRightClick()}></BsArrowRightCircleFill>
       <div className="circleind">{
        images? images.map((item,index)=>(
            <button key={index}className={`currind ${curIndex==index?'':'nonactivee'}`} onClick={()=>setCurIndex(index)}></button>
        )):null
}</div>
      </div>
    </div>
  );
};

export default ImageSlider5;
