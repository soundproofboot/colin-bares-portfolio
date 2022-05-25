const self = require('../assets/self.jpg')

const About = () => {
  return (
    <div id='about-section'>
    <div id='about-pic'>
    <img src={self} alt="Colin Bares" className='self'/>
    <p id='caption' >Colin posing with delicious corndog.</p>
    </div>
      <section id='write-up'>
        <p>
           Dear interested party,
        </p>
        <p id='main-p'>
          I'm a full stack developer based in Minneapolis, MN. With a background in physical inventory as well as the arts, I'm able to combine creativity with an unmatched attention to detail. I'm most interested in using my new coding super powers to explore where the arts meet technology.
        </p><br />
        <div id='sign-off'>
          <p>Cheers,</p>
          <p>Colin Edwin Bares</p>
        </div>
      </section>
    </div>
  );
}

export default About