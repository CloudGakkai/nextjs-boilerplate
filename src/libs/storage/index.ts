export const getLocalStorage = <T = any>(key: string) => {
  const value = localStorage.getItem(key);

  if (!value) {
    return null;
  }

  return JSON.parse(value) as T;
};

export const getSessionStorage = <T = any>(key: string) => {
  const value = sessionStorage.getItem(key);

  if (!value) {
    return null;
  }

  return JSON.parse(value) as T;
};

export const setLocalStorage = <T = unknown>(key: string, value: T) => {
  const stringifiedValue = JSON.stringify(value);

  return localStorage.setItem(key, stringifiedValue);
};

export const setSessionStorage = <T = unknown>(key: string, value: T) => {
  const stringifiedValue = JSON.stringify(value);

  return sessionStorage.setItem(key, stringifiedValue);
};

export const removeLocalStorage = (key: string) => localStorage.removeItem(key);

export const removeSessionStorage = (key: string) => {
  return sessionStorage.removeItem(key);
};
