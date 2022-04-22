interface TodoItemType {
  id: number,
  name: string,
  done: boolean
}

type ActionType = {
  type: string,
  payload: any,
}

type StateType = {
  todoIsLoading: boolean,
  todoList: TodoItemType[],
}

type DispatchType = (args: ActionType) => ActionType;

export {TodoItemType, ActionType, StateType, DispatchType};