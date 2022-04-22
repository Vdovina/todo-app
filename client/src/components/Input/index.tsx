import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType, TodoItemType } from "~/models/types";
import { addTodo } from "../../redux/actions";

function InputControl () {
  const { todoList } = useSelector((state: StateType) => state);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  
  const onAddItem = (e : React.FormEvent) => {
    e.preventDefault();
    if (value !== '') {
      let counter = 0;
      if (todoList.length !== 0) {
        counter = todoList[todoList.length - 1].id + 1;
      }
      dispatch(addTodo({
        id: counter,
        name: value,
        done: false,  
      }));
      setValue('');
    }
  }
  
  return (
    <form className="todo-list__input" onSubmit={onAddItem}>
      <input 
        type='text'
        placeholder='Add new task'
        value={value}
        onChange={(e) => { setValue(e.currentTarget.value) }}
        />
      <input 
        type='submit'
        value='Add'
        />
    </form>
  );
}

export default InputControl;