import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Services from "../Pages/Services/Services";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddServices from "../Pages/AddServices/AddServices";
import MySchedules from "../Pages/MySchedules/MySchedules";
import ManageServices from "../Pages/ManageServices/ManageServices";
import AllServices from "../Pages/AllServices/AllServices";
import ServiceDetails from "../Pages/AllServices/ServiceDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Error from "../Pages/Error/Error";



const myCreatedRouter = createBrowserRouter([
    {
        path : '/',
        element: <MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                errorElement:<Error></Error>
                
            },
            {
                path:'/services',
                element:<AllServices></AllServices>,
                errorElement:<Error></Error>
            },
            {
                path:'/manage-services',
                element:<PrivateRoute>
                    <ManageServices></ManageServices>
                </PrivateRoute>,
                errorElement:<Error></Error>
            },
            {
                path:'/add-services',
                element:<PrivateRoute>
                    <AddServices></AddServices>
                    </PrivateRoute>,
                    errorElement:<Error></Error>
            },
            {
                path:'/my-schedules',
                element:<PrivateRoute>
                    <MySchedules></MySchedules>
                </PrivateRoute>,
                errorElement:<Error></Error>
            },
            {
                path:'/all-services',
                element:<AllServices></AllServices>,
                errorElement:<Error></Error>
            },
            {
                path:'/all-services/:id',
                element:<PrivateRoute>
                    <ServiceDetails></ServiceDetails>
                </PrivateRoute>,
                errorElement:<Error></Error>,
                loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                  
            },
            {
                path:'/login',
                element:<Login></Login>,
                errorElement:<Error></Error>
            },
            {
                path:'/register',
                element:<Register></Register>,
                errorElement:<Error></Error>
            }

        ]
    }
])

export default myCreatedRouter;