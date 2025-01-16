import React from 'react';
import './lesserKnown.css';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom'; // Import navigate from react-router-dom

export default function LesserKnown() {
  const { data, loading, error } = useFetch('http://localhost:7000/api/lesserknown');
  const navigate = useNavigate(); // Initialize navigate function

  // Handle loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Handle case where there is no data
  if (!data || data.length === 0) {
    return <div>No data available.</div>;
  }

  return (
    <div className='lesser-known'>
      <h1>LESSER KNOWN WONDERS IN INDIA</h1>      
      <div className='lesser-known-cards'>
        {data.map((place, index) => (
          <div
            key={index}
            className='lesser-known-card'
            onClick={() => navigate(`/places/${place.name}`)} // Navigate to place details
          >
            <div className='lesser-known-card-img'>
              <img src={place.img} alt={place.name} />
            </div>
            <div className='lesser-known-card-info'>
              <h3>{place.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
