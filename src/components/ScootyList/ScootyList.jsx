import React from "react";

const ScootyList = () => {
  const scooties = [
    { name: "Scooty 1", description: "Modern and stylish scooty.", image: "scooty1.jpg" },
    { name: "Scooty 2", description: "Eco-friendly and efficient scooty.", image: "scooty2.jpg" },
    
  ];

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-semibold text-center mb-8">Our Scooty Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {scooties.map((scooty, index) => (
          <div
            key={index}
            className="card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl"
          >
            <img src={scooty.image} alt={scooty.name} className="w-full h-40 object-cover rounded" />
            <h2 className="text-xl font-bold mt-4">{scooty.name}</h2>
            <p className="mt-2">{scooty.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScootyList;
