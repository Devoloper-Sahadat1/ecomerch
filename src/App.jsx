
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Main from './Layout/Main'
import Home from './componets/Home/Home';
import Lognin from './componets/Lognin/Lognin';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/Lognin",
        element:<Lognin></Lognin>
      },
    ],
  },
]);
function App() {

  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
