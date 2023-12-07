import {createContext, useContext, useState} from "react";

//1 create a context
const AppContext = createContext();

//global Provider
export const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [pageId, setPageId] = useState(null);
    const openSidebar = () => setIsSidebarOpen(true);
    const closeSidebar = () => setIsSidebarOpen(false);
    return (
        <AppContext.Provider value={{isSidebarOpen, openSidebar, closeSidebar, setPageId, pageId}}>
            {children}
        </AppContext.Provider>)
}

//custom hook
export const useAppContext = () => {
    return useContext(AppContext)
}