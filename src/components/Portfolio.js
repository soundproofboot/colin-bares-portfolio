
import Project from './Project'

const Portfolio = () => {
  const favMates = require('../assets/screenshots/fav-mates.png');
  const popCorn = require('../assets/screenshots/popcorn.png');
  const budgetTracker = require('../assets/screenshots/travel-buddy-screenshot.png');
  const stack = require('../assets/screenshots/stack-undertow.png')
  const random = require('../assets/screenshots/random-color-test.png')
  const parks = require('../assets/screenshots/park.png')

  const projects = [
    {
      title: 'National Park Spotter',
      description: 'National Park Directory',
      url: parks,
      stack: 'React, MongoDB, GraphQL API',
      deployed: 'https://pacific-brushlands-65513.herokuapp.com/',
      github: 'https://github.com/SepidehAyani/national-parks-spotter',
      details:
        "Interactive U.S. Map showing all National Parks and details about them. User's can register, leave comments, and save a list of parks for future visits",
    },
    {
      title: 'Fav Mates',
      description: 'Food delivery app',
      url: favMates,
      stack: 'Express, MySQL, Handlebars',
      deployed: 'https://lit-mountain-78827.herokuapp.com/',
      github: 'https://github.com/Nate-Huerd/Fav-Mates',
      details:
        "Food delivery app allowing user's to place orders from mock restaurants.",
    },
    {
      title: 'Popcorn!',
      description: 'What to Watch?',
      url: popCorn,
      stack: 'fetchAPI, Bulma',
      deployed: 'https://crosenfrisk.github.io/Popcorn/',
      github: 'https://github.com/crosenfrisk/Popcorn',
      details:
        'Popcorn! is a mobile-friendly application that helps users connect with new content based on personalized keyword searches, genres selected, and trending shows / movies according to two open source APIs: Online Movie Database and The Movie DB.',
    },
    {
      title: 'Travel Buddy',
      description: 'Off-line budget tracker',
      url: budgetTracker,
      stack: 'MongoDB, Webpack, PWA',
      deployed: 'https://hidden-temple-38628.herokuapp.com/',
      github: 'https://github.com/soundproofboot/travel-buddy',
      details:
        "Travel Buddy is a budget tracking app designed for user's on the move, when network connection is not always reliable.",
    },
    {
      title: 'Stack Undertow',
      description: 'Simple Message Board CMS',
      url: stack,
      stack: 'Express, MySQL, Handlebars',
      deployed: 'https://immense-dawn-78650.herokuapp.com/',
      github: 'https://github.com/soundproofboot/stack-undertow',
      details:
        "Stack Undertow is a demo full-stack CMS style blog. It's built with the MVC paradigm.",
    },
    {
      title: 'Random Color Test',
      description: 'Browser Art',
      url: random,
      stack: 'Vanilla JavaScript',
      deployed: 'https://soundproofboot.github.io/random-color-test/',
      github: 'https://github.com/soundproofboot/random-color-test',
      details:
        'Random Color Test is a simple generative art project for the web browser.',
    },
  ];
  return (
    
    <div className='portfolio'>
    {projects.map((project, i) => (
      <Project project = {project} key={project.title}/>
    ))}
    </div>
  )
}

export default Portfolio
