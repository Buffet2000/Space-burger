import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import { store } from "../store";
import { TIngredients } from "./types";
import { rootReducer } from "../reducers/root-reducer";

//Типизация стора
export type RootState = ReturnType<typeof rootReducer>;

//Все экшены приложения
type TApplicationActions =
  TIngredients
;

//Типизация Redux Thunk
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

//Типизация метода dispatch
export type AppDispatch = typeof store.dispatch; 