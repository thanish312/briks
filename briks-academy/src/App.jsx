import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import StudentLife from './pages/StudentLife';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import Faculty from './pages/Faculty';
import QuestionPapers from './pages/QuestionPapers';
import Testimonials from './pages/Testimonials';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PUC1Papers from './pages/PUC1Papers';

function App({ mode, toggleColorMode }) {
  return (
    <Router>
      <Navbar mode={mode} toggleColorMode={toggleColorMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/student-life" element={<StudentLife />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/question-papers" element={<QuestionPapers />} />
        <Route path="/question-papers/1st-puc" element={<PUC1Papers />} />
        <Route path="/testimonials" element={<Testimonials />} />
        {/* Add 2nd PUC route when ready */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
