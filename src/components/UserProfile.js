import React, { useContext } from 'react'
import { AppContext } from '../store/AppContext.js'

function UserProfile() {

    const {app, setApp} = useContext(AppContext);
    const {user, favoriteCity} = app;

    const changeName = () => {
        console.log(`${user.name} is changing their name to Cher`)
        setApp({type: 'nameChange', payload: 'Cher'})
    }

    const getDrunk = () => {
        setApp({type: 'getDrunk'})
    }

  return (
    <div>
        <h2> Welcome back! </h2>
        <h4> {user.name} is {user.age} years old </h4>
        <h4>Users favor city is { favoriteCity.name } </h4>

        <button onClick={changeName}>Change Name</button>
        <button onClick={getDrunk}>🍸</button>
    </div>
  )
}

export default UserProfile