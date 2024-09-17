import Navbar from "./components/Navbar.jsx";
import { useEffect, useState } from "react";
import Landing from "./components/Landing.jsx";
import LineGradient from "./components/LineGradient.jsx";
import MySkills from "./components/MySkills.jsx";
import Projects from "./components/Projects.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"

function App() {

  const [selectedPage,setSelectedPage] = useState('home');
  const [isTopOfPage,setIsTopOfPage] = useState(true);


  useEffect(()=>{
    const scrollHandle = ()=>{
      if(window.scrollY == 0) setIsTopOfPage(true);
      if(window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener('scroll',scrollHandle);
    return ()=> window.removeEventListener('scroll',scrollHandle);
  },[]);


  return (
    <div className="app bg-black">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}
      isTopOfPage={isTopOfPage}/>


      <div className="w-5/6 mx-auto ">
        <Landing setSelectedPage={setSelectedPage}/>
      </div>

      <LineGradient/>
      
      <div className="w-5/6 mx-auto ">
       <MySkills/>
      </div>

      <LineGradient/>
      
      <div className="w-5/6 mx-auto ">
       <Projects/>
      </div>

      <LineGradient/>
      
      <div className="w-5/6 mx-auto">
       <Testimonials/>
      </div>

      <LineGradient/>
      
      <div className="w-5/6 mx-auto">
       <Contact/>
      </div>
      
      <Footer/>

    </div>
  );


}

export default App;
