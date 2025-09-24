import { createContext } from "react";
import { doctors } from "../assets/assets"


export const AppContext = createContext(); // think of it like a global container that will hold your data.

const AppContextProvider = (props) => {
    const value = {
        doctors
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider;