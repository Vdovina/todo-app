import React, { useEffect, useState } from 'react';
import './style.less';
import TodoList from './components/List';
import InputControl from './components/Input';
import { useSelector } from 'react-redux';
import { StateType } from '~/models/types';
import { fetchData, saveData } from './redux/logic';

function App () {
  const { todoList, todoIsLoading } = useSelector((state: StateType) => state);

  useEffect(() => {
    fetchData();
  }, []);

  const onSave = async () => {
    saveData(todoList);
  }
  console.log('data', todoList);

  return(
    <div className="frame">
      <div className="center">
        <div className="todo-list">
          <div className="todo-list__header">
            <h2>To Do List</h2>
            <div onClick={onSave}>
              <SaveIcon />
            </div>
          </div>
          {todoIsLoading && (
            <div>Loading...</div>
          )}
          {!todoIsLoading && (
            <TodoList />
          )}
          <InputControl />
        </div>
      </div>
    </div>
  )
}

const SaveIcon = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 416 416" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M208 416C322.87 416 416 322.87 416 208C416 93.13 322.87 0 208 0C93.13 0 0 93.13 0 208C0 322.87 93.13 416 208 416ZM127.91 192L192 255.58V106H224V255.58L288.09 192L310.63 214.71L208 316.54L105.37 214.7L127.91 192Z" fill="#497081"/>
    </svg>
  );
}

export default App;