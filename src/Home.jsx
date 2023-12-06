import {useAppContext} from "./context.jsx";

export const Home = () => {
    const {isSidebarOpen, open, close} = useAppContext()
    console.log(isSidebarOpen);
    console.log(open);
    console.log(close);

    return (
        <h4>this is home</h4>
    )
}