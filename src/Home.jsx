import {useAppContext} from "./context.jsx";
import {Sidebar} from "./components/Sidebar.jsx";
import {Submenu} from "./components/Submenu.jsx";
import {Hero} from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";

export const Home = () => {
    const {isSidebarOpen, open, close} = useAppContext()
    console.log(isSidebarOpen);
    console.log(open);
    console.log(close);


    return (
        <>
            <h4>this is home</h4>
            <Sidebar/>
            <Submenu/>
            <Hero/>
            <Navbar/>
        </>
    )
}