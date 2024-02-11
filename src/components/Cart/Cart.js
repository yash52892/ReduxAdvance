import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const items=useSelector(state=>state.cart.cartItems)
  const total=useSelector(state=>state.cart.total);
 const cartdispayitems=items.map((i)=> <CartItem item={{id:i.id, title: i.title, quantity: i.quantity, price: i.price }}
/>)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartdispayitems}
      </ul>
      <span>
      <h2>Total</h2>${total.toFixed(2)}
      </span>
    </Card>
  );
};

export default Cart;
