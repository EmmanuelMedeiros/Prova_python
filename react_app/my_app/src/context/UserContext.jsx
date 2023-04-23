import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [user_data, set_user_data] = useState([{}]);

    return(
        <UserContext.Provider value={{user_data, set_user_data}}>{children}</UserContext.Provider>
    )
}