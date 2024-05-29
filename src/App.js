import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Quote from './pages/Quote';
import Upload from './pages/Upload';
import Footer from './Components/Footer';
import Header from './Components/Header';


function App() {
  return (
    <div>
     <Router>
        <Header />
                <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element = {<About />} />
          <Route path='/contact' element = {<Contact />} />
          <Route path='/portfolio' element = {<Portfolio />} />
          <Route path='/quote' element = {<Quote />} />
          <Route path='/upload' element = {<Upload />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
