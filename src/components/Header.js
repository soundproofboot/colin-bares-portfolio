import Nav from './Nav'

const Header = (props) => {

  const {
    panels,
    setCurrentPanel,
    currentPanel
  } = props;

  return (
    <header>
      <h1>Colin Bares</h1>
      <Nav
        panels={panels}
        setCurrentPanel={setCurrentPanel}
        currentPanel={currentPanel}
      />
    </header>
  );
}

export default Header
