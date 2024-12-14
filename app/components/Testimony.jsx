const Testimony = () => {
    const testimonials = [
      {
        name: "John Doe",
        role: "CEO, ABC Corp",
        message: "Zion Reach transformed our marketing strategy. Their professionalism and creativity are unmatched!",
      },
      {
        name: "Christopher Beleke Tabu",
        role: "Pastor, TFC Dallas Church",
        message: "Thanks to Zion Reach, our message now reaches a wider audience. Highly recommend their services!",
      },
      {
        name: "Michael Brown",
        role: "Founder, Startup Inc.",
        message: "Their branding expertise gave our company a fresh new look. Truly a pleasure to work with!",
      },
    ];
  
    return (
      <section className="bg-[#8F78EA] py-40" id="testimonials">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#fff] mb-16">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6"
              >
                <p className="text-gray-600 italic mb-4">&quot;{testimonial.message}&quot;</p>
                <h3 className="text-lg font-semibold text-blue-700">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimony;
  