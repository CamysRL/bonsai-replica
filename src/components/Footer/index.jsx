import { useState, useEffect } from "react";
import "./style.css";
import caretDown from "../../assets/caret-big-down.svg";
import caretUp from "../../assets/caret-big-up.svg";

export default function Footer() {
    const [isTemplatesMenuOpen, setIsTemplatesMenuOpen] = useState(false);
    const [isProposalTemplatesMenuOpen, setIsProposalTemplatesMenuOpen] = useState(false);
    const [isContractTemplatesMenuOpen, setIsContractTemplatesMenuOpen] = useState(false);
    const [isAgreementTemplatesMenuOpen, setIsAgreementTemplatesMenuOpen] = useState(false);
    const [isScopeOfWorkTemplatesMenuOpen, setIsScopeOfWorkTemplatesMenuOpen] = useState(false);
    const [isQuoteTemplatesMenuOpen, setIsQuoteTemplatesMenuOpen] = useState(false);
    const [isComparisonsMenuOpen, setIsComparisonsMenuOpen] = useState(false);

    /*useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    }, [isMenuOpen]);*/
    return (
        <footer className="footer-container">
            <div className="product-container">
                <p>PRODUCT</p>
                <ul>
                    <li><a href="#">Proposals</a></li>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">Invoicing</a></li>
                    <li><a href="#">Time Tracking</a></li>
                    <li><a href="#">Task Tracking</a></li>
                    <li><a href="#">Forms</a></li>
                    <li><a href="#">Accounting</a></li>
                    <li><a href="#">Bonsai Tax</a></li>
                    <li><a href="#">Task Tracking</a></li>
                    <li><a href="#">Bonsai Cash</a></li>
                    <br />
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Bonsai Reviews</a></li>
                </ul>
            </div>

            <div className="free-resources-container">
                <p>FREE RESOURCES</p>
                <ul>
                    <li><a href="#">Freelance Resources</a></li>
                    <li><a href="#">Freelance Blog by Bonsai</a></li>
                    <li><a href="#">How to Write a Contract</a></li>
                    <li><a href="#">Online Signature Maker</a></li>
                    <br />
                    <li><a href="#">Self-Employed Taxes Hub</a></li>
                    <li><a href="#">Self-Employed Tax Calculator</a></li>
                    <li><a href="#">Self-Employed Tax</a></li>
                    <li><a href="#">Dedutions</a></li>
                </ul>
                <div className="templates-container">
                    <p>Templates</p>
                    <ul>
                        <li>
                            <div className="templates-menu">
                                <a href="#">Invoice Templates</a>
                                <img className="templates-menu-icon" src={isTemplatesMenuOpen ? caretUp : caretDown} alt="toggle menu" onClick={() => setIsTemplatesMenuOpen(!isTemplatesMenuOpen)} />
                            </div>
                            <ul className={isTemplatesMenuOpen ? "invoice-templates ativo" : "invoice-templates"}>
                                <li><a href="#">Invoice Generator</a></li>
                                <li><a href="#">Blank Invoice Template</a></li>
                                <li><a href="#">Consultant Invoice Template</a></li>
                                <li><a href="#">Editable Invoice Template</a></li>
                                <li><a href="#">Graphic Design Invoice</a></li>
                                <li><a href="#">Web Design Invoice Contractor</a></li>
                                <li><a href="#">Invoice Template</a></li>
                                <li><a href="#">Photography Invoice Template</a></li>
                                <li><a href="#">Self-Employed Invoice Template</a></li>
                            </ul>
                        </li>

                        <li>
                            <div className="templates-menu">
                                <a href="#">Proposal Templates</a>
                                <img className="templates-menu-icon" src={isProposalTemplatesMenuOpen ? caretUp : caretDown} alt="toggle menu" onClick={() => setIsProposalTemplatesMenuOpen(!isProposalTemplatesMenuOpen)} />
                            </div>
                            <ul className={isProposalTemplatesMenuOpen ? "proposal-templates ativo" : "proposal-templates"}>
                                <li><a href="#">Website Proposal Template</a></li>
                                <li><a href="#">Digital Marketing Proposal</a></li>
                                <li><a href="#">Social Media Proposal</a></li>
                                <li><a href="#">Proposal</a></li>
                                <li><a href="#">Graphic Desing Proposal</a></li>
                                <li><a href="#">Freelance Proposal Template</a></li>
                                <li><a href="#">SEO Proposal Template</a></li>
                            </ul>
                        
                        </li>
                            <div className="templates-menu">
                                <a href="#">Contract Templates</a>
                                <img className="templates-menu-icon" src={isContractTemplatesMenuOpen ? caretUp : caretDown} alt="toggle menu" onClick={() => setIsContractTemplatesMenuOpen(!isContractTemplatesMenuOpen)} />
                            </div>
                            <ul className={isContractTemplatesMenuOpen ? "contract-templates ativo" : "contract-templates"}>
                                <li><a href="#">Online Contract</a></li>
                                <li><a href="#">Graphic Design Contract</a></li>
                                <li><a href="#">Freelance Contract Template</a></li>
                                <li><a href="#">Social Media Marketing Contract</a></li>
                                <li><a href="#">Software Development Contract</a></li>
                                <li><a href="#">Web Design Contract</a></li>
                                <li><a href="#">Video Production Contract</a></li>
                                <li><a href="#">Public Relations Contract</a></li>
                                <li><a href="#">Translation Contract</a></li>
                            </ul>
                        
                        <li>
                            <div className="templates-menu">
                                <a href="#">Agreement Templates</a>
                                <img className="templates-menu-icon" src={isAgreementTemplatesMenuOpen ? caretUp : caretDown} alt="toggle menu" onClick={() => setIsAgreementTemplatesMenuOpen(!isAgreementTemplatesMenuOpen)} />
                            </div>
                            <ul className={isAgreementTemplatesMenuOpen ? "agreement-templates ativo" : "agreement-templates"}>
                                <li><a href="#">Retainer Agreement Template</a></li>
                                <li><a href="#">Influencer Agreement Template</a></li>
                                <li><a href="#">Collaboration Agreement Template</a></li>
                                <li><a href="#">Marketing Agreement Template</a></li>
                            </ul>
                        </li>

                        <li>
                            <div className="templates-menu">
                                <a href="#">Scope of Work Templates</a>
                                <img className="templates-menu-icon" src={isScopeOfWorkTemplatesMenuOpen ? caretUp : caretDown} alt="toggle menu" onClick={() => setIsScopeOfWorkTemplatesMenuOpen(!isScopeOfWorkTemplatesMenuOpen)} />
                            </div>
                            <ul className={isScopeOfWorkTemplatesMenuOpen ? "scope-of-work-templates ativo" : "scope-of-work-templates"}>
                                <li><a href="#">Website Development Scope of Work</a></li>
                                <li><a href="#">Digital Marketing Scope of Work</a></li>
                                <li><a href="#">Consultant Statement of Work Template</a></li>
                                <li><a href="#">Software Ddevelopment Work Template</a></li>
                            </ul>
                        </li>

                        <li>
                            <div className="templates-menu">
                                <a href="#">Quote Templates</a>
                                <img className="templates-menu-icon" src={isQuoteTemplatesMenuOpen ? caretUp : caretDown} alt="toggle menu" onClick={() => setIsQuoteTemplatesMenuOpen(!isQuoteTemplatesMenuOpen)} />
                            </div>
                            <ul className={isQuoteTemplatesMenuOpen ? "quote-templates ativo" : "quote-templates"}>
                                <li><a href="#">Freelance Quotation Template</a></li>
                                <li><a href="#">Web Design Quotation Template</a></li>
                                <li><a href="#">Graphic Design Quotation Template</a></li>
                                <li><a href="#">Interior Design Quotation Template</a></li>
                                <li><a href="#">Video Production Quotation Template</a></li>
                                <li><a href="#">Social Media Quotation Template</a></li>
                            </ul>
                        </li> 
                        <li><a href="#">Credit Note Templates</a></li>
                        <li><a href="#">Estimate Templates</a></li>
                        <li><a href="#">Form Templates</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="bonsai-container">
                <p>BONSAI</p>
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Carrers</a></li>
                    <li><a href="">Support</a></li>
                    <li><a href="">Linkedln</a></li>
                    <li><a href="">X - Twitter</a></li>
                    <li><a href="">Privacy policy</a></li>
                    <li><a href="">Legal</a></li>
                    <br />
                    <li><a href="">Affiliates</a></li>
                    <li><a href="">Write for Us</a></li>
                    <br />
                    <li>
                        <div className="templates-menu">
                                <a href="#">Comparisons</a>
                                <img className="templates-menu-icon" src={isComparisonsMenuOpen ? caretUp : caretDown} alt="toggle menu" onClick={() => setIsComparisonsMenuOpen(!isComparisonsMenuOpen)} />
                            </div>
                            <ul className={isComparisonsMenuOpen ? "comparisons-templates ativo" : "comparisons-templates"}>
                                <li><a href="#">Freshbooks Alternatives</a></li>
                                <li><a href="#">Quickbooks Alternatives</a></li>
                                <li><a href="#">Wave vs Quickbooks</a></li>
                                <li><a href="#">Xero vs Quickbooks</a></li>
                                <li><a href="#">Freshbooks vs Quickbooks</a></li>
                            </ul>
                    </li>
                </ul>
            </div>
        </footer>
    )
}