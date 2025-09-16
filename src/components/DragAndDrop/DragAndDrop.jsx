import React, { useEffect, useState } from "react";

const DragAndDrop = () => {
  const [todos, setTodos] = useState([]);
  async function fetchTodos() {
    const result = await fetch(
      "https://dummyjson.com/todos?limit=5&skip=0"
    ).then((res) => res.json());

    const updatedTodos = result.todos.map((item) => ({
      ...item,
      status: "wip",
    }));
    if (result) {
      setTodos(updatedTodos);
    }
  }
  useEffect(() => {
    fetchTodos();
  }, []);
  function onDragStart(e, id) {
    e.dataTransfer.setData("id", id);
  }
  function onDrop(e, status) {
    const id = e.dataTransfer.getData("id");

    const updatedTodos = todos.filter((item) => {
      if (item.id == id) {
        item.status = status;
      }
      return item;
    });
    setTodos(updatedTodos);
  }
  function renderTodos() {
    const todoListToRender = {
      wip: [],
      completed: [],
    };

    todos.map((todoItem) => {
      todoListToRender[todoItem.status].push(
        <div
          className="card"
          draggable
          onDragStart={(e) => onDragStart(e, todoItem.id)}
        >
          {todoItem.todo}
        </div>
      );
    });
    return todoListToRender;
  }
  return (
    <div className="draganddropWrappwer" style={{display:'flex', flexDirection:'column' ,alignItems:'center'}}>
        <h1>Drag and Drop</h1>
      <div className="draganddropBoard" style={{display:'flex', gap:'50px',justifyContent:'center',color:'white'}}>
        
        <div
          className="InProgress"
          style={{background:'orange' , width:'300px',textAlign:"center",height:'300px'}}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => onDrop(e, "wip")}
        >
          <h1>In Progress</h1>
          {renderTodos().wip}
        </div>
        <div
          className="Completed"
          style={{background:'orange', width:'300px',textAlign:"center",height:'300px'}}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => onDrop(e, "completed")}
        >
          <h1>Completed</h1>
          {renderTodos().completed}
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
