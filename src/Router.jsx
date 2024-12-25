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
            },
            {
                path: '/All-Crafts',
                element: <div>All-Crafts coming soon</div>
            },
            {
                path: '/Add-Craft',
                element: <div>Add-Crafts coming soon</div>
            },
        ]
    },
    {
        path: '/logIn',
        element: <div>login coming soon</div>
    },
    {
        path: '/signUp',
        element: <div>SignUp coming soon</div>
    },
])

export default router