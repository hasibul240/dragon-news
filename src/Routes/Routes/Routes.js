import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Resister from "../../Pages/Login/Resister";
import News from "../../Pages/News/News";
import Profile from "../../Pages/Others/Profile/Profile";
import Terms from "../../Pages/Others/Terms/Terms";
import PrivateRoute from "../Private/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('https://dragon-news-server-hasibul240.vercel.app/news')
            },
            {
                path: "/home",
                element: <Home />,
                loader: () => fetch('https://dragon-news-server-hasibul240.vercel.app/news')
            },
            {
                path: "/category/:id",
                element: <Category />,
                loader: ({ params }) => fetch(`https://dragon-news-server-hasibul240.vercel.app/category/${params.id}`)
            },
            {
                path: "/news/:id",
                element: <PrivateRoute><News /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://dragon-news-server-hasibul240.vercel.app/news/${params.id}`)
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/resister",
                element: <Resister />
            },
            {
                path: "/terms",
                element: <Terms />
            }
            ,
            {
                path: "profile",
                element: <PrivateRoute><Profile /></PrivateRoute>
            }
        ]
    }
])