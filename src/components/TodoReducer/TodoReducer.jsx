import React, { useReducer, useState } from "react";

function Reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, {id:new Date(),text:action.payload,completed:false}];
    case "REMOVE_TODO":
      return state.filter((item)=>item.id!==action.payload)
    case "TOGGLE_TODO":
      return state.map((item)=>item.id==action.payload?{...item,completed:!item.completed}:item)

    default:
      return state;
  }
}
const TodoReducer = () => {
  const [taskText, setTaskText] = useState("");
  const [tasks, dispatch] = useReducer(Reducer, []);
  return (
    <div className="TodoReducerWrapper">
      <div>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button onClick={()=>{dispatch({ type: "ADD_TASK", payload: taskText }),setTaskText('')}}>
          Add Task
        </button>
      </div>
      <div>
        <ul>{
            tasks.map((item)=>(
                <div key={item.id} style={{display:'flex' }}>
                <li style={{textDecoration:!item.completed?'':'line-through'}} onClick={()=>dispatch({type:'TOGGLE_TODO',payload:item.id})}>
                    {item.text} 
                </li> <button onClick={()=>dispatch({type:'REMOVE_TODO',payload:item.id})}>Remove Todo</button></div>
            ))
        }</ul>
      </div>
    </div>
  );
};

export default TodoReducer;
