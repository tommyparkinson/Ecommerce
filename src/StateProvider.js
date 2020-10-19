import React, { createContext, useContext, useReducer } from "react";

//prepare data layer
export const StateContent = createContext();

//wrap the app and provide data layer to components in the app
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContent.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContent.Provider>
);

//pull info from data layer
export const useStateValue = () => useContext(StateContent);