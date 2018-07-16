import { combineReducers } from 'redux';
import { headerReducer } from "./headerReducer";
import { menuReducer } from "./menuReducer";
import { reducer as formReducer } from "redux-form";

export const RootReducer = combineReducers({
   header: headerReducer,
   form: formReducer,
   menu: menuReducer
});
