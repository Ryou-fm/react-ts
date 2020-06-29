export const getData = function(name) {
  try {
    return JSON.parse(localStorage.getItem(name));
  } catch (err) {
    return localStorage.getItem(name);
  }
}
export const setData = function(name, value) {
  if (name) {
    if (typeof value === 'string') {
      localStorage.setItem(name, value);
    } else {
      localStorage.setItem(name, JSON.stringify(value));
    }
  }
}
export const getSession = function(name) {
  try {
    return JSON.parse(sessionStorage.getItem(name));
  } catch (err) {
    return sessionStorage.getItem(name);
  }
}
export const setSession = function(name, value) {
  // sessionStorage
  if (name) {
    if (typeof value === 'string') {
      sessionStorage.setItem(name, value);
    } else {
      sessionStorage.setItem(name, JSON.stringify(value));
    }
  }
}