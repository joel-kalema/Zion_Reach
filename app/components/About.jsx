const About = () => {
  return (
    <section id="about" className="overflow-hidden flex flex-wrap relative z-20">
      <div className="w-1/2 border-r border-b pl-20 p-10">
        <h2 className="text-4xl font-bold leading-tight mb-6">About</h2>
        <p className="text-lg mb-6 w-4/6">
          Zion Reach empowers businesses and churches with creative, impactful communication solutions. Through innovative marketing and professional content creation, we help connect audiences and drive growth.
        </p>
      </div>
      <div className="w-1/2 text-border text-9xl p-10">Zion</div>
      <div className="w-1/2 text-border text-9xl pl-20 p-10">Reach</div>
      <div className="w-1/2 border-l border-t p-10">
        <div className="mb-6">
          <h3 className="text-3xl font-bold mb-2">Our Mission</h3>
          <p className="text-lg mb-6 w-4/6">
            Zion Reach is dedicated to providing creative communication services that make a difference. We help our clients grow through professional content creation, strategic marketing, and building authentic connections with their audiences.
          </p>
        </div>
      </div>

    </section>
  );
};

export default About;
