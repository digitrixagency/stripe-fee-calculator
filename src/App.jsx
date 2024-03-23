import './App.css'
import Dashboard from './components/DashBoard'
import CssBaseline from "@mui/material/CssBaseline"
import Main from './components/Main'
import Container from "@mui/material/Container";
import ExpandableDrawerNavbar from './components/ExpandableDrawerNavbar'
import NewFooter from './components/NewFooter'

function App() {
  return (
    <>
    <CssBaseline/>
    <Container maxWidth={'xl'} disableGutters>
    <ExpandableDrawerNavbar/>
    <Dashboard/>
    <Main/>
    <NewFooter/>
    </Container>
    </>
  )
}

export default App
