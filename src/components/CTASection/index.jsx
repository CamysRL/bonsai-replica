import { useState, useEffect } from "react";
import "./style.css";

export default function CTASection() {
    return (
        <section className="cta-section">
            <h2 className="cta-title">It’s <span>your</span> business.<br/>We’re here to help it grow.</h2>
            <a href="#" className="cta-button">START FREE</a>
        </section>
    );
}