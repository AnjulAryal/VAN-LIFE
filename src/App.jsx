import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
//HEADER COMPONENT
function Header(){
    return(
        <header>
        <Link to="/"><h1>#VANLIFE</h1></Link>
        <nav>
            <ul>
            <li><Link to ="/about">About</Link></li>
            <li><Link>Vans</Link></li>
            </ul>
        </nav>
        </header>
    )
}
//FOTTER COMPONENT
function Footer(){
    return(
        <footer>
        <p>Ⓒ 2022 #VANLIFE</p>
        </footer>
    )
}
export default function App() {
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
        </BrowserRouter>
    )
}