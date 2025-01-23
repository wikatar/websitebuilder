export const metadata = {
  title: 'Portfolio - The Balthazar Project',
  description: 'Explore our portfolio of successful web development and digital transformation projects.',
}

export default function Portfolio() {
  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce solution with advanced features and seamless user experience.',
      tags: ['Next.js', 'React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'SEO Optimization',
      category: 'Digital Marketing',
      description: 'Comprehensive SEO strategy that increased organic traffic by 200%.',
      tags: ['SEO', 'Content Strategy', 'Analytics'],
    },
    {
      title: 'AI-Powered Platform',
      category: 'AI Solutions',
      description: 'Custom AI solution for automated content management and optimization.',
      tags: ['Python', 'Machine Learning', 'NLP'],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-base-200 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-8">Our Portfolio</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
                <div className="card-body">
                  <div className="badge badge-primary mb-4">{project.category}</div>
                  <h2 className="card-title text-2xl mb-4">{project.title}</h2>
                  <p className="mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="badge badge-outline">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="bg-base-200 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Case Studies</h2>
          <div className="max-w-4xl mx-auto">
            <div className="card bg-base-100 shadow-xl mb-8">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">Success Story: E-commerce Growth</h3>
                <p className="mb-4">
                  Learn how we helped an e-commerce business increase their sales by 300% through our comprehensive digital strategy.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Read Case Study</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create something amazing together.
          </p>
          <a href="/contact" className="btn btn-primary btn-lg">
            Start a Project
          </a>
        </div>
      </section>
    </>
  );
}
