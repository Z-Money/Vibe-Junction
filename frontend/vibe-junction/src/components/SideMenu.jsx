//React Imports
import { useState, useEffect } from 'react'

//CSS Imports
import './SideMenu.css'

//Component Imports

export default function SideMenu({ updateCurrentTab }) {
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        updateCurrentTab(activeTab);
        const activeLine = document.querySelector('.active-line');
        switch (activeTab) {
            case 0:
                activeLine.style.left = '0%';
                activeLine.style.width = document.getElementsByClassName('side-menu-tab')[0].style.width;
                break;
            case 1:
                activeLine.style.left = '33%';
                activeLine.style.width = document.getElementsByClassName('side-menu-tab')[1].style.width;
                break;
            case 2:
                activeLine.style.left = '66%';
                activeLine.style.width = document.getElementsByClassName('side-menu-tab')[2].style.width;
                break;
        }
    }, [activeTab]);
    return (
        <div className="side-menu">
            <p className="side-menu-tab" onClick={() => setActiveTab(0)}>Up Next</p>
            <p className="side-menu-tab" onClick={() => setActiveTab(1)}>Lyrics</p>
            <p className="side-menu-tab" onClick={() => setActiveTab(2)}>Artist Info</p>
            <div className="active-line"></div>
        </div>
    )
}