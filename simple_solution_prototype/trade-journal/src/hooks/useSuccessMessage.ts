import { useState } from "react";

export const useSuccessMessage = () => {
  const [message, setMessage] = useState<string | null>(null);

  const showMessage = (msg: string, duration: number = 3000) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), duration);
  };

  return { message, showMessage };
};