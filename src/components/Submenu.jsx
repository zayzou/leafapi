import sublinks from "../data.jsx"
import {useAppContext} from "../context.jsx";
import {useRef} from "react";

export const Submenu = () => {
    const {pageId, setPageId} = useAppContext();
    const page = sublinks.find(page => page.pageId === pageId)
    const submenuContainer = useRef();
    const handleOnMouseLeave = (e) => {
        const submenu = submenuContainer.current;
        const {left, right, bottom} = submenu.getBoundingClientRect();
        const {clientX, clientY} = e;
        if (clientX > right - 1 || clientX < left - 1 || clientY > bottom - 1) {
            setPageId(null);
        }
    }
    return <div className={page ? "submenu show-submenu" : "submenu "}
                onMouseLeave={handleOnMouseLeave}
                ref={submenuContainer}
    >
        <h5>{page?.page}</h5>
        <div className="submenu-links"
             style={{gridTemplateColumns: page?.links?.length > 3 ? '1fr 1fr' : '1fr'}}>
            {page?.links?.map(({id, label, icon, url}) => {
                return <a key={id} href={url}>{icon}{label}</a>
            })}
        </div>
    </div>
}