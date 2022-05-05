
import Project from './Project'

const Portfolio = () => {
  const favMates = require('../assets/screenshots/fav-mates.png');
  const popCorn = require('../assets/screenshots/popcorn.png');
  const budgetTracker = require('../assets/screenshots/travel-buddy-screenshot.png');
  const photoPort = require('../assets/screenshots/photo-port.png');
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
    },
    {
      title: 'Fav Mates',
      description: 'Food delivery app',
      url: favMates,
      stack: 'Express, MySQL, Handlebars',
      deployed: 'https://lit-mountain-78827.herokuapp.com/',
      github: 'https://github.com/Nate-Huerd/Fav-Mates',
    },
    {
      title: 'Popcorn!',
      description: 'What to Watch?',
      url: popCorn,
      stack: 'fetchAPI, Bulma',
      deployed: 'https://crosenfrisk.github.io/Popcorn/',
      github: 'https://github.com/crosenfrisk/Popcorn',
    },
    {
      title: 'Travel Buddy',
      description: 'Off-line budget tracker',
      url: budgetTracker,
      stack: 'MongoDB, Webpack, PWA',
      deployed: 'https://hidden-temple-38628.herokuapp.com/',
      github: 'https://github.com/soundproofboot/travel-buddy',
    },
    {
      title: 'Stack Undertow',
      description: 'Simple Message Board CMS',
      url: stack,
      stack: 'Express, MySQL, Handlebars',
      deployed: 'https://immense-dawn-78650.herokuapp.com/',
      github: 'https://github.com/soundproofboot/stack-undertow',
    },
    {
      title: 'Random Color Test',
      description: 'Browser Art',
      url: random,
      stack: 'Vanilla JavaScript',
      deployed: 'https://soundproofboot.github.io/random-color-test/',
      github: 'https://github.com/soundproofboot/random-color-test',
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
