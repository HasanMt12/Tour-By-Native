import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <div className='w-11/12 mx-auto ' >
     
         <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
