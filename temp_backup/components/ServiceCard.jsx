import React from 'react';

/**
 * ServiceCard Component
 * 
 * A reusable card component for displaying services
 * 
 * @param {Object} props
 * @param {string} props.title - The title of the service
 * @param {string} props.description - Description of the service
 * @param {string} props.icon - Font Awesome icon class
 * @param {string} [props.link] - Optional link to service details
 */
export const ServiceCard = ({ title, description, icon, link }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="card-body">
        <div className="text-4xl text-primary mb-4">
          <i className={`fas ${icon}`}></i>
        </div>
        <h3 className="card-title text-2xl mb-2">{title}</h3>
        <p className="text-base-content/80">{description}</p>
        {link && (
          <div className="card-actions justify-end mt-4">
            <a href={link} className="btn btn-primary">
              Learn More
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

// Example usage:
/*
<ServiceCard
  title="Web Development"
  description="Custom web applications built with modern technologies"
  icon="fa-code"
  link="/services/web-development"
/>
*/
