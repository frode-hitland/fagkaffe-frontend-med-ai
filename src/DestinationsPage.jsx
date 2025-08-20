function DestinationsPage() {
  const destinations = [
    { name: "Paris, France", description: "City of Light and Romance", image: "🗼" },
    { name: "Tokyo, Japan", description: "Modern metropolis meets tradition", image: "🏯" },
    { name: "New York, USA", description: "The city that never sleeps", image: "🗽" },
    { name: "Bali, Indonesia", description: "Tropical paradise", image: "🏝️" },
    { name: "Rome, Italy", description: "Eternal city of history", image: "🏛️" },
    { name: "Sydney, Australia", description: "Harbor city down under", image: "🌉" }
  ];

  return (
    <div className="page">
      <h2>🌍 Destinations</h2>
      <p>Explore amazing destinations around the world</p>
      <div className="destinations-grid">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <div className="destination-icon">{destination.image}</div>
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
            <button className="explore-btn">Explore</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DestinationsPage;
