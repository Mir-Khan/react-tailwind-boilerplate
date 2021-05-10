import React from 'react';
import { SiJavascript, SiHtml5, SiJava, SiTailwindcss, SiCss3, SiReact, SiNodeDotJs, SiPython, SiSass } from 'react-icons/si';
import { siIconBaseClass } from '../../util/styles';

// responsible for making the grid displaying my skills
export default function SkillRows() {
    // make an object with the icons used with associating keys, can change this any time
    let siIconObj = {
        "HTML5": <SiHtml5 className={`${siIconBaseClass}`} />, "CSS": <SiCss3 className={`${siIconBaseClass}`} />,
        "JavaScript": <SiJavascript className={`${siIconBaseClass}`} />, "NodeJS": <SiNodeDotJs className={`${siIconBaseClass}`} />,
        "React": <SiReact className={`${siIconBaseClass}`} />, "Tailwind CSS": <SiTailwindcss className={`${siIconBaseClass}`} />,
        "Sass": <SiSass className={`${siIconBaseClass}`} />, "Java": <SiJava className={`${siIconBaseClass}`} />,
        "Python": <SiPython className={`${siIconBaseClass}`} />
    }
    let keys = Object.keys(siIconObj);
    // each icon is wrapped in a flex-col div to include text under it with the name of the icon
    let icons = keys.map((item, index) => <div className="flex flex-col" key={`icon-${index}`}>{siIconObj[item]}<p>{item}</p></div>);
    //whatever multiple of icons one wants to display in a row should be something that can divide the total number of icons
    let multiple = 3;
    let rows = [];
    //the rows array is filled with icons in whatever the multiple is listed, using the helper method rowTemplate
    for (let i = 0; i < icons.length; i++) {
        if (i % multiple === 0 && i !== 0) {
            rows.push(rowTemplate(icons.slice(i - multiple, i), i));
        } else if (i === icons.length - 1) {
            rows.push(rowTemplate(icons.slice(i - multiple + 1), i));
        }
    }
    //then the rows array is rendered
    return (
        <>
            {rows}
        </>
    )
}
// this function wraps each row with a div and gives a key to each row
function rowTemplate(icons, key) {
    return (
        <div className="flex flex-row" key={`icon-row-${key}`}>
            {icons}
        </div>
    )
}