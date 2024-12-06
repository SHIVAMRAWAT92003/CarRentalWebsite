import React from "react";

const cars = [
  { name: "Tesla Model S", description: "Electric luxury sedan.", image: "tesla.jpg" },
  { name: "Toyota Corolla", description: "Reliable and fuel-efficient.", image: "corolla.jpg" },
  { name: "Ford Mustang", description: "Iconic sports car.", image: "mustang.jpg" },
];

const CarPage = () => {
  return (
    <div className="py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <h1 className="text-3xl font-semibold text-center sm:text-4xl font-serif mb-8">
          Available Cars
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cars.map((car) => (
            <div
              key={car.name}
              className="card text-center space-y-3 p-4 sm:py-16 bg-dark text-white rounded-lg"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h1 className="text-2xl font-bold">{car.name}</h1>
              <p>{car.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarPage;
