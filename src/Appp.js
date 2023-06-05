import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import About from './components/Header/About';
import Nav from "./components/Fixedbutton/Fixedbutton";
import Contactus from "./components/Contactus/Contract";

function Appp() {
  return (
    <div className="App">
      <div className="sst">
        <Navbar />
      </div>
      <Nav />
      <div className="sss">
        <Header />
        <Services />
        <About />
        <Contactus />
        <Footer />
      </div>
    </div>
  );
} 

export default Appp;
