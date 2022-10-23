import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Resister from "../../Pages/Login/Resister";
import News from "../../Pages/News/News";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: ()=> fetch('http://localhost:5000/news')
            },
            {
                path: "/home",
                element: <Home />,
                loader: ()=> fetch('http://localhost:5000/news')
            },
            {
                path: "/category/:id",
                element: <Category />,
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: "/news/:id",
                element: <News />,
                loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/resister",
                element: <Resister/>
            }
        ]
    }
])