import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="flex justify-between px-10 py-3 bg-primary1 sticky top-0 z-50">
            <a className="font-bold text-orange-500" href="/">
                Level up
            </a>
            <nav className="hidden md:block">
                <ul className="flex text-black">
                    <li>
                        <a className="nav-link" href="/">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="/about">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="/projects">
                            Courses
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="/contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            {toggleMenu && (
                <nav className="block md:hidden">
                    <ul
                        onClick={() => setToggleMenu(!toggleMenu)}
                        className="flex flex-col text-white mobile-nav"
                    >
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="about">About</a>
                        </li>
                        <li>
                            <a href="projects">Projects</a>
                        </li>
                        <li>
                            <a href="contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            )}
            <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden">
                <Bars3Icon className="text-white h-5" />
            </button>
        </header>
    );
}
