import React, { useReducer } from "react";


function Reducer(state,action){
   switch (action.type) {
    case 'PREV':
        
        return {...state,currentPage:state.currentPage-1};
    case 'NEXT':
        
       return {...state,currentPage:state.currentPage+1};
    case 'SET_PAGE':
        
       return {...state,currentPage:action.payload};
   
    default:
        return state;
   }
}
const PaginationReducer = () => {
  const data = Array.from({ length: 25 }, (_, i) => `item ${i+1}`);
  const [state, dispatch] = useReducer(Reducer, { currentPage: 1 });
  const totalItems = data.length;
  const itemsPerPage = 5;
  const lastIndex = state.currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const displayedItems = data.slice(firstIndex, lastIndex);
  const pages=Array.from({ length: 5 }, (_, i) => i+1);
  console.log(pages)
  return (
    <div className="PaginationReducerWrapper">
      <div className="PaginationReducer">
        <ul>
          {displayedItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <button disabled={state.currentPage===1} onClick={()=>dispatch({type:'PREV'})}>prev</button>
      {
        pages.map((item)=>(
            <button onClick={()=>dispatch({type:'SET_PAGE',payload:item})}>{item}</button>
        ))
      }
      <button disabled={state.currentPage===((totalItems/itemsPerPage))} onClick={()=>dispatch({type:'NEXT'})}>next</button>
    </div>
  );
};

export default PaginationReducer;
