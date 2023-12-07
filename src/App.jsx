import Navbar from "./components/Navbar.jsx";
import {Sidebar} from "./components/Sidebar.jsx";
import {Hero} from "./components/Hero.jsx";
import {Submenu} from "./components/Submenu.jsx";

const App = () => {
  return <main>
    <Navbar/>
    <Hero/>
    <Sidebar/>
    <Submenu/>
  </main>;
};
export default App;
