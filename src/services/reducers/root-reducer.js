import { combineReducers } from 'redux';
import { ingredientsReducer } from "../reducers/all-ingredients";
import { ingredientReducer } from "../reducers/opened-ingredient";
import { ingredientsConstructorReducer } from "../reducers/constructor-ingredients";
import { orderReducer } from './order';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorIngredients: ingredientsConstructorReducer,
  ingredientInformation: ingredientReducer,
  orderInformation: orderReducer
});