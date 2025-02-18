import { useState } from "react";

const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const handleValueChange = (eventOrValue) => {
    if (typeof eventOrValue === "string") {
      setValue(eventOrValue);
    } else {
      setValue(eventOrValue.target.value);
    }
  };

  return [value, handleValueChange];
};

export default useInput;
