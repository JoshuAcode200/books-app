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

function App() {
  return (
    <Router>
      <FavoriteProvider>  {/* Wrap your components with FavoriteProvider */}
        <div className="App">
          <Background />
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/home' element={<Home/>} />
            <Route exact path='/discover' element={<Discover />} />
            <Route exact path='/favourites' element={<Favourites />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
          </Routes>
        </div>
      </FavoriteProvider>
    </Router>
  );
}

export default App;
