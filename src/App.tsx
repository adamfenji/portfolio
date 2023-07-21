import Timeline from "../components/Timeline.tsx";
import Header from "../components/Header.tsx";
import Skills from "../components/Skills.tsx";
import Gallery from "../components/Gallery.tsx";
import NavBar from "../components/NavBar.tsx";
import Connect from "../components/Connect.tsx";
import Footer from "../components/Footer.tsx";
import '../styles/App.css'

function App() {

  return (
    <>
    <NavBar/>
    <Header/>
    <Skills/>
    <Timeline/>
    <Gallery/>
    <Connect/>
    <Footer/>
    </>
  )
}

export default App
