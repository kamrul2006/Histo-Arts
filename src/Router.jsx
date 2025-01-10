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
import CraftDetails from "./Pages/CraftDetails";
import AboutUs from "./Components/Used/AboutUs";
import ContactUs from "./Pages/ContactUs";



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
                loader: () => fetch('https://historical-artifacts-tracher-server.vercel.app/allcraft')
            },
            {
                path: '/Add-Craft',
                element: <PrivetRout><AddCraft /></PrivetRout>
            },
            {
                path: '/All-Crafts/details/:id',
                element: <PrivetRout><CraftDetails /></PrivetRout>,
                loader: ({ params }) => fetch(`https://historical-artifacts-tracher-server.vercel.app/allcraft/${params.id}`)
            },
            {
                path: '/abutUs',
                element: <AboutUs/>
            },
            {
                path: '/contactUs',
                element: <ContactUs/>
            }
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
                element: <PrivetRout><MyInfo /></PrivetRout>
            },
            {
                path: '/MyProfile/myAdded',
                element: <PrivetRout><Myadded /></PrivetRout>,
                loader: () => fetch('https://historical-artifacts-tracher-server.vercel.app/allcraft')
            },
            {
                path: '/MyProfile/myLiked',
                element: <PrivetRout><MyLiked /></PrivetRout>,
                loader: () => fetch('https://historical-artifacts-tracher-server.vercel.app/liked')
            },
        ]
    },
])

export default router