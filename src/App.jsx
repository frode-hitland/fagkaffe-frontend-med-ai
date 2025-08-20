import { useState } from 'react';
import HomePage from './HomePage';
import DestinationsPage from './DestinationsPage';
import BookingPage from './BookingPage';
import HelpPage from './HelpPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage />;
      case 'destinations':
        return <DestinationsPage />;
      case 'booking':
        return <BookingPage />;
      case 'help':
        return <HelpPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>✈️ Travel Planner</h1>
        <nav className="navigation">
          <button 
            className={currentPage === 'home' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setCurrentPage('home')}
          >
            🏠 Home
          </button>
          <button 
            className={currentPage === 'destinations' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setCurrentPage('destinations')}
          >
            🌍 Destinations
          </button>
          <button 
            className={currentPage === 'booking' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setCurrentPage('booking')}
          >
            📅 Booking
          </button>
          <button 
            className={currentPage === 'help' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setCurrentPage('help')}
          >
            ❓ Help
          </button>
        </nav>
      </header>
      <main className="app-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
