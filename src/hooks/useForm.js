import React from "react";
// import useLocalStorage from './useLocalStorage';

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/,
    message: "Preencha um email válido.",
  },
  contact: {
    regex: /^\(?[1-9]{2}\)? ?(?:[2-8]|9 [1-9])[0-9]{3}\-?[0-9]{4}$/,
    message: "Insira um número válido, incluindo DDD",
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  // const [key, setItem] = useLocalStorage();
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preenchimento obrigatório");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target, currentTarget }) {
    if (error) validate(target.value);
    if (type==="contact") {
      currentTarget.maxlength = 11;
      let valueMasked = currentTarget.value;
      valueMasked = valueMasked.replace(/\D/g, "");
      valueMasked = valueMasked.replace(/^(\d{2})(\d{1})(\d{4})(\d)/, "($1) $2 $3-$4");
      setValue(valueMasked);
    } else {
      setValue(target.value);
    }
  }

  return {
    value,
    setValue,
    error,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
