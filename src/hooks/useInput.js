import { useState, useCallback } from "react";

export const useInput = (initialForm) => {
  const [inputs, setinputs] = useState(initialForm);
  // change
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setinputs((prev) => ({ ...prev, [name]: value }));
  }, []);
  // reset
  const reset = useCallback(() => setinputs(initialForm), [initialForm]);

  return [inputs, onChange, reset];
};
