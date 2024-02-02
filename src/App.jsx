import './App.css'
import Dashboard from './components/DashBoard'
import Navbar from './components/Navbar'
import CssBaseline from "@mui/material/CssBaseline"
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <CssBaseline/>
    <Navbar/>
    <Dashboard/>
    <Main/>
    <Footer/>
    </>
  )
}

export default App
