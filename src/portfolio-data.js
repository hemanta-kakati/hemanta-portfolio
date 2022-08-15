import reactAccordionImage from "./images/react-accordion-project.png";
import reactCartImage from "./images/react-cart.png";
import reactMealsImage from "./images/react-meals.png";
import reactPixelAspireImage from "./images/react-pixelaspire.png";
const items = [
  {
    id: 1,
    img: reactAccordionImage,
    title: "Accordion",
    tech: "React",
    info: "Demonstrate how accordions work",
    url: "https://hk-accordion.netlify.app/",
    repo: "https://github.com/hemanta-kakati/hk-accordion",
    tags: ["useState"],
  },
  {
    id: 2,
    img: reactCartImage,
    title: "Add to cart app",
    tech: "React",
    info: "useReduce is used to group states and store in one place",
    url: "https://hk-cart.netlify.app/",
    repo: "https://github.com/hemanta-kakati/hk-cart",
    tags: ["useState", "context api", "useFetch", "useReduce"],
  },
  {
    id: 3,
    img: reactMealsImage,
    title: "Meal recipe app",
    tech: "React",
    info: "theMealDb api is used to fetch recipes by name and categories, routing concept is also used",
    url: "https://hk-meal.netlify.app/",
    repo: "https://github.com/hemanta-kakati/hk-meal",
    tags: [
      "useState",
      "context api",
      "useFetch",
      "fetch api",
      "react router 6",
    ],
  },
  {
    id: 4,
    img: reactPixelAspireImage,
    title: "A Graphics Company portfolio site ",
    tech: "React",
    info: "Preloading feature is used along side with masonry layouts, animations, react router",
    url: "https://pixelaspire.netlify.app/",
    repo: "https://github.com/hemanta-kakati/pixelaspire",
    tags: ["useState", "context api", "useFetch", "framerjs", "axios"],
  },
];

export default items;
