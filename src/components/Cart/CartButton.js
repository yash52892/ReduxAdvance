import { uiAction } from '../../Store/uiSlice';
import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
const CartButton = (props) => {
  const dispatch=useDispatch();
const handlecartvisibile = () =>{
 dispatch(uiAction.toggle());
}

  return (
    <button onClick={handlecartvisibile} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
