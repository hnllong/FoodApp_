import { createStore } from "redux";
import { RootReducers } from "../../redux/reducers/index";

export const store = createStore(RootReducers);