import { createBrowserRouter } from "react-router-dom";
import { RequireAuth } from "../context/Auth/RequireAuth";
import HomePrivete from "../pages/HomePrivete";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Reset from "../pages/Reset";

export const AppRouter = createBrowserRouter ([   
    { 
        path:"/", 
        element: <RequireAuth><HomePrivete/></RequireAuth>
    },
    {   
        path:"/login",
        element: (<Login/>)
    },
    {   
        path:"/registration",
        element: (<Registration/>)
    },
    {   
        path:"/reset",
        element: (<Reset/>)
    },
]) 