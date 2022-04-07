import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// import About from './components/About';
// import Contact from './components/Contact';
// import Portfolio from './components/Portfolio';
// import Resume from './components/Resume';

// import { useState } from 'react';

function App() {
  const panels = ['about', 'contact', 'portfolio', 'resume'];

  const [currentPanel, setCurrentPanel] = useState(panels[0]);

  console.log(currentPanel)
  return (
    <div className="App">
      <Header
        panels={panels}
        setCurrentPanel={setCurrentPanel}
        currentPanel={currentPanel}
      />
      <main></main>
      <Footer />
    </div>
  );
}

export default App;
