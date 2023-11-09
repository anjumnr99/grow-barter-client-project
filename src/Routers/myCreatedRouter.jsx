import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";

import AddServices from "../Pages/AddServices/AddServices";
import MySchedules from "../Pages/MySchedules/MySchedules";
import ManageServices from "../Pages/ManageServices/ManageServices";
import AllServices from "../Pages/AllServices/AllServices";
import ServiceDetails from "../Pages/AllServices/ServiceDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import MyCreatedError from "../Pages/MyCreatedError/MyCreatedError";
import UpdateProduct from "../Pages/Update/UpdateProduct";




const myCreatedRouter = createBrowserRouter([
    {
        path : '/',
        element: <MainLayout></MainLayout>,
         errorElement: <MyCreatedError></MyCreatedError>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                errorElement : <MyCreatedError></MyCreatedError>
                
                
            },
            {
                path:'/services',
                element:<AllServices></AllServices>,
                errorElement : <MyCreatedError></MyCreatedError>
                
            },
            {
                path:'/manage-services',
                element:<PrivateRoute>
                    <ManageServices></ManageServices>
                </PrivateRoute>,
                errorElement : <MyCreatedError></MyCreatedError>
                
            },
            {
                path:'/add-services',
                element:<PrivateRoute>
                    <AddServices></AddServices>
                    </PrivateRoute>,
                    errorElement : <MyCreatedError></MyCreatedError>
            },
            {
                path:'/my-schedules',
                element:<PrivateRoute>
                    <MySchedules></MySchedules>
                </PrivateRoute>,
                errorElement : <MyCreatedError></MyCreatedError>
            },
            {
                path:'/all-services',
                element:<AllServices></AllServices>,
                errorElement : <MyCreatedError></MyCreatedError>
            },
            {
                path:'/all-services/:id',
                element:<PrivateRoute>
                    <ServiceDetails></ServiceDetails>
                </PrivateRoute>,
                errorElement : <MyCreatedError></MyCreatedError>,
                loader : ({params}) => fetch(`https://grow-barter-server-project-gg7p782kd-anjus-projects-6a90d7b7.vercel.app/services/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>,
                errorElement : <MyCreatedError></MyCreatedError>
            },
            {
                path:'/register',
                element:<Register></Register>,
                errorElement : <MyCreatedError></MyCreatedError>
            },
            {
                
                    path:'/update/:id',
                    element: <PrivateRoute>
                        <UpdateProduct></UpdateProduct>
                    </PrivateRoute>,
                    // errorElement: <Error></Error>,
                    loader : ({params}) => fetch(`https://grow-barter-server-project-gg7p782kd-anjus-projects-6a90d7b7.vercel.app/services/${params.id}`)
                
            }

        ]
    }
])

export default myCreatedRouter;