import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";
import "./styles.css"
import { useState } from "react";

export const Todo = () => {
  const [todoText, setTodoText] =useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "Todoです1",
     "Todoです2"
    ]);

    const [completeTodos, setCompleteTodos] = useState([
      "Todoでした1",
       "Todoでした2"
      ]);

    const onChangeTodoText = (e) => setTodoText(e.target.value);

    const onClickAdd = () => {
      if (todoText === "") return;
      const newTodos = [...incompleteTodos, todoText];
      setIncompleteTodos(newTodos);
    };

    const onClickDelete = (index) => {
      const newTodos = [...incompleteTodos];
      newTodos.splice(index,1);
      setIncompleteTodos(newTodos);
    };

    const onClickComplete = (index) => {
       const newIncompleteTodos = [...incompleteTodos];
       newIncompleteTodos.splice(index, 1);

       const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
       setIncompleteTodos(newIncompleteTodos);
       setCompleteTodos(newCompleteTodos);

    };

    const onClickBack = (index) => {
      const newCompleteTodos = [...completeTodos];
      newCompleteTodos.splice(index, 1);
      setCompleteTodos(newCompleteTodos);


      const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
      setIncompleteTodos(newIncompleteTodos);
      

    };



  return (
    <>
    <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} />
    <IncompleteTodos todos={incompleteTodos} onClickComlete={onClickComplete} onClickDelete={onClickDelete}/>
    <CompleteTodos todos={completeTodos} onClickBack={onClickBack}/>



   
      

    </>
  )
  ;
};