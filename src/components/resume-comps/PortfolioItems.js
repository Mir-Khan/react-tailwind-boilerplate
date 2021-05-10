import React from 'react';

export default function PortfolioItems({ link, name, desc, image }) {
    return (
        <div className="bg-gray-100 dark:bg-pink-700 dark:text-white border-4 border-black dark:border-white shadow-xl rounded-lg mb-10 mx-5 h-full">
            <a href={link} target="_blank" rel="noreferrer">
                <img src={image} alt={`${name} Project`} className="w-5/6 md:w-3/4 mx-auto mb-4 mt-8 shadow-lg" />
            </a>
            <div className="flex flex-col items-center mb-4">
                <p className="text-center mb-2 underline text-lg font-bold">{name}</p>
                <p className="w-11/12 text-center">{desc}</p>
            </div>
        </div>
    )
}