import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Dark from './icons/Dark.jsx';
import Light from './icons/Light.jsx';

const DarkModeButton = () => {
    // Recuperar el valor del modo oscuro desde las cookies, o establecerlo en false por defecto
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return Cookies.get('dark-mode') === 'true';
    });

    // Aplicar el tema oscuro o claro al cargar el componente
    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        // Guardar la preferencia en cookies
        Cookies.set('dark-mode', isDarkMode, { expires: 365 }); // Caduca en 365 días
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prevState => !prevState);
    };

    return (
        <div>
            <button
                className="bg-gray-100 p-2 flex flex-row items-center border-2 border-gray-300 rounded-lg text-sm font-bold text-primary-text hover:bg-[#F4F6F6] hover:text-secondary focus:outline-none dark:bg-[#212121] dark:border-gray-600 dark:hover:bg-gray-700 dark:text-gray-400"
                onClick={toggleTheme}
            >
                <span className="text-md">{isDarkMode ? <Dark/> : <Light/>}</span>
            </button>
        </div>
    );
};

export default DarkModeButton;