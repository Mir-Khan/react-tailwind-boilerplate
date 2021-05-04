import React, { useContext } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { ThemeContext } from './themeContext';

function DarkToggle(){
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className="flex transition duration-500 ease-in-out rounded-full p-2 items-center">
            {theme === 'dark' ? (
                <HiSun
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-white text-2xl cursor-pointer"
                />
            ) : (
                <HiMoon
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-black text-2xl cursor-pointer"
                />
            )}
        </div>
    );
};

export default DarkToggle;