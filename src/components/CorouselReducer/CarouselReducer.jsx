import React, { useReducer } from "react";

function Reducer(state,action){
    switch (action.type) {
        case 'SET_CURRENT_IMAGE':
            
            return{...state,currentImage:action.payload}
    
        default:
            return state;
    }
}
const CarouselReducer = () => {
  const [state, dispatch] = useReducer(Reducer, { currentImage: 0 });
  const images = [
    "https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg",
    "https://wallpapers.com/images/hd/marvel-pictures-a8zq5u8qw3ega7cx.jpg",
    "https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg",
    "https://upload.wikimedia.org/wikipedia/en/1/19/Marvel_Universe_%28Civil_War%29.jpg",
  ];
  return (
    <div className="CarouselReducerWrapper">
      <div className="CarouselReducerWrapper" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
       <img src={images[state.currentImage]} alt='image' style={{width:'350px',height:'450px'}}/>
       <div style={{display:'flex', marginTop:'20px', gap:'20px'}}>
       <button onClick={()=>dispatch({type:'SET_CURRENT_IMAGE', payload:(state.currentImage==0?images.length-1:state.currentImage-1)})}>prev</button>
       <button onClick={()=>dispatch({type:'SET_CURRENT_IMAGE',payload:(state.currentImage==images.length-1?0:state.currentImage+1)})}>next</button>
      </div>
      </div>
    </div>
  );
};

export default CarouselReducer;
