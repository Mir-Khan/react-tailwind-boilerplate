// this file contains the information of whatever portfolio projects I want to present
import PlayGen from '../images/Play-Gen.png';
import ReactTodo from '../images/React Todo List.png';

// this object contains information on whatever I want to display, and the information needed for the 
// PortfolioItems component to render properly
const projectList = {
    "PlayGen": {
        title: "Play Gen",
        desc: "A playlist generation tool that utilizes the Spotify Web API to craft playlists based on a user's listening habits and inputs. This tool was created through basic HTML, CSS, and a NodeJS environment.",
        link: "https://play-gen.herokuapp.com/",
        image: PlayGen
    },
    "ReactTodoList": {
        title: "React Todo List",
        desc: "A simple to-do list application created using React, Redux, Bootstrap, Sass, JavaScript, and Node.JS. This app also keeps track of non-sensitive user data using the browser's local storage, essentially saving a user's list even when they log off.",
        link: "https://mk-react-todolist.herokuapp.com/",
        image: ReactTodo
    }
};

// the only think exported are the values of the object above, so this results in an array of objects
export const projectsInfo = Object.values(projectList);