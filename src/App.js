import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';
import AdminDashboard from './Admin/Admin Pages/AdminDashboard';
import LoginPage from './pages/LoginPage';
import { useEffect , useState , useLocation } from 'react';
import { jwtDecode } from 'jwt-decode';
import AdminNavbar from './Admin/Admin Components/AdminNavbar';
import AdminFooter from './Admin/Admin Components/AdminFooter';
import ScrollToTop from "./SrollToTop"

function App() {
  const [admin, setAdmin] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.admin) {
        setAdmin(true)
      } else {
        setAdmin(false)
      }
    }
  })
  
  return (
    <>
      <BrowserRouter basename='/shobhe-carpenter'>
        <ScrollToTop/>
        {!admin ? <Navbar/> : <AdminNavbar/>}
        <Routes>
          <Route exact path='/' element={admin ? <AdminDashboard/> : <HomePage/>} /> 
          <Route exact path='/services' element={admin ? <AdminDashboard/> :<ServicePage/>} /> 
          <Route exact path='/products' element={admin ? <AdminDashboard/> :<ProductPage/>} /> 
          <Route exact path='/contact' element={admin ? <AdminDashboard/> :<ContactPage/>} /> 
          <Route exact path='/login' element={admin ? <AdminDashboard/> :<LoginPage/>} /> 

          <Route exact path='/my-dashboard' element={admin ?<AdminDashboard/> : <HomePage/>} /> 
        </Routes>
        {!admin ? <Footer/> : <AdminFooter/>}
      </BrowserRouter>
    </>
  );
}

export default App;
