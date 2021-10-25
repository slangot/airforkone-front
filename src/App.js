import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact>
          <Home />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
