import { useState } from "react";
import "./style.css";
import bonsaiLogo from "../../assets/bonsai-logo.svg";
import menu from "../../assets/menu.svg";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="header-container">
            <img className="logo" src={bonsaiLogo} alt="Bonsai Logo" />

            <div className="menu-container">
                <img
                className="menu-icon"
                src={menu}
                alt="um menu de três linhas - icone do menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
                <nav className={isMenuOpen ? "nav-header ativo" : "nav-header"}>
                    <ul className="list-links">
                        <li><a href="#" target="_self" title="Access products">Product</a></li>

                        <li><a href="#" target="_self" title="Access templates">Templates</a></li>

                        <li><a href="#" target="_self" title="Access pricing">Pricing</a></li>

                        <li><a href="#" target="_self" title="Access pricing">Reviews</a></li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}