import React, { useState } from 'react'
import Dark from './icons/Dark.jsx'
import Light from './icons/Light.jsx';

const DarkModeButton = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prevState => !prevState);
    };
    return (
        <div>
            <button
                className="p-2 flex flex-row items-center border-2 border-gray-300 rounded-lg text-sm font-bold text-primary-text hover:bg-[#F4F6F6] focus:outline-none "
                onClick={toggleTheme}
            >
                <span className="text-md">{isDarkMode ? <Dark/> : <Light/>}</span>
            </button>
        </div>
    )
}

export default DarkModeButton
