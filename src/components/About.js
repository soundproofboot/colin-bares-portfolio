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
          I'm a full stack developer based in Minneapolis, MN. What I currently lack in experience I more than make up for with pure moxie. I'm most interested in exploring where the arts meet technology. It's fun in there!
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