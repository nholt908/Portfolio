import {useState} from "react";
import {Menu, X} from "lucide-react";

function Header(){
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <nav className="bg-lightcolor dark:bg-darkcolor text-darkestcolor dark:text-lightestcolor border-b-3 border-accentcolor">
            <div className="px-4 py-6 flex items-center justify-between">
                <h1 className="font-bold text-3xl">Nicole Holt</h1>

                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
            
                <ul className="hidden md:flex flex-row gap-6 lg:gap-12 lg:text-xl">
                    <li><a className="px-4 py-2 rounded-2xl border-3 border-accentcolor hover:bg-lightestcolor hover:dark:bg-darkestcolor hover:font-bold" href="/projects">Projects</a></li>
                    <li><a className="px-4 py-2 rounded-2xl border-3 border-accentcolor hover:bg-lightestcolor hover:dark:bg-darkestcolor hover:font-bold" href="/education">Education</a></li>
                    <li><a className="px-4 py-2 rounded-2xl border-3 border-accentcolor hover:bg-lightestcolor hover:dark:bg-darkestcolor hover:font-bold" href="/skills">Skills</a></li>
                    <li><a className="px-4 py-2 rounded-2xl border-3 border-accentcolor hover:bg-lightestcolor hover:dark:bg-darkestcolor hover:font-bold" href="/">Home</a></li>
                    <li><a className="px-4 py-2 rounded-2xl border-3 border-accentcolor hover:bg-lightestcolor hover:dark:bg-darkestcolor hover:font-bold" href="/contact">Contact Me</a></li>
                </ul>
            </div>
                {menuOpen && (
                    <ul className="flex flex-col items-center gap-6 py-4 md:hidden">
                        <li><a className="px-4 py-2 rounded-2xl border-3 border-accentcolor hover:bg-lightestcolor hover:dark:bg-darkestcolor hover:font-bold" href="/projects">Projects</a></li>
                        <li><a className="px-4 py-2 rounded-2xl border-3 border-accentcolor hover:bg-lightestcolor hover:dark:bg-darkestcolor hover:font-bold" href="/education">Education</a></li>
                        <li><a className="px-4 py-2 rounded-2xl border-3 border-accentcolor hover:bg-lightestcolor hover:dark:bg-darkestcolor hover:font-bold" href="/skills">Skills</a></li>
                        <li><a className="px-4 py-2 rounded-2xl border-3 border-accentcolor hover:bg-lightestcolor hover:dark:bg-darkestcolor hover:font-bold" href="/">Home</a></li>
                        <li><a className="px-4 py-2 rounded-2xl border-3 border-accentcolor hover:bg-lightestcolor hover:dark:bg-darkestcolor hover:font-bold" href="/contact">Contact Me</a></li>
                    </ul>
                )}
            
        </nav>
    )
};

export default Header;