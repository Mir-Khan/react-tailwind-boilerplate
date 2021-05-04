# React-Tailwind Boilerplate with some basic features

#### Things to know
1. Packages that are used: 
    * [React-Icons](https://react-icons.github.io/react-icons)
    * [Tailwind-CSS](https://tailwindcss.com/docs/guides/create-react-app)
    * [React Router](https://github.com/ReactTraining/react-router)
    * [Headless UI](https://headlessui.dev/)
    * [Heroicons](https://heroicons.com/)
2. Components explained: 
    * Content
        * Just a simple test for a responsive body for wherever the content of the page will be
    * Navbar
        * Fixed to the top of the website
        * Has space for website branding
        * Colors linked to **Footer** component in the *styles* file in the *util* folder
        * Links mapped from the array in *linkList* in the *util* folder
    * HeaderLinks
        * Contains navigation links on larger screens
        * In the **Navbar** component
    * DropDown
        * Component for mobile screens that displays links
        * In the **Navbar** component
    * Footer
        * Fixed to the bottom of the website
        * Contains any outside links, such as social media pages
        * Shared colors with the **Navbar** component
        * Links mapped from the array in *linkList* in the *util* folder
    * DarkToggle
        * Uses **themeContext** to get the current page of the theme stored in the Local Storage of the browser
        * Toggles night mode, letting **Tailwind CSS** styles switch from normal styles to dark styles and vice versa 