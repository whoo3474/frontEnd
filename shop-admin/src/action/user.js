import { GET_USER, ADD_USER } from "../types";

export function getUser() {
  return (dispatch, getState) => {
    // dispatch : 액션을 호출하는 함수
    // getState : 현재 스토어의 state를 가져오는 함수
    fetch('http://localhost:3001/user')
    .then(res => res.json())
    .then(users => {
      dispatch(successToGetUser(users));
    });
  }
}
export function successToGetUser(users) {
  return {
    type: GET_USER,
    users:users
  }
}

export function addUser(userData) {
  return (dispatch) => {
    return new Promise(resolve => {
      fetch('http://localhost:3001/user', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method:'post',
        body:JSON.stringify(userData)
      }).then(res => res.json)
      .then((err) => {
        dispatch(finishAddUser(err));
        resolve(err);
      })
    })
  }
}
export function finishAddUser(err) {
  return {
    type: ADD_USER,
    err:err
  }
}