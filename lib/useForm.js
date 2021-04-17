import { useEffect, useState } from 'react';

export const useForm = (initial = {}) => {
  const [inputs, setInputs] = useState(initial);
  const initialValues = Object.values(initial);

  useEffect(() => {
    setInputs(initial);
  }, [initialValues]);

  const handleChange = (e) => {
    let { value, name, type } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      [value] = e.target.files;
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const resetForm = () => {
    setInputs(initial);
  };

  const clearForm = () => {
    const blankState = Object.fromEntries(
      Object.entries(inputs)?.map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  };

  // return the things we want to surface from this custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
};
