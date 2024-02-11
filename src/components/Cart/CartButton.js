import { uiAction } from '../../Store/uiSlice';
import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
const CartButton = (props) => {
  const dispatch=useDispatch();
  const noi=useSelector(state=>state.cart.numOfItem);
const handlecartvisibile = () =>{
 dispatch(uiAction.toggle());
}

  return (
    <button onClick={handlecartvisibile} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{noi}</span>
    </button>
  );
};

export default CartButton;
