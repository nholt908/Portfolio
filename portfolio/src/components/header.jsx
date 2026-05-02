import {useState} from "react";
import {Menu, X} from "lucide-react";
import { Link } from "react-router-dom";

function Header(){
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <nav className="bg-lightcolor dark:bg-darkcolor border-b-3 border-accentcolor">
            <div className="px-4 py-6 flex items-center justify-between">
                <h1 className="font-bold text-3xl">Nicole Holt</h1>

                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
            
                <ul className="hidden md:flex flex-row gap-6 lg:gap-12 lg:text-xl">
                    <li><Link to="/" className="px-4 py-2 rounded-2xl border-3 border-accentcolor hover:bg-lightestcolor hover:dark:bg-darkestcolor hover:font-bold">Home</Link></li>
                    <li><Link to="/education" className="px-4 py-2 rounded-2xl border-3 border-accentcolor hover:bg-lightestcolor hover:dark:bg-darkestcolor hover:font-bold">Education</Link></li>
                    <li><Link to="/skills" className="px-4 py-2 rounded-2xl border-3 border-accentcolor hover:bg-lightestcolor hover:dark:bg-darkestcolor hover:font-bold">Skills</Link></li>
                    <li><Link to="/projects" className="px-4 py-2 rounded-2xl border-3 border-accentcolor hover:bg-lightestcolor hover:dark:bg-darkestcolor hover:font-bold">Projects</Link></li>
                    <li><Link to="/contact" className="px-4 py-2 rounded-2xl border-3 border-accentcolor hover:bg-lightestcolor hover:dark:bg-darkestcolor hover:font-bold">Contact Me</Link></li>
                </ul>
            </div>
                {menuOpen && (
                    <ul className="flex flex-col items-center gap-6 py-4 md:hidden">
                        <li><Link to="/" className="px-4 py-2 rounded-2xl border-3 border-accentcolor hover:bg-lightestcolor hover:dark:bg-darkestcolor hover:font-bold">Home</Link></li>
                        <li><Link to="/education" className="px-4 py-2 rounded-2xl border-3 border-accentcolor hover:bg-lightestcolor hover:dark:bg-darkestcolor hover:font-bold">Education</Link></li>
                        <li><Link to="/skills" className="px-4 py-2 rounded-2xl border-3 border-accentcolor hover:bg-lightestcolor hover:dark:bg-darkestcolor hover:font-bold">Skills</Link></li>
                        <li><Link to="/projects" className="px-4 py-2 rounded-2xl border-3 border-accentcolor hover:bg-lightestcolor hover:dark:bg-darkestcolor hover:font-bold">Projects</Link></li>
                        <li><Link to="/contact" className="px-4 py-2 rounded-2xl border-3 border-accentcolor hover:bg-lightestcolor hover:dark:bg-darkestcolor hover:font-bold">Contact Me</Link></li>
                    </ul>
                )}
            
        </nav>
    )
};

export default Header;