export const metadata = {
  title: 'Services - The Balthazar Project',
  description: 'Professional web development, SEO optimization, and digital strategy services by The Balthazar Project.',
}

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and applications built with cutting-edge technologies.',
      features: [
        'Custom Website Development',
        'Web Application Development',
        'E-commerce Solutions',
        'Progressive Web Apps',
      ],
    },
    {
      title: 'SEO Optimization',
      description: 'Comprehensive SEO services to improve your online visibility.',
      features: [
        'Technical SEO',
        'Content Optimization',
        'Local SEO',
        'Performance Optimization',
      ],
    },
    {
      title: 'Digital Strategy',
      description: 'Strategic digital solutions for business growth.',
      features: [
        'Digital Transformation',
        'Market Analysis',
        'Growth Strategy',
        'Technology Consulting',
      ],
    },
    {
      title: 'AI Solutions',
      description: 'Innovative AI integration for modern businesses.',
      features: [
        'AI Integration',
        'Automation Solutions',
        'Data Analysis',
        'Machine Learning Implementation',
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-base-200 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-8">Our Services</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="card-body">
                  <h2 className="card-title text-2xl mb-4">{service.title}</h2>
                  <p className="mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-base-200 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals.
          </p>
          <a href="/contact" className="btn btn-primary btn-lg">
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
