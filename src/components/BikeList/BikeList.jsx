import React from "react";

const BikeList = () => {
  const bikes = [
    { name: "Bike 1", description: "High-speed bike with top-notch features.", image: "bike1.jpg" },
    { name: "Bike 2", description: "Fuel-efficient bike for daily commute.", image: "bike2.jpg" },
    // Add more bike data as needed
  ];

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-semibold text-center mb-8">Our Bike Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bikes.map((bike, index) => (
          <div
            key={index}
            className="card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl"
          >
            <img src={bike.image} alt={bike.name} className="w-full h-40 object-cover rounded" />
            <h2 className="text-xl font-bold mt-4">{bike.name}</h2>
            <p className="mt-2">{bike.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BikeList;
