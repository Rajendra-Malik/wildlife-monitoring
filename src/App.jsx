import './App.css'
import MainHeader from './components/MainHeader'
import { Route, Routes } from 'react-router-dom'
import Home from "./components/Home"
import Login from "./components/pages/Login"
import slider1 from "../src/assets/carousel-1.jpg"
import slider2 from "../src/assets/carousel-2.jpg"
import slider3 from "../src/assets/carousel-3.jpg"
import Register from "./components/pages/Register"
import NotFound from "./components/NotFound"
import GoToTop from "./components/pages/GoToTop"
import AdminMainHeader from './components/admin/AdminMainHeader'
import AdDashboard from "./components/admin/Pages/AdDashboard/Index.jsx"
import Content from "./components/admin/Pages/Content/Index.jsx"
import UserMainHeader from "./components/user/UserMainHeader.jsx"
import User from './components/user/User.jsx'
import Map from './components/user/Map.jsx'


function App() {
  let slider = [
    slider1,
    slider2,
    slider3
  ]

  return (
    <>

      <Routes>
        <Route path="/" element={<MainHeader />} >
          <Route index element={<Home slider={slider} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<NotFound />} />
        </Route>

        <Route element={<AdminMainHeader />}>
          <Route path="/admin" element={<AdDashboard />} />
          <Route path="/content" element={<Content />} />
          {/* <Route path="/usercontent" element={ <AdminContent />} /> */}
        </Route>

        <Route element={<UserMainHeader />}>
          <Route path="/user" element={<User />} />
          <Route path="/map" element={<Map />} />
        </Route>

      </Routes >

      <GoToTop />
    </>
  )
}

export default App
