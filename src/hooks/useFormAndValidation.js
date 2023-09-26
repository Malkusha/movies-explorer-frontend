import { useState, useCallback } from "react";

function useFormAndValidation() {

  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  })
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState({});

  function handleChange(e) {
    const {name, value} = e.target;
    setFormValue({
      ...formValue,
      [name]: value
    })

    setIsValid(e.target.closest('#form').checkValidity());

    setError({
      ...error,
      [name]: e.target.validationMessage
    })
  }

  const addFormValues = useCallback((values = {}, errors = {}, ) => {
      setFormValue(values);
    }, [setFormValue])

  return {
    formValue,
    error,
    isValid,
    handleChange,
    addFormValues
  }
}

export default useFormAndValidation;