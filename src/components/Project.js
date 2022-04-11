const Project = (props) => {

  const { title, url, description, stack, deployed, github } = props.project

  return (
    <div className='project'>
      <img src={url} alt="" className='screenshot'/>
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>Tech Stack</h3>
      <p>{stack}</p>
      <p>
        <a href={deployed}>Live</a>
      </p>
      <p>
        <a href={github}>Repo</a>
      </p>
    </div>
  );
}

export default Project
