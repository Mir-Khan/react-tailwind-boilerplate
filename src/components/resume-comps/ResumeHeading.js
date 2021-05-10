import React from 'react';
import { hrClass } from '../../util/styles';

// the function that is responsible for creating the resume section headings
function ResumeHeading({ text }) {
    return (
        <>
            <div className="flex flex-row justify-center mt-6">
                <p className="text-xl font-bold">{text}</p>
            </div>
            <div className="flex justify-center">
                <hr className={`${hrClass}`} />
            </div>
        </>
    )
}

export default ResumeHeading;