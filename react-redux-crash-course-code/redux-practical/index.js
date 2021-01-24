const { createStore, combineReducers,applyMiddleware } = require("redux")
const logger = require('redux-logger').default;
const thunk = require('redux-thunk');
const BUY_LAPTOP="BUY_LAPTOP";
const BUY_MOBILE="BUY_MOBILE";
const initialState={
  numOfLaptops: 100
}
const intialMobile={
  numOfMobiles: 1000
}

const buyLaptop=()=>{
  return {
    type:BUY_LAPTOP
  }
}
const buyMobile=()=>{
  return {
    type:BUY_MOBILE
  }
}

const laptopReducer = (state=initialState,action)=>{
  switch(action.type){
    case BUY_LAPTOP:
      return {numOfLaptops: state.numOfLaptops-1}
    default:
      return state;
  }
}
const mobileReducer = (state=intialMobile,action)=>{
  switch(action.type){
    case BUY_MOBILE:
      return {numOfMobiles: state.numOfMobiles-1}
    default:
      return state;
  }
}
const rootReducer = combineReducers({laptops:laptopReducer,mobiles:mobileReducer})
const store = createStore(rootReducer,applyMiddleware(logger,thunk));
// console.log(store);
store.subscribe(()=>{console.log(store.getState())});
store.dispatch(buyLaptop());
store.dispatch(buyLaptop());
store.dispatch(buyLaptop());
store.dispatch(buyLaptop());
store.dispatch(buyMobile());