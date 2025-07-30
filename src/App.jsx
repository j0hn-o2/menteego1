import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';

// Pages
import LandingPage from './pages/landingpage.jsx';
import About from './pages/about.jsx';
import SelectUserType from './pages/selectusertype.jsx';
import CreateMentorAccount from './pages/creatementoraccount.jsx';
import CreateMenteeAccount from './pages/creatementeeaccount.jsx';
import SelectLoginType from './pages/selectlogintype.jsx';
import LoginMentorAccount from './pages/loginmentoraccount.jsx';
import LoginMenteeAccount from './pages/loginmenteeaccount.jsx';
import MenteeDashboard from './pages/menteedashboard.jsx';

function AppContent() {
  const location = useLocation();

  // Define separately the routes where you want to hide the navbar and footer
  const hideNavbarRoutes = [
    '/selectusertype',
    '/selectlogintype',
    '/creatementeeaccount',
    '/creatementoraccount',
    '/loginmentor',
    '/loginmentee',
    '/dashboard/mentee'
  ];

  const hideFooterRoutes = [
    // '/',
    '/selectusertype',
    '/selectlogintype',
    '/loginmentor',
    '/loginmentee',
    '/creatementoraccount',
    '/creatementeeaccount',
    '/dashboard/mentee'
  ];

  const hideNavbar = hideNavbarRoutes.includes(location.pathname);
  const hideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/selectusertype" element={<SelectUserType />} />
        <Route path="/creatementoraccount" element={<CreateMentorAccount />} />
        <Route path="/creatementeeaccount" element={<CreateMenteeAccount />} />
        <Route path="/selectlogintype" element={<SelectLoginType />} />
        <Route path="/loginmentor" element={<LoginMentorAccount />} />
        <Route path="/loginmentee" element={<LoginMenteeAccount />} />
        <Route path="/dashboard/mentee" element={<MenteeDashboard />} />
        
        {/* Add other routes as needed */}
      </Routes>

      {!hideFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

