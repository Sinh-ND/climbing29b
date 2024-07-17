import { useEffect, useState } from 'react';
import moment from 'moment';
import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import Home from './components/Home';
import HomeLink from './components/Homelink';
import Types from './components/Types';
import History from './components/History';
import Techniques from './components/Techniques';
import Shelter from './components/Shelter';
import Hazards from './components/Hazards';
import Records from './components/Records';
import Organizations from './components/Organizations';
import Developments from './components/Developments';
import Guidelines from './components/Guidelines';
import Contact from './components/Contact';
import SportClimbing from './components/SportClimbing';
import Bouldering from './components/Bouldering';
import IceClimbing from './components/IceClimbing';
import AlpineClimbing from './components/AlpineClimbing';
import ViaFerrata from './components/ViaFerrata';
import FreeSoloClimbing from './components/FreeSoloClimbing';
import MixedClimbing from './components/MixedClimbing';
import TraditionalClimbing from './components/TraditionalClimbing';
import FeedbackButton from './components/FeedbackButton';
import FeedbackForm from './components/FeedbackForm';
import Videos from './components/Videos';
import SuccessStories from './components/SuccessStories';
import Pictures from './components/Pictures';

import ho36 from '../src/assets/images/logo.png';

function App() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [currentTime, setCurrentTime] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'));
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(prevCount => prevCount + 1);
    }, 10000);

    const timeInterval = setInterval(() => {
      setCurrentTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, 1000);

    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
      },
      error => {
        console.error('Error getting geolocation:', error);
      }
    );

    return () => {
      clearInterval(interval);
      clearInterval(timeInterval);
    };
  }, []);

  const handleNavLinkClick = (path) => {
    navigate(path);
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');

    if (navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header mb-5">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img src={ho36} className="App-logo" alt="logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <FontAwesomeIcon icon={faHome} size="1x" />
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdownAbout" role="button" data-bs-toggle="dropdown" aria-expanded="false">Mountaineering</Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownAbout">
                    <li><Link to="/about/history" className="dropdown-item" onClick={() => handleNavLinkClick('/about/history')}>History</Link></li>
                    <li><Link to="/about/types" className="dropdown-item" onClick={() => handleNavLinkClick('/about/types')}>Types</Link></li>
                    <li><Link to="/about/techniques" className="dropdown-item" onClick={() => handleNavLinkClick('/about/techniques')}>Techniques</Link></li>
                    <li><Link to="/about/sheltering" className="dropdown-item" onClick={() => handleNavLinkClick('/about/sheltering')}>Sheltering</Link></li>
                    <li><Link to="/about/hazards" className="dropdown-item" onClick={() => handleNavLinkClick('/about/hazards')}>Hazards</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/records" className="nav-link" onClick={() => handleNavLinkClick('/records')}>Records</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdownOrganizations" role="button" data-bs-toggle="dropdown" aria-expanded="false">Organizations</Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownOrganizations">
                    <li><Link to="/organizations/list" className="dropdown-item" onClick={() => handleNavLinkClick('/organizations/list')}>List of Organizations</Link></li>
                    <li><Link to="/organizations/success" className="dropdown-item" onClick={() => handleNavLinkClick('/organizations/success')}>Success Stories</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdownLibrary" role="button" data-bs-toggle="dropdown" aria-expanded="false">Library</Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownLibrary">
                    <li><Link to="/gallery/videos" className="dropdown-item" onClick={() => handleNavLinkClick('/gallery/videos')}>Videos</Link></li>
                    <li><Link to="/gallery/pictures" className="dropdown-item" onClick={() => handleNavLinkClick('/gallery/pictures')}>Pictures</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/developments" className="nav-link" onClick={() => handleNavLinkClick('/developments')}>Develop</Link>
                </li>
                <li className="nav-item">
                  <Link to="/guidelines" className="nav-link" onClick={() => handleNavLinkClick('/guidelines')}>Guide</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link" onClick={() => handleNavLinkClick('/contact')}>Contact</Link>
                </li>
              </ul>
            </div>
            <h2><span className="navbar-text">
              🧑‍💻
            </span></h2>{visitorCount}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <section className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="homelink" element={<HomeLink />} />
          <Route path="/about/types" element={<Types />} />
          <Route path="sportclimbing" element={<SportClimbing />} />
          <Route path="bouldering" element={<Bouldering />} />
          <Route path="iceclimbing" element={<IceClimbing />} />
          <Route path="alpineclimbing" element={<AlpineClimbing />} />
          <Route path="viaferrata" element={<ViaFerrata />} />
          <Route path="freesoloclimbing" element={<FreeSoloClimbing />} />
          <Route path="mixedclimbing" element={<MixedClimbing />} />
          <Route path="traditionalclimbing" element={<TraditionalClimbing />} />
          <Route path='/about/history' element={<History />} />
          <Route path='/about/techniques' element={<Techniques />} />
          <Route path='/about/sheltering' element={<Shelter />} />
          <Route path='/about/hazards' element={<Hazards />} />
          <Route path="/records" element={<Records />} />
          <Route path="/organizations/list" element={<Organizations />} />
          <Route path="/organizations/success" element={<SuccessStories />} />
          <Route path="/gallery/videos" element={<Videos />} />
          <Route path="/gallery/pictures" element={<Pictures />} />
          <Route path="/developments" element={<Developments />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<FeedbackForm />} />
        </Routes>
        <Outlet />
        <div className="text-center">
          <FeedbackButton />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark text-white mt-5 py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">About Us</h5>
              <p>
                We are dedicated to providing comprehensive and accurate information about mountaineering. Our goal is to inspire and educate mountaineers of all levels.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Contact Information</h5>
              <ul className="list-unstyled mb-0">
                <li><Link to="/contact" className="text-white">Contact Us</Link></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Follow Us</h5>
              <ul className="list-unstyled d-flex">
                <li><a href="https://www.facebook.com" className="text-white me-2"><FontAwesomeIcon icon={faFacebook} size="2x" /></a></li>
                <li><a href="https://www.instagram.com" className="text-white me-2"><FontAwesomeIcon icon={faInstagram} size="2x" /></a></li>
                <li><a href="https://www.tiktok.com" className="text-white me-2"><FontAwesomeIcon icon={faTiktok} size="2x" /></a></li>
                <li><a href="https://www.youtube.com" className="text-white me-2"><FontAwesomeIcon icon={faYoutube} size="2x" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>Current time: {currentTime}</p>
          {currentLocation && (
            <p>
              Your location: Latitude {currentLocation.latitude}, Longitude {currentLocation.longitude}
            </p>
          )}
        </div>
      </footer>
    </div>
  );
}

export default App;
