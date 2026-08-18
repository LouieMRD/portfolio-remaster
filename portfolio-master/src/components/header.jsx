import { useEffect, useState } from "react";

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        function handleScroll() {
            setIsScrolled(window.scrollY > 20);
        }

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    function toggleTheme() {
        setTheme((currentTheme) =>
            currentTheme === "dark" ? "light" : "dark"
        );
    }

    return (
        <header className={`header ${isScrolled ? "scrolled" : ""}`}>
            <div className="header_container">
                <div className="site_logo">
                    <h1 id="header_name">Louie</h1>
                </div>

                <nav className="links">
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>

                        <li>
                            <a href="#projects">Projects</a>
                        </li>

                        <li>
                            <a href="#contact">Contact</a>
                        </li>

                        <li className="theme-toggle-item">
                            <button
                                className="theme-toggle"
                                type="button"
                                onClick={toggleTheme}
                                aria-label="Toggle light and dark mode"
                            >
                <span className="material-symbols-outlined">
                  {theme === "dark" ? "light_mode" : "dark_mode"}
                </span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
