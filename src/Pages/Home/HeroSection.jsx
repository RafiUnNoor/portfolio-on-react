export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Rafi</p>
          <h1 className="hero--section--title">
            
            Web Deisgner & Developer
          </h1>
          <p className="hero--section-description">
            I love researching and find a way for best user experience.
            <br /> Passionate about applying that thing in development.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/rafi1.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
