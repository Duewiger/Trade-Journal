export interface User {
    email: string;
    password: string;
}

export const getUsersFromLocalStorage = (): User[] => {
    const data = localStorage.getItem("users");
    return data ? JSON.parse(data) : [];
};

export const saveUserToLocalStorage = (user: User): void => {
    const users = getUsersFromLocalStorage();
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
};

export const authenticateUser = (email: string, password: string): boolean => {
    const users = getUsersFromLocalStorage();
    return users.some((user) => user.email === email && user.password === password);
};