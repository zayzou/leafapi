//Set up a global context with an isSidebarOpen state value (boolean)
// and two functions: one to close and the other to
// open the sidebar. Make all of these values available in the application.


import {createContext, useContext, useState} from "react";

//1 create a context
const AppContext = createContext();

//global Provider
export const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const open = () => setIsSidebarOpen(true);
    const close = () => setIsSidebarOpen(false);
    return (
        <AppContext.Provider value={{isSidebarOpen, open, close}}>
            {children}
        </AppContext.Provider>)
}

//custom hook
export const useAppContext = () => {
    return useContext(AppContext)
}