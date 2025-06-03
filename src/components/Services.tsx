import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      title: "Employee Benefits",
      description: "Comprehensive employee benefits solutions tailored to your organization's needs.",
      image: "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Corporate Solutions",
      description: "Strategic corporate insurance solutions to protect your business interests.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Consultations",
      description: "Expert consultations to optimize your insurance portfolio and risk management strategy.",
      image: "https://images.pexels.com/photos/7688168/pexels-photo-7688168.jpeg?auto=compress&cs=tinysrgb&w=800",
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900">WHAT WE OFFER</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link to="/services\" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col group cursor-pointer"
              >
                <div className="aspect-w-4 aspect-h-3 mb-6 overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services