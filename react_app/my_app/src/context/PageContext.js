import { createContext, useReducer } from "react";

const screens = ["not_logged", "logged"]

const my_screen = {
    
    actual_screen: screens[0]
}

const pageReducer = (state, action) => {

    switch(action.type) {
        case "logged":
        return {
            ...state, actual_screen: screens[1]
        }
    }
}

export const PageContext = createContext();

export const PageProvider = ({children}) => {
    const value = useReducer(pageReducer, my_screen);

    return <PageContext.Provider value = {value}>{children}</PageContext.Provider>
}