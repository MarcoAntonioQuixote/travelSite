
import { useEffect, useReducer, useState } from 'react';
import './App.css';
import MyRouter from './components/MyRouter.js';
import NavBar from './components/NavBar.js';
import axios from 'axios';
import { AppContext, initialState } from './store/AppContext.js';
import appReducer from './store/AppReducer.js';


function App() {

    const [app,setApp] = useReducer(appReducer,initialState);

    // const [cities,setCities] = useState([])

    // const [on, setOn] = useState(false)

    //This will re-run anytime the value of cities changes, which is why it shows [], and then [{},{},...city objects]
    // useEffect(() => {
    //     console.log(cities);
    // },[cities])


    useEffect(() => {
        let url = 'https://660caf1b3a0766e85dbe74dd.mockapi.io'
        const getDestinations = async () => {
            let res = await axios.get(`${url}/destinations`)
            setApp({type: 'loadedCities', payload: res.data})
        }
        getDestinations()
    }, [])

    // const handleClick = () => setOn(!on);



    return (
    <AppContext.Provider value={{app,setApp}} >
        <div className="App-header">
            <NavBar />
            Travel App


            <MyRouter  />
            {/* {on ? <MyRouter /> : <h2>Cool</h2>} */}
            {/* {on && <MyRouter />} */}
            
            
            {/* <button onClick={handleClick}>Turn On</button> */}
        </div>
    </AppContext.Provider>
    );
}

export default App;
