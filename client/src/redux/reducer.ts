import { ACTIONS } from "./constants";
import { StateType, ActionType } from "~/models/types";

const initialState : StateType = {
  todoIsLoading: false,
  todoList: [],
};

const reducer = (
  state: StateType = initialState,
  action: ActionType,
): StateType => {
  switch (action.type) {
    case ACTIONS.FETCH_TODO:
      return {
        ...state,
        todoIsLoading: true, 
      }
    case ACTIONS.FETCH_TODO_FAILED:
      return state;
    case ACTIONS.FETCH_TODO_SUCCESSED:
      return {
        ...state,
        todoIsLoading: false,
        todoList: action.payload,
      }
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      }
    case ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map(item => (item.id === action.payload.id ? {...item, done: !item.done} : item)),
      }
    case ACTIONS.REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(item => item.id !== action.payload),
      }
    default:
      return state;
  }
}

export default reducer;
