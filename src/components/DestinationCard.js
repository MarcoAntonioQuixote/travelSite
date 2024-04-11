import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../store/AppContext.js';

function DestinationCard({city}) {

  // const {setCities} = useContext(AppContext)
  const {app, setApp} = useContext(AppContext);

  const ticketsTo = app.user.ticketsTo; //

  let hasTickets = ticketsTo.includes(city.name);
  
  const [like, setLike] = useState(false);

  if (city.name === 'Fort Adeline') return null;

  const deleteCity = () => {
    setApp({type: 'deleteCity', payload: city.name})
    // setCities(prev => {
    //   let newCities = prev.filter(c => c.id !== city.id);
    //   //this did not delete it on the database

    //   //you still hvae to run axios.delete(url/id)
    //   return newCities;
    // })
  }

  const buyTicket = () => {
    setApp({type: 'buyTicket', payload: city.name})
  }

  return (
    <div className={`dCard ${like ? 'favorite' : null}`}>
      DestinationCard
      <img className='pic' src={city.image} alt="" />
      <h6>{city.name}</h6>
      {/* <button onClick={() => setLike(!like)}>Fav</button> */}
      <button onClick={deleteCity}>Delete City</button>
      { hasTickets ? 
        <button>Reserve Your Seat</button> : 
        <button onClick={buyTicket}>buy a ✈️</button>
      }
    </div>
  )
}

export default DestinationCard