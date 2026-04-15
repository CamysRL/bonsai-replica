import { useState, useEffect } from "react";
import "./style.css";
import { Hero } from "../../components";
import heroDashboard from "../../assets/hero-dashboard.png";
import withoutBonsai from "../../assets/without-bonsai-organization.svg";
import withBonsai from "../../assets/with-bonsai-organization.svg";
import geometricForms from "../../assets/geometric-forms.svg";
import worldIcon from "../../assets/world-icon.svg";

export default function Home() {
  return (
    <div className="home">
      <Hero
        title="Everything you need to run your business."
        text="Bonsai's all-in-one product suite smat automation lets you focus on your passion, not your paperwork."
      />
      <div className="home-image">
        <img
          src={heroDashboard}
          alt="Um homem feliz usando o Bonsai"
          className="hero-dashboard"
        />
      </div>

      <section className="features-section">
        <h2 className="title-section">Make more manage less</h2>
        <p className="description-section">
          Bonsai integrates and automates every step of your business so it runs
          seamlessly - from proposal to tax season.
        </p>
        <div className="bonsai-benefits">
          <div className="bonsai-benefits-card">
            <p className="bonsai-benefits-subtitle">Without Bonsai</p>
            <img
              src={withoutBonsai}
              alt="Processos desorganizados sem o Bonsai"
              className="bonsai-benefits-image"
            />
          </div>
          <div className="bonsai-benefits-card">
            <p className="bonsai-benefits-subtitle">With Bonsai</p>
            <img
              src={withBonsai}
              alt="Processos organizados com o Bonsai"
              className="bonsai-benefits-image"
            />
          </div>
        </div>
      </section>

      <section className="trust-section">
        <h2 className="title-section">
          Trusted by 500K+ self-employed workers and small businesses
        </h2>
        <p className="description-section">
          Whether you’re just getting started or your business is booming,
          Bonsai has you covered.
        </p>
        <div className="bonsai-trust-section">
          <div className="bonsai-trust-card">
            <img
              src={geometricForms}
              alt="Varias formas geometricas sobrepostas"
              className="bonsai-trust-image"
            />
            <p className="bonsai-trust-subtitle">Built for All Work Types</p>
            <p className="bonsai-trust-description">
              We proudly back people with wide-ranging businesses—from design
              and marketing to development, writing, and photography.
            </p>
          </div>
          <div className="bonsai-trust-card">
            <img
              src={worldIcon}
              alt="Icone do planeta terra"
              className="bonsai-trust-image"
            />
            <p className="bonsai-trust-subtitle">Built for Global Businesses</p>
            <p className="bonsai-trust-description">
              Bonsai has international coverage across the United States,
              Canada, UK, Australia and more, with 180 currencies supported.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
