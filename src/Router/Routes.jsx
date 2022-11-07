import Login from "../Pages/AccessPage/Login";
import Service from "../Pages/Service";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../Pages/Home");


const router = createBrowserRouter([
    {
        path: '/',
      element: <Main></Main>, 
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
        }
      ]
    }
]);
 export default router;