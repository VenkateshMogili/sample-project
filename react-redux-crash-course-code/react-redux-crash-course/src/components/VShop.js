import React from 'react';
import {connect,useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {buyLaptop, buyMobile, fetchUsers} from '../redux/actions';
import './style.css';
function VShop(props){
  let users = useSelector(state=>state.users.users);
  let numOfLaptops = useSelector(state=>state.laptops.numOfLaptops);
  let numOfMobiles = useSelector(state=>state.mobiles.numOfMobiles);
    return (
      <div>
        <h1 className="title">Welcome to VShop</h1>
        <div className="items">
        <div className="item">
          <p>Dell Inspiron Laptop</p>
          <p>Available: {numOfLaptops}</p>
          <button onClick={props.buyLaptop}>BUY</button>
        </div>
        <div className="item">
          <p>Redme Note 7</p>
          <p>Available: {numOfMobiles}</p>
          <button onClick={props.buyMobile}>BUY</button>
        </div>
        <div className="item">
          <p>Get users data</p>
          <p>Count: {users.length}</p>
          <button onClick={props.fetchUsers}>Call API</button>
        </div>
        </div>
      </div>
    )
}
const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators(
      {
        buyLaptop,
        buyMobile,
        fetchUsers
      },dispatch
    )
}
export default connect(null,mapDispatchToProps)(VShop)
