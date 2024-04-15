import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Navbar.css";
import logo from '../assets/logo-1.png';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [currentLocation, setCurrentLocation] = useState(null);

  const handleClick = () => {
    logout();
  };

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            )
              .then((response) => response.json())
              .then((data) => {
                setCurrentLocation(data.locality);
              })
              .catch((error) => {
                console.error("Error fetching location:", error);
              });
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  return (
    <header>
      <div className="container">
        <div className="myBox">
          <ul>
            <li>🌟 Get 5% Off your first order, Promo: ORDER5</li>
            <li>
              <FaMapMarkerAlt /> Current location: {currentLocation}
            </li>
          </ul>
        </div>
        <div className="nav">
          <Link to="/">
            <img src={logo} alt="My image"/>
          </Link>
          {user && !user.isAdmin && (
            <nav>
              <ul className="link">
              
                <li><p><Link to="/products">Products</Link></p></li>
                <li><p><Link to="/cart">Cart</Link></p></li>
                <li><p><Link to="/restaurant">Restaurant</Link></p></li>
                {/* Add more links here as needed */}
              </ul>
            </nav>
          )}
          <div>
            {user && (
              <div>
                <span>{user.email}</span>
                <button className="logout-button" onClick={handleClick}>Logout</button>
              </div>
            )}
            {!user && (
              <ul className="link">
                <li><p><Link to="/login">Login</Link></p></li>
                <li><p><Link to="/signup">Signup</Link></p></li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
