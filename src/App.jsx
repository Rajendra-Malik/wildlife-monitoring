import './App.css'
import MainHeader from './components/MainHeader'
import { Route, Routes } from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Information from "./components/Information"
import Contact from "./components/Contact"
import Login from "./components/pages/Login"
import slider1 from "../src/assets/carousel-1.jpg"
import slider2 from "../src/assets/carousel-2.jpg"
import slider3 from "../src/assets/carousel-3.jpg"
import Register from "./components/pages/Register"
import Dashboard from "./components/pages/Dashboard"
import NotFound from "./components/NotFound"
import GoToTop from "./components/pages/GoToTop"
import AdminMainHeader from './components/admin/AdminMainHeader'
import AdDashboard from "./components/admin/Pages/AdDashboard"


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
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/info" element={<Information />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<NotFound />} />
        </Route>

        <Route  element={<AdminMainHeader />}>
          <Route path="/admin" element={<AdDashboard />} />
          {/* <Route path="/usercontent" element={ <AdminContent />} /> */}
      </Route>
    </Routes >



      <GoToTop />
    </>
  )
}

export default App
