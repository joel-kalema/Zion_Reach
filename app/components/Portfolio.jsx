import Image from "next/image";

const Portfolio = () => {
  const projects = [
    {
      title: "Modern Church Website",
      image: "/portfolio/project1.jpg",
      description: "A dynamic and engaging website for Grace Church, built with React and TailwindCSS.",
    },
    {
      title: "Social Media Campaign",
      image: "/portfolio/project2.jpg",
      description: "An impactful marketing campaign for ABC Corp, increasing engagement by 40%.",
    },
    {
      title: "E-commerce Branding",
      image: "/portfolio/project3.jpg",
      description: "Rebranding for Startup Inc., including logo design and promotional materials.",
    },
  ];

  return (
    <section className="bg-white py-10" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-md p-4 rounded-lg hover:shadow-lg transition-shadow"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-blue-700">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
