import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Target, Box, Award, Building2, Lock, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Insurance Policy Review",
    description: "Comprehensive review of insurance policies against historical claims and renewal terms",
    icon: Shield,
    image: "https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Strategic Insurance Alignment",
    description: "Advising alignment of insurance policies with management's budgetary and strategic objectives",
    icon: Target,
    image: "https://images.pexels.com/photos/7681827/pexels-photo-7681827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Product Liability Insurance",
    description: "Comprehensive coverage protecting against product-related risks and claims",
    icon: Box,
    image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Professional Indemnity",
    description: "Protection for professional service providers against liability claims",
    icon: Award,
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Commercial Space Insurance",
    description: "Comprehensive coverage for commercial and office spaces including all-risk, liability, and vehicle insurance",
    icon: Building2,
    image: "https://images.pexels.com/photos/1098982/pexels-photo-1098982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Cyber Insurance",
    description: "Protection against cyber incidents including data breaches and ransomware attacks",
    icon: Lock,
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Employee Group Insurance",
    description: "Comprehensive group insurance including life, accident, and medical coverage for employees and foreign workers",
    icon: Users,
    image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Work Injury Compensation",
    description: "WICA-compliant coverage ensuring proper protection for workplace injuries",
    icon: Briefcase,
    image: "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-white hover:text-blue-200 transition-colors mb-8"
          >
            <ArrowLeft className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-200">Comprehensive insurance solutions for your business needs</p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="font-bold text-xl">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;