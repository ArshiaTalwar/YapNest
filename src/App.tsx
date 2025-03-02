import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

// import Navbar from './components/Navbar';
import Landing from './components/Landing'
import Auth from './components/Auth'
import Blogs from './components/Blogs'
// import BlogList from './components/BlogList'


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="Auth" element={<Auth />} />
        <Route path="Blogs" element={<Blogs />} />
      </Routes>
 
 
    
    </Router>
    
    </>
  )

}

export default App
