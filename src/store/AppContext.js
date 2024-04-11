import { createContext } from "react";

export const AppContext = createContext(null);


export const initialState = {
    cities: [],
    user: {
        name: 'Mark Anthony Gutierrez',
        age: 33,
        isBeautiful: true,
        validDiscount: false,
        isDrunk: false,
        ticketsTo: ['Port Israel']
    },
    favoriteCity: {
        name: 'Chiang Mai'
    }      
}
