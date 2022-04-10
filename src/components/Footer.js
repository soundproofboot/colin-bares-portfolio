const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/soundproofboot">
        <img
          src={require(`../assets/icons/GitHub-Mark-64px.png`)}
          alt="GitHub icon"
          className="icon"
        />
      </a>
      <a href="https://www.linkedin.com/in/colin-bares-3296b6224/">
        <img
          src={require('../assets/icons/LI-Logo.png')}
          alt="LinkedIn icon"
          className="icon"
        />
      </a>
      <a href="https://www.instagram.com/colinedwinbares/">
        <img
          src={require('../assets/icons/Instagram_Glyph_Gradient_RGB.png')}
          alt="LinkedIn icon"
          className="icon"
        />
      </a>
    </footer>
  );
};

export default Footer;
