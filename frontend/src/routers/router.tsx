import { Router as RemixRouter } from "@remix-run/router";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/employer/home/home-page.tsx";
import ProfilePage from "../pages/employer/profile/profile-page.tsx";
import CompanyPage from "../pages/employer/company/company-page.tsx";
import HumanResourcesPage from "../pages/employer/human-resources/human-resources-page.tsx";
import TrainingPage from "../pages/employer/training/training-page.tsx";
import DeliveryPage from "../pages/employer/delivery/delivery-page.tsx";
import SupportPage from "../pages/employer/support/support-page.tsx";
import LoginPage from "../pages/login/login-page.tsx";
import App from "../pages/app/app.tsx";

export const router: RemixRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <App />,
                index: true
            },
            {
                element: <HomePage />,
                index: true
            },
            {
                path: "profile",
                element: <ProfilePage />
            },
            {
                path: "about-company",
                element: <CompanyPage />
            },
            {
                path: "human-resources",
                element: <HumanResourcesPage />
            },
            {
                path: "training",
                element: <TrainingPage />
            },
            {
                path: "delivery",
                element: <DeliveryPage />
            },
            {
                path: "support",
                element: <SupportPage />
            }
        ]
    },
    {
        path: "/login",
        element: <LoginPage />
    }
]);