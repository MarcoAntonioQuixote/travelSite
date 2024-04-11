const appReducer = (state,action) => {
    let newState = {...state};
    const {type,payload} = action;

    switch(type) {
        case 'loadedCities':
            newState.cities = payload;
            return newState;
        case 'nameChange':
            newState.user.name = payload;
            return newState;
        case 'getDrunk':
            newState.user.isDrunk = true;
            return newState;
        case 'buyTicket':
            //payload is the city name
            newState.user.ticketsTo.push(payload);
            return newState;
        case 'deleteCity':
            newState.cities = newState.cities.filter(c => c.name !== payload);
            return newState;
        default:
            console.log('No type matched ', type);
            return newState;
    }

}

export default appReducer;