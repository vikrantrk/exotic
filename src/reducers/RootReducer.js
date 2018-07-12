import { combineReducers } from 'redux';
import { headerReducer } from "./headerReducer";
import { reducer as formReducer } from "redux-form";

export const RootReducer = combineReducers({
   header: headerReducer,
   form: formReducer
});
