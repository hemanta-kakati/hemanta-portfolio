import reactAccordionImage from "./images/react-accordion-project.png";
import reactCartImage from "./images/react-cart.png";
import reactMealsImage from "./images/react-meals.png";
import reactPixelAspireImage from "./images/react-pixelaspire.png";
import htmlCompanyPortfolioImage from "./images/html-company-portfolio.png";
import htmlDiagnosisImage from "./images/html-diagnosis.png";
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
  {
    id: 5,
    img: htmlCompanyPortfolioImage,
    title: "Portfolio template for a company site",
    tech: "HTML CSS JS",
    info: "An html template made with bootstrap, javascript is used for scrolling navbar  using IntersectionObserver and for filter menus",
    url: "https://hemanta-kakati.github.io/company-portfolio-template/",
    repo: "https://github.com/hemanta-kakati/company-portfolio-template",
    tags: ["IntersectionObserver", "html5", "css3", "bootstrap 4"],
  },
  {
    id: 6,
    img: htmlDiagnosisImage,
    title: "Template for a diagnosis site project",
    tech: "HTML CSS JS",
    info: "bootstrap is used for responsive design",
    url: "https://hemanta-kakati.github.io/diagnosisProject/",
    repo: "https://github.com/hemanta-kakati/diagnosisProject",
    tags: ["html5", "css3", "bootstrap 4"],
  },
];

export default items;
