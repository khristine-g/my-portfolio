import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkTogether from "@/components/WorkTogether";
import WhyChooseUs from "@/components/WhyChooseUs";
import Steps from "@/components/Steps";
import About from "@/components/About";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <div >
     <Navbar />
      
        <Hero />
        <WorkTogether />
        <Services />
        <WhyChooseUs />
        <TechStack />
       
        <About />
         {/* <Stats /> */}
         <Testimonials />
        
        <Steps />
        <Contact />
        <Footer />
       
      
    </div>
  );
  
}
