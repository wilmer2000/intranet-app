import {Router as RemixRouter} from "@remix-run/router";
import {createBrowserRouter} from "react-router-dom";
import Root from "../pages/root/root.tsx";
import HomePage from "../pages/employer/home/home-page.tsx";
import ProfilePage from "../pages/employer/profile/profile-page.tsx";
import OktanaPage from "../pages/employer/oktana/oktana-page.tsx";
import HumanResourcesPage from "../pages/employer/human-resources/human-resources-page.tsx";
import TrainingPage from "../pages/employer/training/training-page.tsx";
import DeliveryPage from "../pages/employer/delivery/delivery-page.tsx";
import SupportPage from "../pages/employer/support/support-page.tsx";
import LoginPage from "../pages/login/login-page.tsx";

export const router: RemixRouter = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                element: <HomePage/>,
                index: true
            },
            {
                path: 'profile',
                element: <ProfilePage/>
            },
            {
                path: 'about-oktana',
                element: <OktanaPage/>
            },
            {
                path: 'human-resources',
                element: <HumanResourcesPage/>
            },
            {
                path: 'training',
                element: <TrainingPage/>
            },
            {
                path: 'delivery',
                element: <DeliveryPage/>
            },
            {
                path: 'support',
                element: <SupportPage/>
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage/>
    },
]);