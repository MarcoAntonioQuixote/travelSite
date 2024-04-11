import React, { useContext } from 'react'
import DestinationCard from './DestinationCard.js'
import { AppContext } from '../store/AppContext.js';

function Gallary() {

  const {app} = useContext(AppContext); //app, setApp
  const {cities} = app;
  // const cities = app.cities;

  //where is cities?

  // useEffect(() => {
  //   console.log(cities);
  // },[cities])
  let show =[];

    //renders an array of components
  for (let x = 0; x < 3; x++) {
    show.push(<DestinationCard />)
  }

    //renders JSX
  let bigMessage = 
    <>
      <h2>Big Message</h2>
      <h6>Small Message</h6>
    </>

  let AnotherComponent = () => {
    return (
      <h1>Another... one bites the dust 😬</h1>
    )
  }

  const showCities = cities.map(city => <DestinationCard key={city.id} city={city}/>)

  return (
    <>    
      Gallary
      <div className='gallary'>
        {showCities}
        {/* {show} An array of 3 Destination Cards*/}
        {/* {bigMessage} */}
        {/* {anotherComponent} DON'T WRITE IT AS JSX (wrong)*/} 
        {/* <AnotherComponent /> */}
      </div>
    </>
  )
}

export default Gallary