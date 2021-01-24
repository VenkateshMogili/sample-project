const { createStore, applyMiddleware } = require("redux")
const thunk = require('redux-thunk').default
const axios = require('axios');
const FETCH_USERS_REQUEST="FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS="FETCH_USERS_SUCCESS";
const FETCH_USERS_FAIL="FETCH_USERS_FAIL";

const initialState={
  users:[],
  error:'',
  isLoading:false
}

const fetchUsersRequest=()=>{
  return {
    type:FETCH_USERS_REQUEST
  }
}
const fetchUsersSuccess=(users)=>{
  return {
    type:FETCH_USERS_SUCCESS,
    data: users
  }
}
const fetchUsersFail=(error)=>{
  return {
    type:FETCH_USERS_FAIL,
    data: error
  }
}

const usersReducer = (state=initialState,action)=>{
  switch(action.type){
    case FETCH_USERS_REQUEST:
      return {...state,isLoading:true}
    case FETCH_USERS_SUCCESS:
      return {isLoading:false,users:action.data,error:''}
    case FETCH_USERS_FAIL:
      return {isLoading:false,users:[],error:action.data}
    default:
      return state;
  }
}

const fetchUsers = ()=>{
  return function(dispatch){
    dispatch(fetchUsersRequest());
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
      let users = response.data.map(user=>user.id);
      dispatch(fetchUsersSuccess(users))
    })
    .catch(error=>{
      dispatch(fetchUsersFail(error))
    })
  }
}

const store = createStore(usersReducer,applyMiddleware(thunk));
store.subscribe(()=>{console.log(store.getState())});
store.dispatch(fetchUsers());