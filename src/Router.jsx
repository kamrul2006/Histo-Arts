import { createBrowserRouter, } from "react-router-dom";
import HomeLayOut from "./LayOuts/HomeLayOut";
import RootLayOut from "./LayOuts/RootLayOut";
import PrivetRout from "./Auth/Privet/Privetrought";
import LoginPage from "./Auth/Log/LoginPage";
import SignupPage from "./Auth/Log/SignupPage";
import Error from "./Components/Fixed/Error";
import MyProfile from "./LayOuts/MyProfileLayout";
import Myadded from "./Pages/Myadded";
import MyLiked from "./Pages/MyLiked";
import AALLCRAFT from "./Pages/AALLCRAFT";
import MyInfo from "./Pages/MyInfo";
import AddCraft from "./Pages/AddCrafts";



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
                element: <PrivetRout><AALLCRAFT /></PrivetRout>,
                loader: () => fetch('http://localhost:5000/allcraft')
            },
            {
                path: '/Add-Craft',
                element: <PrivetRout><AddCraft/></PrivetRout>
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
    {
        path: '/MyProfile',
        element: <PrivetRout><MyProfile /></PrivetRout>,
        errorElement: <Error />,
        children: [
            {
                path: '/MyProfile',
                element: <PrivetRout><MyInfo/></PrivetRout>
            },
            {
                path: '/MyProfile/myAdded',
                element: <PrivetRout><Myadded /></PrivetRout>,
                loader: () => fetch('http://localhost:5000/allcraft')
            },
            {
                path: '/MyProfile/myLiked',
                element: <PrivetRout><MyLiked /></PrivetRout>
            },
        ]
    },
])

export default router