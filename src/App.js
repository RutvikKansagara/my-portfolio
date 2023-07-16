
import './App.css';
import About from './components/About';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import PortfolioGrid from './components/PortfolioGrid';
import Services from './components/Services';
import Team from './components/Team';
import PortfolioModalPopup from './components/PortfolioModals';

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <Services />
    {/* <PortfolioGrid /> */}
    {/* <About /> */}
    <Team />
    {/* <Clients /> */}
    <Contact />
    <Footer />
    <PortfolioModalPopup />
    </>
  );
}

export default App;
