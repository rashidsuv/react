import React, { useState } from "react";
import "./Todo.css";
function Todo() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setTodo] = useState("");
  const [pls, setPls] = useState("Add item...");
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder={pls}
          required
        />
        <i
          onClick={toDo.length === 0 
            ? () => setPls("Type anything .....")
            : () =>setToDos([ ...toDos,{ id: Date.now(), text: toDo, status: false }])                  
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  value={obj.status}
                  onChange={(e) => {
                    console.log(e.target.checked)
                    console.log(obj)
                    setToDos(toDos.filter(obj2=>{
                      if(obj2.id===obj.id){
                        obj2.status=e.target.checked
                      }
                        return obj2
                    }))
                  }}
                    type="checkbox"
                  // name=""
                  // id=""
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i onClick={()=>setToDos(toDos.filter(obj1=>{
                  return obj1.id !==obj.id
                }))} className="fas fa-times"></i>
              </div>
            </div>
          );
        })}
        {
          toDos.map((obj)=>{
            if(obj.status){
              return(<ul>
                <li><p>{obj.text}</p></li>
                </ul>)
            }
            return null
          })

        }
      </div>
    </div>
  );
}

export default Todo;
