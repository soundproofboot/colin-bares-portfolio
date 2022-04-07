import { useEffect } from 'react';
import { upperCase } from '../utils';

const Nav = (props) => {
  const { panels, setCurrentPanel, currentPanel } = props;

  useEffect(() => {
    document.title = upperCase(currentPanel);
  }, [currentPanel]);

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
              {upperCase(panel)}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
