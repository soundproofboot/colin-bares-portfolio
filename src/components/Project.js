const Project = (props) => {

  const { title, url, description, stack, deployed, github } = props.project

  return (
    <section className='project'>
      <img src={url} alt="" className='screenshot'/>
      <div className='project-text'>
        <div className='title-line'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className='tech-line'>
          <h3>Tech Stack</h3>
          <p>{stack}</p>
        </div>
        <div className='link-line'>
          <p>
            <a href={deployed}>Live</a>
          </p>
          <p>
            <a href={github}>Repo</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Project
