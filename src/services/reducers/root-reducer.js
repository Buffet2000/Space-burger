import { combineReducers } from "redux";
import { ingredientsReducer } from "./all-ingredients";
import { ingredientReducer } from "./opened-ingredient";
import { ingredientsConstructorReducer } from "./constructor-ingredients";
import { orderReducer } from "./order";
import { userReducer } from "./login-reducer";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorIngredients: ingredientsConstructorReducer,
  ingredientInformation: ingredientReducer,
  orderInformation: orderReducer,
  user: userReducer,
});
