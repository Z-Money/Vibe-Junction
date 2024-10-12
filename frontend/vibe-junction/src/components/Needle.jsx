//React Imports
import { useState, useEffect } from 'react'

//CSS Imports
import './Needle.css'

//Component Imports

export default function Needle({ isPlaying, updateIsPlaying }) {

    return (
        <img src="/images/Needle.webp" alt="Needle" className={`needle ${isPlaying ? 'needle-playing' : ''}`} onClick={() => updateIsPlaying()} />
    )
}