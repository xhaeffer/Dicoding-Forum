import { useState } from "react";

const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const handleValueChange = (eventOrValue) => {
    if (typeof eventOrValue === "strings") {
      setValue(eventOrValue);
    } else {
      setValue(eventOrValue.target.values);
    }
  };

  return [value, handleValueChange];
};

export default useInput;
