import React, { useState } from 'react';
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from 'react-redux';
import { AppDispatch, AppThunk, RootState } from './index';

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

//Хук не даст отправить экшен, который ему не знаком
type AppDispatchFunc = () => AppDispatch | AppThunk;
export const useDispatch: AppDispatchFunc = dispatchHook;

//Универсальный хук для формы
export function useForm(inputValues: any) {
  const [values, setValues] = useState(inputValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = event.target;
    setValues({...values, [name]: value});
  };
  return {values, handleChange, setValues};
}

