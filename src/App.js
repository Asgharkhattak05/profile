
import {Route, Navigate , Routes} from 'react-router-dom';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
   <>
     <Navbar />
     <Routes >
        <Route  path='/'  element={<Home/>} />
        <Route  path='/Services'  element={<Services/>} />
        <Route  path='/Contact'  element={<Contact/>} />
        <Route  path='/About'  element={<About/>} />
        <Route
        path="*"
        element={<Navigate to="/" replace />}
        />
     </Routes>
     <Footer />
   </>
  );
}

export default App;
