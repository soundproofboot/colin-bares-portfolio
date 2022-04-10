import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

// import { useState } from 'react';

function App() {
  const panels = ['about', 'contact', 'portfolio', 'resume'];

  const [currentPanel, setCurrentPanel] = useState(panels[2]);

  return (
    <div className="App">
      <Header
        panels={panels}
        setCurrentPanel={setCurrentPanel}
        currentPanel={currentPanel}
      />
      <main>
        {currentPanel === 'about' && <About />}
        {currentPanel === 'contact' && <Contact />}
        {currentPanel === 'resume' && <Resume />}
        {currentPanel === 'portfolio' && <Portfolio />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
