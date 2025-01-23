export const metadata = {
  title: 'About Us - The Balthazar Project',
  description: 'Learn about The Balthazar Project team and our mission to deliver exceptional digital solutions.',
}

export default function About() {
  const values = [
    {
      title: 'Innovation',
      description: 'We stay at the forefront of technology to deliver cutting-edge solutions.',
    },
    {
      title: 'Quality',
      description: 'We maintain the highest standards in every project we undertake.',
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients to ensure their vision becomes reality.',
    },
    {
      title: 'Results',
      description: 'We focus on delivering measurable results that drive business growth.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-base-200 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-8">About Us</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            We are a team of passionate developers and digital strategists dedicated to creating exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl mb-8">
              To empower businesses with innovative digital solutions that drive growth and success in the modern digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-base-200 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <div className="card-body text-center">
                  <h3 className="card-title justify-center text-xl mb-4">{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Team members will be added here */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="w-24 h-24 rounded-full bg-base-300 mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">Team Member</h3>
                <p className="text-base-content/70">Position</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-base-200 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Want to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your digital vision to life.
          </p>
          <a href="/contact" className="btn btn-primary btn-lg">
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
