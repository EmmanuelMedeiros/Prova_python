import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [user_data, set_user_data] = useState([{}]);

    return(
        <UserContext.Provider value={{user_data, set_user_data}}>{children}</UserContext.Provider>
    )
}

export const NoteContext = createContext();

export const NoteProvider = ({children}) => {

    const [note_data, set_note_data] = useState(0);

    return(
        <NoteContext.Provider value={{note_data, set_note_data}}>{children}</NoteContext.Provider>
    )
}