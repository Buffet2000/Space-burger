import React, { useState } from 'react';
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from 'react-redux';
import { AppDispatch, AppThunk, RootState } from './index';

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

type AppDispatchFunc = () => AppDispatch | AppThunk;
export const useDispatch: AppDispatchFunc = dispatchHook;

export function useForm(inputValues: Record<string, string>) {
  const [values, setValues] = useState(inputValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = event.target;
    setValues({...values, [name]: value});
  };
  return {values, handleChange, setValues};
}

