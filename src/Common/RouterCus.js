import {
    createBrowserRouter
} from "react-router-dom";
import { Home } from "../Pages/Home";
import { Dashboard } from "../Pages/Dashboard";
import { FrontView } from "./FrontView";
import { ErrorPage } from "../Pages/ErrorPage";
import { AdminView } from "./AdminView";
import { Profile } from "../Pages/Profile";
import { News } from "../Pages/News";
import { CryptoDetails } from "../Pages/CryptoDetails";
import { Cryptocurrencies } from "../Pages/Cryptocurrencies";
import { Exchanges } from "../Pages/Exchanges";

const router = createBrowserRouter([
    {
        path: "/",
        element: <FrontView />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Home />,
            },
        ]
    },
    {
        path: "dashboard/",
        element: <AdminView />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Dashboard />,
            },
            {
                path: "profile",
                element: <Profile />,
            },
            {
                path: "exchanges",
                element: <Exchanges />,
            },
            {
                path: "cryptocurrencies",
                element: <Cryptocurrencies />,
            },
            {
                path: "crypto/:coinId",
                element: <CryptoDetails />,
            },
            {
                path: "news",
                element: <News />,
            },
        ]
    },
]);

export default router;