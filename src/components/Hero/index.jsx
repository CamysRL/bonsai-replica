import { useState, useEffect } from "react";
import "./style.css";

export default function Hero({ title, text }) {
    return (
        <div className="hero">
            <h1 className="hero-title">{title}</h1>
            <p className="hero-description">
                {text}
            </p>
            <form className="hero-form">
                <input type="email" placeholder="Enter your email" className="hero-input" />
                <button type="submit" className="hero-button">START FREE</button>
            </form>
        </div>
    )
}
