import Login from "../Pages/AccessPage/Login";
import Register from "../Pages/AccessPage/Register";
import Service from "../Pages/Service";
import Blog from "../Pages/blog/Blog"
import Faq from "../Pages/faq/Faq"
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../Pages/Home");


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
        }
      ]
    }
]);
 export default router;