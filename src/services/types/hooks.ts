import React, { useState } from 'react';

//Универсальный хук для формы
export function useForm(inputValues: any) {
  const [values, setValues] = useState(inputValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = event.target;
    setValues({...values, [name]: value});
  };
  return {values, handleChange, setValues};
}