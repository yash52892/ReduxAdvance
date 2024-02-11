import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';

function App() {
const tog=useSelector(state=>state.ui.cartVisible);

  return (
    <Layout>
      {tog && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
