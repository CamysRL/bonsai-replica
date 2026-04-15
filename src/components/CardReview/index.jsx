import { useState, useEffect } from "react";
import "./style.css";
import quoteIcon from "../../assets/quote-icon.svg";

export default function CardReview({
  photoReviewer,
  content,
  nameReviewer,
  jobReviewer,
}) {
  return (
    <div className="card-review">
      <div className="upper-card">
        <img
          className="photo-reviewer"
          src={photoReviewer}
          alt={`Foto de ${nameReviewer}`}
        />

        <img src={quoteIcon} alt="Ícone de citação" />
      </div>
      <div className="card">
        <p className="content">{`"${content}"`}</p>
        <div className="reviewer-info">
          <p className="name-reviewer">{nameReviewer}</p>
          <p className="job-reviewer">{jobReviewer}</p>
        </div>
      </div>
    </div>
  );
}
