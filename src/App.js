import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import AdminOrders from './screens/AdminOrders/AdminOrders';
import BuyProduct from './screens/BuyProduct/BuyProduct';
import Cart from './screens/Cart/Cart';
import DescriptionProduct from './screens/DescriptionProduct/DescriptionProduct';
import Home from './screens/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/description-product' exact>
          <DescriptionProduct />
        </Route>
        <Route path='/buy-product' exact>
          <BuyProduct />
        </Route>
        <Route path='/cart' exact>
          <Cart />
        </Route>
        <Route path='/admin' exact>
          <AdminOrders />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
