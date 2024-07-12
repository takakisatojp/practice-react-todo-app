import "./styles.css"
import { useState } from "react";

export const Todo = () => {
  const [todoText, setTodoText] =useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "Todoです1",
     "Todoです2"
    ]);

    const [completeTodos, setcompleteTodos] = useState([
      "Todoでした1",
       "Todoでした2"
      ]);

    const onChangeTodoText = (e) => setTodoText(e.target.value);

    const onClickAdd = () => {
      if (todoText === "") return;
      const newTodos = [...incompleteTodos, todoText];
      setIncompleteTodos(newTodos);
    };



  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClickAdd}>追加</button>
      </div>


      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => (
              <li key={todo}>
                <div className="list-low">
                  <p className="todo-item">{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            )
          )}

        </ul>
      </div>
      

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => 
            <li>
              <div className="list-low">
                <p className="todo-item">{todo}</p>
                <button>戻す</button>
              </div>
            </li>          
          )}

        </ul>
      </div>
    </>
  )
  ;
};