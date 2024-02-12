import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';  
import { uiAction } from './Store/uiSlice';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {

const tog=useSelector(state=>state.ui.cartVisible);
const dispatch=useDispatch();
const cart = useSelector((state) => state.cart);
console.log(cart)
const notification = useSelector((state) => state.ui.notification);

useEffect(() => {
  const sendCartData = async () => {
    dispatch(
      uiAction.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );
    const response = await fetch(
      'https://ecommerce-5629f-default-rtdb.firebaseio.com/cart.json',
      {
        method: 'PUT',
        body: JSON.stringify(cart),
      }
    );

    if (!response.ok) {
      throw new Error('Sending cart data failed.');
    }

    dispatch(
      uiAction.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!',
      })
    );
  };

  if (isInitial) {
    isInitial = false;
    return;
  }

  sendCartData().catch((error) => {
    dispatch(
      uiAction.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!',
      })
    );
  });
}, [cart, dispatch]);

  return (
    <>
    {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    <Layout>
      {tog && <Cart />}
      <Products />
    </Layout>
    </>
  );
}

export default App;
