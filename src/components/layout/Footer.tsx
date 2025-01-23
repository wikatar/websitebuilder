const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Balthazar Project</h3>
            <p className="text-sm">
              Professional web development and digital solutions for modern businesses.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services#web-development" className="hover:text-primary transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/services#seo" className="hover:text-primary transition-colors">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="/services#digital-strategy" className="hover:text-primary transition-colors">
                  Digital Strategy
                </a>
              </li>
              <li>
                <a href="/services#ai-solutions" className="hover:text-primary transition-colors">
                  AI Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@balthazarproject.com" className="hover:text-primary transition-colors">
                  contact@balthazarproject.com
                </a>
              </li>
              <li>Stockholm, Sweden</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-content/10 mt-8 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} Balthazar Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
