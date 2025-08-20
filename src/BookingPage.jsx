function BookingPage() {
  return (
    <div className="page">
      <h2>📅 Booking</h2>
      <p>Book your upcoming trips and manage reservations</p>
      
      <div className="booking-section">
        <h3>Plan Your Trip</h3>
        <form className="booking-form">
          <div className="form-group">
            <label>Destination:</label>
            <select>
              <option>Select a destination</option>
              <option>Paris, France</option>
              <option>Tokyo, Japan</option>
              <option>New York, USA</option>
              <option>Bali, Indonesia</option>
              <option>Rome, Italy</option>
              <option>Sydney, Australia</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Check-in Date:</label>
            <input type="date" />
          </div>
          
          <div className="form-group">
            <label>Check-out Date:</label>
            <input type="date" />
          </div>
          
          <div className="form-group">
            <label>Number of Guests:</label>
            <input type="number" min="1" max="10" defaultValue="2" />
          </div>
          
          <button type="submit" className="book-btn">Search Available Options</button>
        </form>
      </div>
      
      <div className="current-bookings">
        <h3>Current Bookings</h3>
        <p>No active bookings found.</p>
      </div>
    </div>
  );
}

export default BookingPage;
