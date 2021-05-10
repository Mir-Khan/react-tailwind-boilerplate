import React from 'react';
import ProfilePic from '../images/Profile.jpg';

export default function About() {
    return (
        <div className="mt-10">
            <div className="flex flex-col">
                <div className="text-center mb-10">
                    <h3 className="text-xl">Hello! My name is <span className="font-bold">Mir Khan</span>.</h3>
                </div>
                <div id="about-image" className="mx-auto">
                    <img src={ProfilePic} alt="It's the creator of this wonderful portfolio website, Mir Khan!" 
                        className="rounded-full border-4 border-black dark:border-white shadow-2xl h-72 w-72 md:h-96 md:w-96"
                    />
                </div>
                <div id="about-text" className="mt-8 px-5 mb-10">
                    <p className="text-lg bg-gray-50 dark:bg-pink-700 border-2 border-black dark:border-white px-2 rounded-lg shadow-xl">Hi there, I'm a developer from Brooklyn, New York! I love learning new things in 
                    coding all the time and putting my knowledge to work by creating cool web apps. Outside of that
                    I'm a huge fan of Marvel films and love to play video games! I hope you'll take the time to
                    connect with me on the social media platforms listed in my footer and get to know me even more.
                    I'd love to connect and grow with other like-minded developers on their coding journeys! Thanks for 
                    reading and I hope to hear from you!</p>
                </div>
            </div>
        </div>
    )
}