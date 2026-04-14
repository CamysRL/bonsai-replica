import { useState } from "react";
import "./style.css";
import bonsaiLogo from "../../assets/bonsai-logo.svg";
import menu from "../../assets/menu.svg";
import closeIcon from "../../assets/close-icon.svg";
import caretDown from "../../assets/caret-big-down.svg";
import caretUp from "../../assets/caret-big-up.svg";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
    const [isTemplatesMenuOpen, setIsTemplatesMenuOpen] = useState(false);

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
                    <div className="nav-container">
                        <img className="bonsai-icon" src="/bonsai-icon.svg" alt="logo" />
                        <img className="close-icon" src={closeIcon} alt="fechar menu" onClick={() => setIsMenuOpen(false)}/>
                    </div>
                    <ul className="list-links">
                        <li className="menu-item">
                            <div className="menu-title">
                                <a href="#" target="_self" title="Access products">Product</a>

                                <img 
                                    className="product-menu-icon" 
                                    src={isProductMenuOpen ? caretUp : caretDown} 
                                    alt="toggle menu" 
                                    onClick={() => setIsProductMenuOpen(!isProductMenuOpen)} 
                                />
                            </div>
                            <ul className={isProductMenuOpen ? "product-menu ativo" : "product-menu"}>
                                <hr />
                                <li><a href="#" target="_self" title="Access Bonsai">Bonsai Workflow</a></li>
                                <li><a href="#" target="_self" title="Access Bonsai Time Tracking">Bonsai Tax</a></li>
                                <li><a href="#" target="_self" title="Access Bonsai Tax">Bonsai Cash</a></li>
                            </ul>
                        </li>
                        <hr />
                        <li className="menu-item">
                            <div className="menu-title">
                                <a href="#" target="_self" title="Access templates">Templates</a>

                                <img 
                                    className="product-menu-icon" 
                                    src={isTemplatesMenuOpen ? caretUp : caretDown} 
                                    alt="toggle menu" 
                                    onClick={() => setIsTemplatesMenuOpen(!isTemplatesMenuOpen)} 
                                />
                            </div>
                            <ul className={isTemplatesMenuOpen ? "product-menu ativo" : "product-menu"}>
                                <hr />
                                <li><a href="#" target="_self" title="Access contract templates">Contract Templates</a></li>
                                <li><a href="#" target="_self" title="Access proposal templates">Proposal Templates</a></li>
                                <li><a href="#" target="_self" title="Access invoice templates">Invoice Templates</a></li>
                                <li><a href="#" target="_self" title="Access agreement templates">Agreement Templates</a></li>
                                <li><a href="#" target="_self" title="Access quote templates">Quote Templates</a></li>
                                <li><a href="#" target="_self" title="Access scope of work templates">Scope of Work Templates</a></li>
                            </ul>
                        </li>
                        <hr />
                        <li className="menu-item">
                            <a href="#" target="_self" title="Access pricing">Pricing</a>
                        </li>
                        <hr />
                        <li className="menu-item">
                            <a href="#" target="_self" title="Access pricing">Reviews</a>
                        </li>
                        <hr />
                    </ul>

                    <a className="login-button" href="#" target="_self" title="Access login">LOG IN</a>

                    <a className="start-free-button" href="#" target="_self" title="Access Start Free">START FREE</a>
                </nav>
            </div>
        </header>
    )
}