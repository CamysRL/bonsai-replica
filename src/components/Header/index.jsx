import { useState, useEffect } from "react";
import "./style.css";
import bonsaiLogo from "../../assets/bonsai-logo.svg";
import menu from "../../assets/menu.svg";
import closeIcon from "../../assets/close-icon.svg";
import bonsaiIcon from "../../assets/bonsai-icon.svg";
import caretDown from "../../assets/caret-big-down.svg";
import caretUp from "../../assets/caret-big-up.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // menus principais
  const [openMenu, setOpenMenu] = useState(null);

  // submenu (Bonsai Workflow)
  const [openSubMenu, setOpenSubMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  // MENU PRINCIPAL
  const toggleMenu = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));

    // fecha submenu só se sair do Product
    if (menuName !== "product") {
      setOpenSubMenu(false);
    }
  };

  // SUBMENU (independente)
  const toggleSubMenu = () => {
    setOpenSubMenu((prev) => !prev);
  };

  return (
    <header className="header-container">
      <img className="logo" src={bonsaiLogo} alt="Bonsai Logo" />

      <div className="menu-container">
        <img
          className="menu-icon"
          src={menu}
          alt="menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        <nav className={isMenuOpen ? "nav-header ativo" : "nav-header"}>
          <div className="nav-container">
            <img className="bonsai-icon" src={bonsaiIcon} alt="logo" />
            <img
              className="close-icon"
              src={closeIcon}
              alt="fechar"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>

          <ul className="list-links">

            {/* PRODUCT */}
            <li className="menu-item">
              <div
                className="menu-title"
                onClick={() => toggleMenu("product")}
              >
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Product
                </a>

                <img
                  src={openMenu === "product" ? caretUp : caretDown}
                  alt="toggle"
                />
              </div>

              <ul
                className={
                  openMenu === "product"
                    ? "product-menu ativo"
                    : "product-menu"
                }
              >

                {/* BONSAI WORKFLOW */}
                <li>
                  <div
                    className="menu-title"
                    onClick={toggleSubMenu}
                  >
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      Bonsai Workflow
                    </a>

                    <img
                      src={openSubMenu ? caretUp : caretDown}
                      alt="toggle"
                    />
                  </div>

                  <ul
                    className={
                      openSubMenu
                        ? "product-menu-bonsai ativo"
                        : "product-menu-bonsai"
                    }
                  >
                    <li><a href="#">Invoices</a></li>
                    <li><a href="#">Proposals</a></li>
                    <li><a href="#">Contracts</a></li>
                    <li><a href="#">Client CRM</a></li>
                    <li><a href="#">Forms & Automations</a></li>
                    <li><a href="#">Time Tracking</a></li>
                    <li><a href="#">Accounting</a></li>
                    <li><a href="#">Task Tracking</a></li>
                  </ul>
                </li>

                <li><a href="#">Bonsai Tax</a></li>
                <li><a href="#">Bonsai Cash</a></li>

              </ul>
            </li>

            {/* TEMPLATES */}
            <li className="menu-item">
              <div
                className="menu-title"
                onClick={() => toggleMenu("templates")}
              >
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Templates
                </a>

                <img
                  src={openMenu === "templates" ? caretUp : caretDown}
                  alt="toggle"
                />
              </div>

              <ul
                className={
                  openMenu === "templates"
                    ? "product-menu ativo"
                    : "product-menu"
                }
              >
                <li><a href="#">Contract Templates</a></li>
                <li><a href="#">Proposal Templates</a></li>
                <li><a href="#">Invoice Templates</a></li>
                <li><a href="#">Agreement Templates</a></li>
                <li><a href="#">Quote Templates</a></li>
                <li><a href="#">Scope of Work Templates</a></li>
              </ul>
            </li>

            <li className="menu-item"><a href="#">Pricing</a></li>
            <li className="menu-item"><a href="#">Reviews</a></li>

          </ul>

          <a className="login-button" href="#">LOG IN</a>
          <a className="start-free-button" href="#">START FREE</a>
        </nav>
      </div>
    </header>
  );
}