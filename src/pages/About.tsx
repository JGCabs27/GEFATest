import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, Users, Building2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const stats = [
    {
      icon: Clock,
      value: "1908",
      label: "Founded",
      description: "A legacy of trust and excellence"
    },
    {
      icon: Users,
      value: "2M+",
      label: "Customers",
      description: "Across Southeast Asia"
    },
    {
      icon: Building2,
      value: "200+",
      label: "Corporate Partners",
      description: "Trusted by leading businesses"
    },
    {
      icon: Award,
      value: "#1",
      label: "Insurance Group",
      description: "In Singapore and Malaysia"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/4350631/pexels-photo-4350631.jpeg?auto=compress&cs=tinysrgb&w=1920')"
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <Link 
              to="/" 
              className="inline-flex items-center text-white hover:text-blue-200 transition-colors mb-8"
            >
              <ArrowLeft className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-white mb-4">Our Story</h1>
            <p className="text-xl text-blue-200 max-w-2xl">
              A century-long journey of protecting generations of Singaporeans
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-blue-50"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <div className="text-4xl font-bold text-blue-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Heritage</h2>
              <p className="text-gray-700 mb-4">
                Founded in 1908, Great Eastern has been a trusted name in insurance for over a century. As Singapore's oldest and most established life insurance company, we've been privileged to protect generations of families and businesses.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey began in the heart of Singapore, and today we stand as a leading financial services group in Asia, backed by our parent company OCBC Bank - one of Asia's most well-established financial institutions.
              </p>
              <p className="text-gray-700">
                Through the years, we've remained committed to our founding promise: to provide financial security and peace of mind to our customers, helping them achieve their life aspirations and business goals.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.pexels.com/photos/1538177/pexels-photo-1538177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Singapore skyline"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at Great Eastern
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6"
            >
              <h3 className="text-xl font-bold text-blue-900 mb-4">Integrity</h3>
              <p className="text-gray-600">
                We act with honesty and trust, delivering on our promises to customers, partners, and stakeholders.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6"
            >
              <h3 className="text-xl font-bold text-blue-900 mb-4">Initiative</h3>
              <p className="text-gray-600">
                We anticipate needs and take proactive steps to provide innovative solutions for our customers.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center p-6"
            >
              <h3 className="text-xl font-bold text-blue-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, setting high standards for our services and solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Singapore Presence */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1"
            >
              <img 
                src="https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Singapore financial district"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Singapore Home</h2>
              <p className="text-gray-700 mb-4">
                From our headquarters in the heart of Singapore's financial district, we've grown alongside the nation, contributing to its development as a global financial hub.
              </p>
              <p className="text-gray-700 mb-4">
                Our deep understanding of the local market, combined with our regional expertise, allows us to provide tailored solutions that meet the unique needs of Singaporean businesses and individuals.
              </p>
              <p className="text-gray-700">
                As we continue to grow, we remain committed to being an integral part of Singapore's financial landscape, helping to secure the future of generations to come.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;