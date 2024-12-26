import { createBrowserRouter, } from "react-router-dom";
import HomeLayOut from "./LayOuts/HomeLayOut";
import RootLayOut from "./LayOuts/RootLayOut";
import PrivetRout from "./Auth/Privet/Privetrought";
import LoginPage from "./Auth/Log/LoginPage";
import SignupPage from "./Auth/Log/SignupPage";
import Error from "./Components/Fixed/Error";



const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayOut />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <HomeLayOut />
            },
            {
                path: '/All-Crafts',
                element: <PrivetRout><div>All-Crafts coming soon</div></PrivetRout>
            },
            {
                path: '/Add-Craft',
                element: <PrivetRout><div>Add-Crafts coming soon</div></PrivetRout>
            },
        ]
    },
    {
        path: '/logIn',
        element: <LoginPage />
    },
    {
        path: '/signUp',
        element: <SignupPage />
    },
])

export default router