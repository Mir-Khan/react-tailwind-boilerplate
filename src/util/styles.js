//pretty much everything is the same for the footer and nav colors except the side of the border
const footerNavBase = "bg-gray-50 text-black dark:bg-black dark:text-white border-black dark:border-white border-opacity-25"
export const colors = {
    content: "bg-white text-black dark:bg-red-900 dark:text-white",
    footer: `${footerNavBase} border-t`,
    nav: `${footerNavBase} border-b`
};
//class for the hr element
export const hrClass = "mb-2 border border-black dark:border-gray-50 border-opacity-20 dark:border-opacity-70 w-5/6";
// class for the siIcon package used for the skill list
export const siIconBaseClass = "mx-6 md:mx-14 h-14 w-14 my-8";
// class for education info
export const eduClass = "bg-gray-50 dark:bg-pink-700 border-black dark:border-white border-2 rounded-xl p-5 text-lg font-mono shadow-lg";