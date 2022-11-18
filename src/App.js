import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Banner from "./pages/Banner";
import FindSites from "./pages/FindSites";
import GetInTouch from "./pages/GetInTouch";
import HowItWorks from "./pages/HowItWorks";
import Services from "./pages/Services";


function App() {
  return (
    <div className="">
       <Navbar/>
       <Header/>
       <Services/>
       <HowItWorks/>
       <FindSites/>
       <Banner/>
       <GetInTouch/>
       <Footer/>
    </div>
  );
}

export default App;
