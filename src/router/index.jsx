import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import AuthGuard from "../components/AuthGuard";
import Profile from "../components/Profile";
import Dashboard from "../components/Dashboard";



const router = createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },

    {
        path:'/signup',
        element:<Signup/>
    },
    {
        path:'/profile',
        element:<AuthGuard/>,
        children:[
            {
                path:'/profile',
                element:<Profile/>
            },
            {
                path:'/profile/dasboard',
                element:<Dashboard/>
            }
        ]   

    }
]);

export default router;