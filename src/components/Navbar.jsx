import {useAppContext} from "../context.jsx";
import {FaBars} from "react-icons/fa";
import {NavLinks} from "./NavLinks.jsx";

const Navbar = () => {
    const {openSidebar, setPageId} = useAppContext()

    const handleSubmenu = (e) => {
        if (!e.target.classList.contains('nav-link')) {
            setPageId(null);
        }
    }
    return <nav onMouseOver={handleSubmenu}>
        <div className="nav-center">
            <h3 className="logo">LeafAPI</h3>
            <button className="toggle-btn"
                    onClick={openSidebar}
            ><FaBars/></button>
            <NavLinks/>
        </div>
    </nav>
}

export default Navbar;