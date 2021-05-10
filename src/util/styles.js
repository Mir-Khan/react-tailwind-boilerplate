//pretty much everything is the same for the footer and nav colors except the side of the border
const footerNavBase = "bg-gray-100 text-black dark:bg-gray-900 dark:text-white border-black dark:border-white border-opacity-25"
export const colors = {
    content: "bg-gray-50 text-black dark:bg-gray-700 dark:text-white",
    footer: `${footerNavBase} border-t`,
    nav: `${footerNavBase} border-b`
};