import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero min-h-[70vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-8">
              Building Digital Excellence
            </h1>
            <p className="text-xl mb-8">
              Web development, SEO optimization, and digital solutions that drive results.
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Web Development</h3>
                <p>Custom websites and applications built with modern technologies.</p>
              </div>
            </div>

            {/* SEO Optimization */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">SEO Optimization</h3>
                <p>Improve your visibility and reach your target audience.</p>
              </div>
            </div>

            {/* Digital Strategy */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Digital Strategy</h3>
                <p>Comprehensive digital solutions for your business growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
            <p className="text-xl mb-8">
              We combine technical expertise with creative innovation to deliver exceptional digital solutions.
            </p>
            <Link href="/about" className="btn btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8">
            Let's discuss how we can help you achieve your digital goals.
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
