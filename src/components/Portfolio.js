
import Project from './Project'

const Portfolio = () => {
  const favMates = require('../assets/screenshots/fav-mates.png');
  const popCorn = require('../assets/screenshots/popcorn.png');
  const budgetTracker = require('../assets/screenshots/travel-buddy-screenshot.png');
  const photoPort = require('../assets/screenshots/photo-port.png');
  const stack = require('../assets/screenshots/stack-undertow.png')
  const random = require('../assets/screenshots/random-color-test.png')

  const projects = [
    {
      title: 'Fav Mates',
      description: 'Mock food delivery app',
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
      title: 'Budget Tracker',
      description: 'Track your expenses and deposits, even out of network',
      url: budgetTracker,
      stack: 'MongoDB, Webpack, PWA',
      deployed: 'https://hidden-temple-38628.herokuapp.com/',
      github: 'https://github.com/soundproofboot/travel-buddy',
    },
    {
      title: 'Photo Port',
      description: 'Professional Photography Portfolio',
      url: photoPort,
      stack: 'React, Bootstrap',
      deployed: 'https://soundproofboot.github.io/photo-port/',
      github: 'https://github.com/soundproofboot/photo-port',
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
    
    <div>
    {projects.map((project, i) => (
      <Project project = {project} key={project.title}/>
    ))}
    </div>
  )
}

export default Portfolio
