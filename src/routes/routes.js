import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Checkout from "../pages/Checkout/Checkout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Orders from "../pages/Orders/Orders";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)  
            },
            {
                path: '/orders',
                element:<Orders></Orders>
            }
            
        ]
    }
])