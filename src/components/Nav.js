const Nav = (props) => {
  const { panels, setCurrentPanel, currentPanel } = props;

  return (
    <nav>
      <ul>
        {panels.map((panel) => (
          <li key={panel}>
            <span
              className={panel === currentPanel ? 'navActive' : undefined}
              onClick={() => {
                setCurrentPanel(panel);
              }}
            >
              {panel}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
