export const getFromLocalStorage = <T>(key: string): T | null => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };
  
export const saveToLocalStorage = (key: string, value: unknown): void => {
    localStorage.setItem(key, JSON.stringify(value));
};  