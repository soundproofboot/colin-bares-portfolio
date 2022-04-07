import Project from './Project'

const Portfolio = () => {
  const projects = [
    {
      title: 'Fav Mates',
      description: 'Mock food delivery app',
      url: 'https://via.placeholder.com/150',
      stack: 'Express, MySQL, Handlebars',
      deployed: 'https://lit-mountain-78827.herokuapp.com/',
      github: 'https://github.com/Nate-Huerd/Fav-Mates',
    },
    {
      title: 'Popcorn!',
      description: 'What to Watch?',
      url: 'https://via.placeholder.com/150',
      stack: 'fetchAPI, Bulma',
      deployed: 'https://crosenfrisk.github.io/Popcorn/',
      github: 'https://github.com/crosenfrisk/Popcorn',
    },
    {
      title: 'Budget Tracker',
      description: 'Track your expenses and deposits, even out of network',
      url: 'https://via.placeholder.com/150',
      stack: 'MongoDB, Webpack, PWA',
      deployed: 'https://hidden-temple-38628.herokuapp.com/',
      github: 'https://github.com/soundproofboot/travel-buddy',
    },
    {
      title: 'Photo Port',
      description: 'Professional Photography Portfolio',
      url: 'https://via.placeholder.com/150',
      stack: 'React, Bootstrap',
      deployed: 'https://soundproofboot.github.io/photo-port/',
      github: 'https://github.com/soundproofboot/photo-port',
    },
    {
      title: 'Stack Undertow',
      description: 'Simple Message Board CMS',
      url: 'https://via.placeholder.com/150',
      stack: 'Express, MySQL, Handlebars',
      deployed: 'https://immense-dawn-78650.herokuapp.com/',
      github: 'https://github.com/soundproofboot/stack-undertow',
    },
    {
      title: 'Random Color Test',
      description: 'Browser Art',
      url: 'https://via.placeholder.com/150',
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
