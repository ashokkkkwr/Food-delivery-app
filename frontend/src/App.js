import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/Home'
import Home1 from './pages/Home1'
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const {user}=useAuthContext()
  console.log("context user", user);

  return (

    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className='pages'>
        <Routes>
          <Route
          path="/"
          element={(user && user.isAdmin) ? <Home />:<Navigate to="/home1"/>}
          />
          <Route
          path="/home1"
          element={<Home1 />}/>
          <Route
          path="/login"
          element={!user ? <Login/>:<Navigate to="/"/>}
          />
          <Route
          path="/signup"
          element={!user ? <Signup />:<Navigate to="/"/>}
          />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
