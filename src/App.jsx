
import './App.css'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from"./Home"
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Error from './Error'
import Navbar from './Navbar';
import{BrowserRouter,Routes ,Route} from 'react-router-dom';
import {ProfileContent,ProfileImage} from './components/Profile'
import ProjectCard from './components/Project'
import FooterDetails from './components/Footer'
import BottomNavbar from './components/BottomNavbar'
import Skill from './components/Skill'

function App() {
  

  return (
    <>

  
   
    
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Services/>}/>
      <Route path='*' element={<Error/>}/>

    </Routes>
    
    
    
    </>
  )
}

export default App
