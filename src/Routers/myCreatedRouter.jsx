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


const myCreatedRouter = createBrowserRouter([
    {
        path : '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/manage-services',
                element:<ManageServices></ManageServices>
            },
            {
                path:'/add-services',
                element:<AddServices></AddServices>
            },
            {
                path:'/my-schedules',
                element:<MySchedules></MySchedules>
            },
            {
                path:'/all-services',
                element:<AllServices></AllServices>
            },
            {
                path:'/all-services/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }

        ]
    }
])

export default myCreatedRouter;