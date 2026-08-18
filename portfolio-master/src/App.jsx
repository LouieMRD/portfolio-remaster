import { Analytics } from "@vercel/analytics/react";
import Header from "./components/header.jsx";
import Home from "./components/home.jsx";
import Projects from "./components/Projects";
import "./index.css"
import Contact from "./components/contact.jsx";


function App() {
    return (
        <>
            <div id="home" className="everything">

                <Header/>

                <Home/>

                <Projects/>

                <Contact />


            </div>
            <Analytics />
        </>
    );
}

export default App;
