




import React, { useState } from "react";
import "./CarRentalForm.css";

const CarRentalForm = () => {
  const [formData, setFormData] = useState({
    pickupLocation: "",
    pickupDate: "",
    dropOffDate: "",
    carType: "",
    additionalRequests: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h1>Rent a Car</h1>
        <p>Fill out the details below to rent a car.</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Pickup Location</label>
            <input
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              placeholder="Enter pickup location"
              required
            />
          </div>
          <div>
            <label>Pickup Date</label>
            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Drop Off Date</label>
            <input
              type="date"
              name="dropOffDate"
              value={formData.dropOffDate}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Car Type</label>
            <select
              name="carType"
              value={formData.carType}
              onChange={handleChange}
              required
            >
              <option value="">Select car type</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Convertible">Convertible</option>
            </select>
          </div>
          <div>
            <label>Additional Requests</label>
            <textarea
              name="additionalRequests"
              value={formData.additionalRequests}
              onChange={handleChange}
              placeholder="Enter any additional requests"
              rows="3"
            />
          </div>
          <div>
            <button type="submit">Submit Request</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarRentalForm;




