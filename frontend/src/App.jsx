import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import Home from './pages/Home/Home'
import Layout from './components/layouts/Layout'
import Login from './pages/Auth/Login'
import StatusProduct from './pages/Status/StatusProduct'
import Contact from './pages/Contact/Contact'
import Register from './pages/Auth/Register'
import View from './pages/Product/View'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        {/* <Route index element={<Home />} /> */}
        <Route path='status' element={<StatusProduct />} />
        <Route path='contact' element={<Contact />} />
        <Route path=':slug' element={<View />} />
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
    </>
  ))
  return (
    <div className="pt-5 bg-primary">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
