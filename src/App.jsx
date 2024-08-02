import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutUS from "./components/AboutUS/AboutUS";
import Firstbanner from "./components/firstbanner/Firstbanner";
import SectionBanner from "./components/sectionbanner/SectionBanner";
import SecondBanner from "./components/secondbanner/SecondBanner";
import ExploreSection from "./components/exploresection/ExploreSection";
import SliderSection from "./components/slidersection/SliderSection";
import NoticeEvent from "./components/eventNoticeSection/NoticeEvent";
import CalendarEvent from "./components/calendareventssection/CalendarEvent";
import VideoSection from "./components/videosection/VideoSection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="heromaincontainer">
        <div className="overlay"></div>
        <Navbar />
        <HeroSection />
      </div>
      <AboutUS />
      <Firstbanner />
      <SectionBanner />
      <SecondBanner/>
      <ExploreSection/>
      <SliderSection/>
      <NoticeEvent/>
      <CalendarEvent/>
      <VideoSection/>
      <Footer/>
    </>
  );
}

export default App;
