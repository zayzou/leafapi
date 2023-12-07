import sublinks from "../data.jsx";
import {useAppContext} from "../context.jsx";

export const NavLinks = () => {
    const {setPageId} = useAppContext();
    return (
        <div className="nav-links">
            {sublinks.map((item) => {
                return <button className="nav-link"
                               key={item.pageId}
                               onMouseEnter={() => setPageId(item.pageId)}
                >
                    {item.page}
                </button>
            })}
        </div>
    )
}