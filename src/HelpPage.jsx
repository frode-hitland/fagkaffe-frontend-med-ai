function HelpPage() {
  const randomTrips = [
    {
      destination: "Iceland",
      activity: "Northern Lights viewing",
      hotel: "Reykjavik Premium Hotel",
      description: "Experience the magical Aurora Borealis in Iceland's pristine wilderness"
    },
    {
      destination: "Thailand",
      activity: "Temple hopping and street food tours",
      hotel: "Bangkok Grand Palace Hotel",
      description: "Immerse yourself in Thai culture with ancient temples and delicious cuisine"
    },
    {
      destination: "Peru",
      activity: "Machu Picchu hiking adventure",
      hotel: "Sacred Valley Resort",
      description: "Trek through the ancient Inca trail to the mystical Machu Picchu"
    },
    {
      destination: "Greece",
      activity: "Island hopping in Santorini",
      hotel: "Aegean Sea Villa",
      description: "Discover stunning sunsets and whitewashed villages in the Greek islands"
    },
    {
      destination: "Morocco",
      activity: "Sahara Desert camel trekking",
      hotel: "Marrakech Riad Traditional",
      description: "Adventure through golden sand dunes and experience Berber culture"
    }
  ];

  const getRandomTrip = () => {
    return randomTrips[Math.floor(Math.random() * randomTrips.length)];
  };

  const suggestedTrip = getRandomTrip();

  return (
    <div className="page">
      <h2>❓ Help & Suggestions</h2>
      <p>Need help planning your trip? We're here to assist!</p>
      
      <div className="help-section">
        <h3>🎲 Random Trip Suggestion</h3>
        <div className="suggestion-card">
          <h4>✈️ {suggestedTrip.destination}</h4>
          <p><strong>🎯 Activity:</strong> {suggestedTrip.activity}</p>
          <p><strong>🏨 Recommended Hotel:</strong> {suggestedTrip.hotel}</p>
          <p><strong>📝 Description:</strong> {suggestedTrip.description}</p>
          <button className="suggestion-btn">Get Another Suggestion</button>
        </div>
      </div>
      
      <div className="faq-section">
        <h3>❓ Frequently Asked Questions</h3>
        <div className="faq-item">
          <h4>How do I cancel my trip?</h4>
          <p>Trip cancellations can be processed through your booking confirmation email or by contacting our support team.</p>
        </div>
        <div className="faq-item">
          <h4>What's included in the hotel suggestions?</h4>
          <p>Our hotel recommendations include amenities, location ratings, and activity suggestions based on your destination.</p>
        </div>
        <div className="faq-item">
          <h4>How do I modify my existing booking?</h4>
          <p>Visit the Booking page to view and modify your current reservations.</p>
        </div>
      </div>
    </div>
  );
}

export default HelpPage;
