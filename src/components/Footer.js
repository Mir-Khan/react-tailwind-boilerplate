import React from 'react';
import { GrLinkedin, GrGithub, GrTwitter } from 'react-icons/gr';

function Footer(colors) {
    const linkStyles = "pt-3 hover:underline md:mx-5 mx-2";
    const iconStyles = "w-7 md:w-10 h-7 md:h-10 md:mx-4 mx-2 cursor-pointer hover:text-indigo-600 dark:hover:text-red-600";

    return (
        <footer className={`h-auto flex flex-row items-center justify-around ${colors.styles} py-5`}>
            <div className="flex flex-row mx-4 pt-4 pb-3">
                <GrLinkedin className={`${iconStyles}`} />
                <GrGithub className={`${iconStyles}`} />
                <GrTwitter className={`${iconStyles}`} />
            </div>
            <div className="flex flex-col text-center text-sm items-center">
                <p className="py-3">Find me here: </p>
                <div className="flex flex-row">
                    <a href="/" className={`${linkStyles}`}>LinkedIn</a>
                    <a href="/" className={`${linkStyles}`}>Github</a>
                    <a href="/" className={`${linkStyles}`}>Twitter</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;