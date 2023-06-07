import { combineReducers } from "redux";
import { ingredientsReducer } from "./all-ingredients";
import { ingredientReducer } from "./opened-ingredient";
import { ingredientsConstructorReducer } from "./constructor-ingredients";
import { orderReducer } from "./order";
import { userReducer } from "./login-reducer";
import { webSocketReducer } from "./web-socket";
import { webSocketAuthReducer } from "./web-socket-auth";
import { currentOrderReducer } from "./current-order";
import { passwordResetReducer } from "./password-reset";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorIngredients: ingredientsConstructorReducer,
  ingredientInformation: ingredientReducer,
  orderInformation: orderReducer,
  user: userReducer,
  resetPassword: passwordResetReducer,
  wsOrders: webSocketReducer,
  wsAuthOrders: webSocketAuthReducer,
  currentOrder: currentOrderReducer,
});
