import { useState, useEffect } from "react";
import "./style.css";
import { Hero } from "../../components";

export default function About() {
    return (
        <div className="about">
            <Hero title="About Us" text="Learn more about our company and our mission." />
        </div>
    )
}