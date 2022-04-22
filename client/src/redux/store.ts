import { createStore, applyMiddleware } from "redux"
import reducer from "./reducer";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk))

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;