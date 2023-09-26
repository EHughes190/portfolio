import FB from "../assets/images/flappy-clone.png";
import JSC from "../assets/images/js-calculator.png";
import MT from "../assets/images/morse-translator.png";
import PA from "../assets/images/punk-api.png";
import FS from "../assets/images/food-and-stuff.png";
import NN from "../assets/images/next-news.png";
import PT from "../assets/images/platformer.png";
import GS from "../assets/images/go.png";
import YR from "../assets/images/yelp-restaurant.png";
import { Project, Skills } from "../types";


const projects: Project[] = [
  {
    title: "2D Platformer Template",
    img: PT,
    githubUrl: "https://github.com/EHughes190/platformer-template",
    hostedUrl: "",
    skills: [Skills.HTML, Skills.TYPESCRIPT],
    description:
      "A 2d platformer template built using HTML Canvas in both TS and JS to give the starting building blocks for any 2d game",
    id: "7",
  },
  {
    title: "GO Web Scraper",
    img: GS,
    githubUrl: "https://github.com/EHughes190/simple-go-scraper",
    hostedUrl: "",
    skills: [Skills.GO],
    description: "A simple web scraper built in Go, utilising GoQuery package",
    id: "8",
  },
  {
    title: "Yelp Restaurant Fullstack",
    img: YR,
    githubUrl: "https://github.com/EHughes190/yelp-restaurants",
    hostedUrl: "",
    skills: [Skills.TYPESCRIPT, Skills.EXPRESS, Skills.REACT, Skills.PSQL],
    description:
      "A review app where you can add, review and leave comments on restaurants. It uses PSQL as the database, express for the server, and react for the front end.",
    id: "9",
  },

  {
    title: "Next News",
    img: NN,
    githubUrl: "https://github.com/EHughes190/Next-News",
    hostedUrl: "https://next-news-chi.vercel.app/",
    skills: [
      Skills.NEXTJS,
      Skills.REACT,
      Skills.HTML,
      Skills.FIGMA,
      Skills.TYPESCRIPT,
    ],
    description:
      "A news app that displays current news stories from across several categories. Built using next.js and Typescript, the pages are rendered on build, fetching from the newsapi.org. Figma, Framer motion and SCSS are used for the styling.",
    id: "1",
  },
  {
    title: "Punk API",
    img: PA,
    githubUrl: "https://github.com/EHughes190/Punk-API",
    hostedUrl: "https://punk-api-c310d.web.app/",
    skills: [Skills.REACT, Skills.SASS, Skills.FIREBASE, Skills.FIGMA],
    description:
      "An app which fetches information from the Punk API, and displays this information as cards. The results can be filtered by ABV %, and by 'Classics', or by searching directly. Hosted with Firebase.",
    id: "3",
  },
  {
    title: "Flappy Clone",
    img: FB,
    githubUrl: "https://github.com/EHughes190/Flappy-Clone",
    hostedUrl: "https://ehughes190.github.io/Flappy-Clone/",
    skills: [Skills.HTML, Skills.SASS, Skills.JAVASCRIPT],
    description:
      "A browser based, infinite runner game, built using HTML, SCSS and JavaScript. The core functionality of the game is created using JavaScript.  Although the game is best enjoyed on a mobile/ portrait device, it is scalable to any device width.",
    id: "4",
  },
  {
    title: "Morse Translator",
    img: MT,
    githubUrl: "https://github.com/EHughes190/morse-translator",
    hostedUrl: "https://ehughes190.github.io/morse-translator/",
    skills: [Skills.HTML, Skills.SASS, Skills.JAVASCRIPT, Skills.JEST],
    description:
      "A translator app built using HTML, SCSS and JavaScript. This project allows an input to be translated from English to Morse, and vice versa. This was a TDD project using Jest.",
    id: "5",
  },
  {
    title: "JS Calculator",
    img: JSC,
    githubUrl: "https://github.com/EHughes190/JS-Calculator",
    hostedUrl: "https://ehughes190.github.io/JS-Calculator/",
    skills: [Skills.HTML, Skills.SASS, Skills.JAVASCRIPT, Skills.CYPRESS],
    description:
      "A calculator built with JavaScript, HTML and SCSS. This project allowed me to practise my JS skills and fundamentals, as well as implement e2e testing using cypress.",
    id: "6",
  },
];

export default projects;
