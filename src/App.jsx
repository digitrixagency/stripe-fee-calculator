import './App.css'
import Dashboard from './components/DashBoard'
import Navbar from './components/Navbar'
import CssBaseline from "@mui/material/CssBaseline"
import Main from './components/Main'
import Footer from './components/Footer'
import Container from "@mui/material/Container";

function App() {
  return (
    <>
    <CssBaseline/>
    <Container maxWidth={'xl'} disableGutters>
    <Navbar/>
    <Dashboard/>
    <Main/>
    <Footer/>
    </Container>
    </>
  )
}

export default App
