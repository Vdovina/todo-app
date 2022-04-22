import { TodoItemType } from "~/models/types";
import { ACTIONS } from "./constants";

export const fetchTodo = () => ({
  type: ACTIONS.FETCH_TODO,
});

export const fetchTodoFailed = (error: any) => ({
  type: ACTIONS.FETCH_TODO_FAILED,
  payload: error,
});

export const fetchTodoSuccessed = (data: TodoItemType[]) => ({
  type: ACTIONS.FETCH_TODO_SUCCESSED,
  payload: data,
});

export const addTodo = (todo: TodoItemType) => ({
  type: ACTIONS.ADD_TODO,
  payload: todo,
});

export const toggleTodo = (todo: TodoItemType) => ({
  type: ACTIONS.TOGGLE_TODO,
  payload: todo,
});

export const removeTodo = (id: number) => ({
  type: ACTIONS.REMOVE_TODO,
  payload: id,
});

export const saveTodo = () => ({
  type: ACTIONS.SAVE_TODO,
})