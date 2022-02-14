import { event } from "jquery";
import { SetStateAction, useState } from "react";

export const useInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);
  
    return {
      value,
      setValue,
      reset: () => setValue(""),
      bind: {
        value,
        onChange: (event: { target: { value: SetStateAction<string>; }; }) => {
          setValue(event.target.value);
        }
      }
    };
  };