import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Mainlayout from "../layout/Mainlayout";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path:"/",
                element: <Home></Home>
            }
        ]
    }
])

export default routes;