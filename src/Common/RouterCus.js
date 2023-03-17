import {
    createBrowserRouter
} from "react-router-dom";
import { Home } from "../Pages/Home";
import { Dashboard } from "../Pages/Dashboard";
import { FrontView } from "./FrontView";
import { ErrorPage } from "../Pages/ErrorPage";
import { AdminView } from "./AdminView";
import { Profile } from "../Pages/Profile";
import { News } from "../Pages/Crypto/News";
import { CryptoDetails } from "../Pages/Crypto/CryptoDetails";
import { Cryptocurrencies } from "../Pages/Crypto/Cryptocurrencies";
import { CryptoHome } from "../Pages/Crypto/CryptoHome";

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
        path: "",
        element: <AdminView />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "profile",
                element: <Profile />,
            },
            {
                path: "crypto",
                children: [
                    {
                        path: "Home",
                        element: <CryptoHome />,
                    },
                    {
                        path: "cryptocurrencies",
                        element: <Cryptocurrencies />,
                    },
                    {
                        path: ":coinId",
                        element: <CryptoDetails />,
                    },
                    {
                        path: "news",
                        element: <News />,
                    },
                ]
            },
            
           
        ]
    },
]);

export default router;