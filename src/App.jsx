import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar.jsx'; // Adjust the path as necessary
import LandingPage  from './pages/landingpage.jsx';
import Footer from './components/footer.jsx';
import About from './pages/about.jsx';
import SelectUserType from './pages/selectusertype.jsx';
import CreateMentorAccount from './pages/creatementoraccount.jsx';
import CreateMenteeAccount from './pages/creatementeeaccount.jsx';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/selectusertype" element={<SelectUserType />} />
        <Route path="/creatementoraccount" element={<CreateMentorAccount />} />
        <Route path="/creatementeeaccount" element={<CreateMenteeAccount />} />
        {/* <Route path="/createaccount" element={<CreateAccount />} /> */}
        {/* Add more routes as needed */}

      </Routes>
      <Footer />
    </Router>

  )
}

export default App
