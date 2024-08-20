import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoriteProvider } from './FavoriteContext';
import Navbar from './Components/Navbar/navbar.jsx';
import Background from './Components/Background/background.jsx';
import Home from './Components/Home/home.jsx';
import Discover from './Components/Discover/discover.jsx';
import Favourites from './Components/Favourites/favourites.jsx';
import Login from './Components/Login/login.jsx';
import Signup from './Components/Sign-Up/signup.jsx';
import Cart from './Components/Cart/cart.jsx';
import { CartProvider, useCarts } from './CartContext.js'; // Import useCarts
import Checkout from './Components/Checkout/checkout.jsx';

function App() {
  return (
    <Router>
      <FavoriteProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </FavoriteProvider>
    </Router>
  );
}

function AppContent() {
  const { addToCarts } = useCarts(); // Use useCarts to access addToCarts

  return (
    <div className="App">
      <Background />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/discover' element={<Discover />} />
        <Route exact path='/favourites' element={<Favourites handleCartClick={addToCarts} />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/checkout' element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
