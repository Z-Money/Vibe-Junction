import { useState } from "react";
import './DurationBar.css';

export default function Duration({ duration }) {
    const [seconds, setSeconds] = useState(0);

    /*function progressBar() {
        const bar = document.getElementsByClassName("progress-bar-foreground")[0];
        console.log(bar);
        const width = parseFloat(bar.style.width);
        let nextWidth = width;
        console.log(width);
        let id = setInterval(frame, 25);
        function frame() {
            if (nextWidth >= width + 20) {
                clearInterval(id);
            }
            else {
                nextWidth++;
                console.log(nextWidth);
                bar.style.width = nextWidth + '%';
            }
        }
    }*/

    return (
        <div className="duration">
            <p>{duration.start}</p>
            <div className="duration-bar">
                <div className="duration-bar-background">
                    <div className="duration-bar-foreground">
                    </div>
                </div>
            </div>
            <p>{duration.end}</p>
        </div>
    )
}