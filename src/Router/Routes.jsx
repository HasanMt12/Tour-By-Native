import Login from "../Pages/AccessPage/Login";
import Register from "../Pages/AccessPage/Register";
import Service from "../Pages/HomePage/Service";
import Blog from "../Pages/blog/Blog"
import Faq from "../Pages/faq/Faq"
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllService from "../Pages/All service/AllService";
import ServiceDetails from "../Pages/serviceDetails/ServiceDetails";
import ReviewPostPage from "../Pages/reviews/ReviewPostPage";
import MyReviews from "../Pages/myReview/MyReviews";
import Reviews from "../Pages/reviews/Reviews";
import UpdateReviews from "../Pages/myReview/UpdateReviews";
import AddService from "../Pages/Addservice/AddService";
import Private from "./privateRoutes/Private";
const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../Pages/HomePage/Home");



const router = createBrowserRouter([
    {
        path: '/',
      element: <Main></Main>, 
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
          path: '/service',
          element: <Service></Service>
        },
        {
          path: '/signUp',
          element: <Register></Register>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/faq',
          element: <Faq></Faq>
        },
        {
          path: '/allServices',
          element: <AllService></AllService>
        },
        {
          path: '/serviceDetail/:id',
          element: <Private><ServiceDetails></ServiceDetails></Private>,
          loader: ({params})=> fetch(`https://service-review-server-side-gray.vercel.app/allServices/${params.id}`)
        },
        {
          path: '/reviewsPost/:id',
          element: <Private><ReviewPostPage></ReviewPostPage></Private>,
          loader: ({params})=> fetch(`https://service-review-server-side-gray.vercel.app/allServices/${params.id}`)
        },
        {
          path: '/myReview',
          element: <MyReviews></MyReviews> 
        },
        {
          path:'/review',
          element: <Reviews></Reviews>,
        },
        {
          path:'/update/:id',
          element: <UpdateReviews></UpdateReviews>,
          loader: ({params})=> fetch(`https://service-review-server-side-gray.vercel.app/review/${params.id}`)
        },
        {
          path: '/addService',
          element:<AddService></AddService> 
        },
      ]
    }
]);
 export default router;