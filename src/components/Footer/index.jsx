import { useState, useEffect } from "react";
import "./style.css";
import caretDown from "../../assets/caret-big-down.svg";
import caretUp from "../../assets/caret-big-up.svg";

export default function Footer() {
  const [isTemplatesMenuOpen, setIsTemplatesMenuOpen] = useState(false);
  const [isProposalTemplatesMenuOpen, setIsProposalTemplatesMenuOpen] =
    useState(false);
  const [isContractTemplatesMenuOpen, setIsContractTemplatesMenuOpen] =
    useState(false);
  const [isAgreementTemplatesMenuOpen, setIsAgreementTemplatesMenuOpen] =
    useState(false);
  const [isScopeOfWorkTemplatesMenuOpen, setIsScopeOfWorkTemplatesMenuOpen] =
    useState(false);
  const [isQuoteTemplatesMenuOpen, setIsQuoteTemplatesMenuOpen] =
    useState(false);
  const [isComparisonsMenuOpen, setIsComparisonsMenuOpen] = useState(false);

  /*useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    }, [isMenuOpen]);*/
  return (
    <footer className="footer-container">
      <div className="product-container">
        <p>PRODUCT</p>
        <ul>
          <li>
            <a href="#" target="_self" title="Access proposals">
              Proposals
            </a>
          </li>
          <li>
            <a href="#" target="_self" title="Access contacts">
              Contacts
            </a>
          </li>
          <li>
            <a href="#" target="_self" title="Access invoicing">
              Invoicing
            </a>
          </li>
          <li>
            <a href="#" target="_self" title="Access time tracking">
              Time Tracking
            </a>
          </li>
          <li>
            <a href="#" target="_self" title="Access task tracking">
              Task Tracking
            </a>
          </li>
          <li>
            <a href="#" target="_self" title="Access forms">
              Forms
            </a>
          </li>
          <li>
            <a href="#" target="_self" title="Access accounting">
              Accounting
            </a>
          </li>
          <li>
            <a href="#" target="_self" title="Access Bonsai Tax">
              Bonsai Tax
            </a>
          </li>
          <li>
            <a href="#" target="_self" title="Access Bonsai Cash">
              Bonsai Cash
            </a>
          </li>
          <br />
          <li>
            <a href="#" target="_self" title="View pricing information">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" target="_self" title="Read Bonsai reviews">
              Bonsai Reviews
            </a>
          </li>
        </ul>
      </div>

      <div className="free-resources-container">
        <p>FREE RESOURCES</p>
        <ul>
          <li>
            <a href="#" target="_self" title="Explore freelance resources">
              Freelance Resources
            </a>
          </li>
          <li>
            <a href="#" target="_self" title="Read the Bonsai freelance blog">
              Freelance Blog by Bonsai
            </a>
          </li>
          <li>
            <a href="#" target="_self" title="Learn how to write a contract">
              How to Write a Contract
            </a>
          </li>
          <li>
            <a href="#" target="_self" title="Create an online signature">
              Online Signature Maker
            </a>
          </li>
          <br />
          <li>
            <a href="#" target="_self" title="Access self-employed taxes hub">
              Self-Employed Taxes Hub
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_self"
              title="Access self-employed tax calculator"
            >
              Self-Employed Tax Calculator
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_self"
              title="Access self-employed tax information"
            >
              Self-Employed Tax
            </a>
          </li>
          <li>
            <a href="#" target="_self" title="Access deduction information">
              Dedutions
            </a>
          </li>
        </ul>
        <div className="templates-container">
          <p>Templates</p>
          <ul>
            <li>
              <div className="templates-menu">
                <a href="#" target="_self" title="Access invoice templates">
                  Invoice Templates
                </a>
                <img
                  className="templates-menu-icon"
                  src={isTemplatesMenuOpen ? caretUp : caretDown}
                  alt="toggle menu"
                  onClick={() => setIsTemplatesMenuOpen(!isTemplatesMenuOpen)}
                />
              </div>
              <ul
                className={
                  isTemplatesMenuOpen
                    ? "invoice-templates ativo"
                    : "invoice-templates"
                }
              >
                <li>
                  <a href="#" target="_self" title="Access invoice generator">
                    Invoice Generator
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access blank invoice template"
                  >
                    Blank Invoice Template
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access consultant invoice template"
                  >
                    Consultant Invoice Template
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access editable invoice template"
                  >
                    Editable Invoice Template
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access graphic design invoice"
                  >
                    Graphic Design Invoice
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access web design invoice contractor"
                  >
                    Web Design Invoice Contractor
                  </a>
                </li>
                <li>
                  <a href="#" target="_self" title="Access invoice template">
                    Invoice Template
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access photography invoice template"
                  >
                    Photography Invoice Template
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access self-employed invoice template"
                  >
                    Self-Employed Invoice Template
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <div className="templates-menu">
                <a href="#" target="_self" title="Access proposal templates">
                  Proposal Templates
                </a>
                <img
                  className="templates-menu-icon"
                  src={isProposalTemplatesMenuOpen ? caretUp : caretDown}
                  alt="toggle menu"
                  onClick={() =>
                    setIsProposalTemplatesMenuOpen(!isProposalTemplatesMenuOpen)
                  }
                />
              </div>
              <ul
                className={
                  isProposalTemplatesMenuOpen
                    ? "proposal-templates ativo"
                    : "proposal-templates"
                }
              >
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access website proposal template"
                  >
                    Website Proposal Template
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access digital marketing proposal"
                  >
                    Digital Marketing Proposal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access social media proposal"
                  >
                    Social Media Proposal
                  </a>
                </li>
                <li>
                  <a href="#" target="_self" title="Access proposal">
                    Proposal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access graphic design proposal"
                  >
                    Graphic Design Proposal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access freelance proposal template"
                  >
                    Freelance Proposal Template
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access SEO proposal template"
                  >
                    SEO Proposal Template
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <div className="templates-menu">
                <a href="#" target="_self" title="Access contract templates">
                  Contract Templates
                </a>
                <img
                  className="templates-menu-icon"
                  src={isContractTemplatesMenuOpen ? caretUp : caretDown}
                  alt="toggle menu"
                  onClick={() =>
                    setIsContractTemplatesMenuOpen(!isContractTemplatesMenuOpen)
                  }
                />
              </div>
              <ul
                className={
                  isContractTemplatesMenuOpen
                    ? "contract-templates ativo"
                    : "contract-templates"
                }
              >
                <li>
                  <a href="#" target="_self" title="Access online contract">
                    Online Contract
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access graphic design contract"
                  >
                    Graphic Design Contract
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access freelance contract template"
                  >
                    Freelance Contract Template
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access social media marketing contract"
                  >
                    Social Media Marketing Contract
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access software development contract"
                  >
                    Software Development Contract
                  </a>
                </li>
                <li>
                  <a href="#" target="_self" title="Access web design contract">
                    Web Design Contract
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access video production contract"
                  >
                    Video Production Contract
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access public relations contract"
                  >
                    Public Relations Contract
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access translation contract"
                  >
                    Translation Contract
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <div className="templates-menu">
                <a href="#" target="_self" title="Access agreement templates">
                  Agreement Templates
                </a>
                <img
                  className="templates-menu-icon"
                  src={isAgreementTemplatesMenuOpen ? caretUp : caretDown}
                  alt="toggle menu"
                  onClick={() =>
                    setIsAgreementTemplatesMenuOpen(
                      !isAgreementTemplatesMenuOpen,
                    )
                  }
                />
              </div>
              <ul
                className={
                  isAgreementTemplatesMenuOpen
                    ? "agreement-templates ativo"
                    : "agreement-templates"
                }
              >
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access retainer agreement template"
                  >
                    Retainer Agreement Template
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access influencer agreement template"
                  >
                    Influencer Agreement Template
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access collaboration agreement template"
                  >
                    Collaboration Agreement Template
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access marketing agreement template"
                  >
                    Marketing Agreement Template
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <div className="templates-menu">
                <a
                  href="#"
                  target="_self"
                  title="Access scope of work templates"
                >
                  Scope of Work Templates
                </a>
                <img
                  className="templates-menu-icon"
                  src={isScopeOfWorkTemplatesMenuOpen ? caretUp : caretDown}
                  alt="toggle menu"
                  onClick={() =>
                    setIsScopeOfWorkTemplatesMenuOpen(
                      !isScopeOfWorkTemplatesMenuOpen,
                    )
                  }
                />
              </div>
              <ul
                className={
                  isScopeOfWorkTemplatesMenuOpen
                    ? "scope-of-work-templates ativo"
                    : "scope-of-work-templates"
                }
              >
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access website development scope of work"
                  >
                    Website Development Scope of Work
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access digital marketing scope of work"
                  >
                    Digital Marketing Scope of Work
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access consultant statement of work template"
                  >
                    Consultant Statement of Work Template
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access software development work template"
                  >
                    Software Development Work Template
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <div className="templates-menu">
                <a href="#" target="_self" title="Access quote templates">
                  Quote Templates
                </a>
                <img
                  className="templates-menu-icon"
                  src={isQuoteTemplatesMenuOpen ? caretUp : caretDown}
                  alt="toggle menu"
                  onClick={() =>
                    setIsQuoteTemplatesMenuOpen(!isQuoteTemplatesMenuOpen)
                  }
                />
              </div>
              <ul
                className={
                  isQuoteTemplatesMenuOpen
                    ? "quote-templates ativo"
                    : "quote-templates"
                }
              >
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access freelance quotation template"
                  >
                    Freelance Quotation Template
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access web design quotation template"
                  >
                    Web Design Quotation Template
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access graphic design quotation template"
                  >
                    Graphic Design Quotation Template
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access interior design quotation template"
                  >
                    Interior Design Quotation Template
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access video production quotation template"
                  >
                    Video Production Quotation Template
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_self"
                    title="Access social media quotation template"
                  >
                    Social Media Quotation Template
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" target="_self" title="Access credit note templates">
                Credit Note Templates
              </a>
            </li>
            <li>
              <a href="#" target="_self" title="Access estimate templates">
                Estimate Templates
              </a>
            </li>
            <li>
              <a href="#" target="_self" title="Access form templates">
                Form Templates
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bonsai-container">
        <p>BONSAI</p>
        <ul>
          <li>
            <a href="#" target="_self" title="Access about information">
              About
            </a>
          </li>
          <li>
            <a href="#" target="_self" title="Access careers information">
              Carrers
            </a>
          </li>
          <li>
            <a href="#" target="_self" title="Access support information">
              Support
            </a>
          </li>
          <li>
            <a href="#" target="_self" title="Access LinkedIn page">
              Linkedln
            </a>
          </li>
          <li>
            <a href="#" target="_self" title="Access X - Twitter page">
              X - Twitter
            </a>
          </li>
          <li>
            <a href="#" target="_self" title="Access privacy policy">
              Privacy policy
            </a>
          </li>
          <li>
            <a href="#" target="_self" title="Access legal information">
              Legal
            </a>
          </li>
          <br />
          <li>
            <a href="#" target="_self" title="Access affiliates information">
              Affiliates
            </a>
          </li>
          <li>
            <a href="#" target="_self" title="Access write for us information">
              Write for Us
            </a>
          </li>
          <br />
          <li>
            <div className="templates-menu">
              <a href="#">Comparisons</a>
              <img
                className="templates-menu-icon"
                src={isComparisonsMenuOpen ? caretUp : caretDown}
                alt="toggle menu"
                onClick={() => setIsComparisonsMenuOpen(!isComparisonsMenuOpen)}
              />
            </div>
            <ul
              className={
                isComparisonsMenuOpen
                  ? "comparisons-templates ativo"
                  : "comparisons-templates"
              }
            >
              <li>
                <a
                  href="#"
                  target="_self"
                  title="Access freshbooks alternatives"
                >
                  Freshbooks Alternatives
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_self"
                  title="Access quickbooks alternatives"
                >
                  Quickbooks Alternatives
                </a>
              </li>
              <li>
                <a href="#" target="_self" title="Access wave vs quickbooks">
                  Wave vs Quickbooks
                </a>
              </li>
              <li>
                <a href="#" target="_self" title="Access xero vs quickbooks">
                  Xero vs Quickbooks
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_self"
                  title="Access freshbooks vs quickbooks"
                >
                  Freshbooks vs Quickbooks
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
}
