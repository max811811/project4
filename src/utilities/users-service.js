import * as usersAPI from './users-api'


export async function signUp(userData) {
    const token = await usersAPI.signUp(userData)
    console.log(token)
    localStorage.setItem('token', token)
    return getUser()
}

export async function login(credentials) {
    const token = await usersAPI.login(credentials)
    console.log(token)
    localStorage.setItem('token', token)
    return getUser()
}

export function logOut() {
    localStorage.removeItem('token');
}

export function getToken() {
    // getItem method will return null if there's no key
    const token = localStorage.getItem('token');
    if (!token) return null;
    const payload = JSON.parse(window.atob(token.split('.')[1]));
    if (payload.exp < Date.now() / 1000) {
      // Token has expired
      localStorage.removeItem('token');
      return null;
    }
    return token;
  }
  
export function getUser() {
    const token = getToken();
    return token ? JSON.parse(window.atob(token.split('.')[1])).user : null;
  }

export function checkToken() {
    // Just so that you don't forget how to use .then
    return usersAPI.checkToken().then(dateStr => new Date(dateStr))
    // checkToken returns a string, but let's 
    // make it a Date object for more flexibility

}


