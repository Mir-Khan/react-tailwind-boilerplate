import React from 'react';
import PortfolioItems from '../components/resume-comps/PortfolioItems';
import SkillRows from '../components/resume-comps/SkillRows';
import ResumeHeading from '../components/resume-comps/ResumeHeading';
import { MdArrowDownward, MdArrowForward } from 'react-icons/md';
import { projectsInfo } from '../util/projectList';
import { eduClass } from '../util/styles';

// this page is responsible for showing whatever I want to advertise to employers

export default function Home() {
    return (
        <div className="mb-auto mx-4 md:mx-3 my-3">
            <div id="resume" className="flex flex-col justify-around">
                <ResumeHeading text="Education" />
                <div className="flex justify-center">
                    <ul className="text-sm md:text-xl sm:text-lg flex flex-col md:flex-row">
                        <li className={`${eduClass} mt-5 md:my-auto`}>
                            <p className="text-center my-2">Attended 2011-2015</p>
                            <p className="my-2">Brooklyn Technical High School</p>
                            <p className="text-center my-2"><span className="underline">GPA:</span> 3.95</p>
                        </li>
                        <MdArrowDownward className="md:hidden w-10 h-10 mx-auto my-3" />
                        <MdArrowForward className="hidden md:flex my-auto w-14 h-14 mx-5n" />
                        <li className={`${eduClass} my-2`}>
                            <p className="text-center my-2">Attended 2015-2019</p>
                            <p className="text-center my-2">Baruch College</p>
                            <p className="text-center my-2"><span className="underline">Major:</span>  Computer Information Systems</p>
                            <p className="text-center my-2"><span className="underline">GPA:</span>  3.81</p>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col text-center">
                    <ResumeHeading text="Skills" />
                    <div className="flex flex-col items-center">
                        <SkillRows />
                    </div>
                </div>
                <div className="flex flex-col">
                    <ResumeHeading text="Portfolio" />
                    <div className="flex flex-col md:flex md:flex-row mt-4 md:mt-10 mx-3 md:mx-10 mb-10">
                        {projectsInfo.map(item =>
                            <div key={item.title}>
                                <PortfolioItems link={item.link} name={item.title} desc={item.desc} image={item.image} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}