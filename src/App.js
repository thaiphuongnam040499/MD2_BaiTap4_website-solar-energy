import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import AboutStart from './components/AboutStart';
import ServiceStart from './components/ServiceStart';
import TeamStart from './components/TeamStart';
import FaqsStart from './components/FaqsStart';
import ContactStart from './components/ContactStart';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
    <>
  {/* Navbar Start */}
  <Navbar/>
  {/* Navbar End */}
  {/* Carousel Start */}
  <Carousel/>
  {/* Carousel End */}
  {/* About Start */}
  <AboutStart/>
  {/* About End */}
  {/* Service Start */}
 <ServiceStart/>
  {/* Service End */}
  {/* Team Start */}
 <TeamStart/>
  {/* Team End */}
  {/* FAQs Start */}
  <FaqsStart/>
  {/* FAQs End */}
  {/* Contact Start */}
  <ContactStart/>
  {/* Contact End */}
  {/* Footer Start */}
  <Footer/>
  {/* Footer End */}
</>

    </div>
  );
}

export default App;
