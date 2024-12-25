import { createBrowserRouter, } from "react-router-dom";
import HomeLayOut from "./LayOuts/HomeLayOut";
import RootLayOut from "./LayOuts/RootLayOut";



const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayOut />,
        children: [
            {
                path: '/',
                element: <HomeLayOut />
            }
        ]


    },
])

export default router