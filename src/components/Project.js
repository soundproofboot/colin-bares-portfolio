const Project = (props) => {

  const { title, url, description, stack, deployed, github } = props.project

  return (
    <div>
      <img src={url} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>Tech Stack</h3>
      <p>{stack}</p>
      <p>
        <a href={deployed}>Deployment</a>
      </p>
      <p>
        <a href={github}>Repo</a>
      </p>
    </div>
  );
}

export default Project
