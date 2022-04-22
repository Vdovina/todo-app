import store from "./store";
import { fetchTodo, fetchTodoFailed, fetchTodoSuccessed } from "./actions";
import { API_ROUTES } from "../constants/routes";
import { TodoItemType } from "~/models/types";

export const fetchData = async() => {
  const {dispatch} = store;
  dispatch(fetchTodo());
  try {
    const data = await fetch(API_ROUTES.TODOS)
    .then(response => (response.json()))
    .then(data => {
      console.log('!', data)
      return data;
    });
    dispatch(fetchTodoSuccessed(data));
  }
  catch (e) {
    dispatch(fetchTodoFailed(e));
  }
}

export const saveData = async(data: TodoItemType[]) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }
  const res = await fetch(API_ROUTES.TODOS, requestOptions);

  if (res.ok) {
    const todo = await res.json();
    fetchTodoSuccessed(todo.todos);
  }
}