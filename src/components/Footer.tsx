import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Solutions</h3>
            <p className="text-gray-400 mb-6">
              Providing innovative business solutions since 2010. We help companies transform and grow in today's competitive landscape.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-blue-400" />
                <span className="text-gray-400">1 Pickering Street | #06-01 Great Eastern Centre Singapore 048659</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-blue-400" />
                <span className="text-gray-400">(65) 9030 7456  </span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-blue-400" />
                <a href="mailto:info@solutions.com" className="text-gray-400 hover:text-white transition-colors">info@solutions.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;