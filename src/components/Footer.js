import React from 'react';
import { GrLinkedin, GrGithub } from 'react-icons/gr';
function Footer() {
    const linkStyles = "pt-3";
    const iconStyles = "w-7 md:w-10 h-7 md:h-10 mx-4 cursor-pointer hover:text-blue-200";
    return (
        <footer className="h-auto bg-gray-700 text-white flex flex-row items-center justify-around">
            <div className="flex flex-row mx-4 pt-4 pb-3">
                <GrLinkedin className={`${iconStyles}`} />
                <GrGithub className={`${iconStyles}`} />
            </div>
            <div className="flex flex-row text-center text-sm items-center">
                <p className="py-3">Find me here: </p>
                <div className="flex flex-col ml-7 pb-1">
                    <a href="/" className={`${linkStyles}`}>LinkedIn</a>
                    <a href="/" className={`${linkStyles}`}>Github</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;