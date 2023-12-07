import {FaTimes} from "react-icons/fa";
import sublinks from "../data.jsx";
import {useAppContext} from "../context.jsx";

export const Sidebar = () => {

    const {isSidebarOpen, closeSidebar} = useAppContext();
    return <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
        <div className="sidebar-container">
            <button className="close-btn" onClick={closeSidebar}>
                <FaTimes/>
            </button>
            <div className="sidebar-links">
                {sublinks.map(({links, page, pageId}) => {
                    return < article key={pageId}>
                        <h4>{page}</h4>
                        <div className="sidebar-sublinks">
                            {links.map(({url, icon, id, label}) => {
                                return <a key={id} href={url}>{icon}{label}</a>
                            })}
                        </div>
                    </article>
                })}
            </div>
        </div>

    </aside>
}