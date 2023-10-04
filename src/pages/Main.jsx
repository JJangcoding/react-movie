import React from "react";
import { Link } from "react-router-dom";
import "../style/main.css"

export default function Main({ title, posters,DOCID }) {
    // Update this with the correct poster URL from your data source
    const posterURL = posters.split("|")[0].trim();

    return (
        <Link to={`/${DOCID}`}>
            <div className="movie-container">
                <img src={posterURL} alt={title} />
                <div className="movie-info">
                    <h4>{title}</h4>
                </div>
            </div>
        </Link>

    )
}