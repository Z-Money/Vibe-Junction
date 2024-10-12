import { useState, useEffect } from "react";
import './Vinyl.css';

export default function Vinyl({ vinyl, isPlaying }) {

    return (
        <img
            src={'/images/vinyl (1).svg'}
            alt='Record Vinyl'
            className={`vinyl ${isPlaying ? 'vinyl-playing' : ''}`}
        />
    );
}
