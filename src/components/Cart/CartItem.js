import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import {cartActions} from '../../Store/cartSlice';

const CartItem = (props) => {

  const { title, quantity, price, id } = props.item;
  const dispatch=useDispatch();

  const handleIncrease = () =>{
    dispatch(cartActions.increment(props.item));  
  }

  const handleDecrease = () =>{
    dispatch(cartActions.decrement(props.item));  
  }
  
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecrease}>-</button>
          <button onClick={handleIncrease}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
