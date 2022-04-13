const Project = (props) => {

  const { title, url, stack, deployed, github } = props.project

  return (
    <section className='project'>
      <img src={url} alt="" className='screenshot'/>
      <div className='project-text'>
        <div className='title-line'>
          <h2>{title}</h2>
        </div>
        <div className='tech-line'>
       
          <p>{stack}</p>
        </div>
        <div className='link-line'>
          <p>
            <a href={deployed}>LIVE</a>
          </p>
          <p>
            <a href={github}>REPO</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Project
