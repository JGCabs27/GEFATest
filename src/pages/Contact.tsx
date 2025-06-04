import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Contact: React.FC = () => {
  const [date, setDate] = useState<Value>(new Date());

  const team = [
    {
      name: "Soh Wei Xuan",
      role: "Corporate Solutions Specialist",
      email: "SohWeiXuan@rep.greateasternfa.sg",
      whatsapp: "+6590307456",
      image: "/Wei.png"
    },
    {
      name: "Denise Teo Jiya Yi",
      role: "Corporate Solutions Specialist",
      email: "DeniseTeoJY@rep.greateasternfa.sg",
      whatsapp: "+6590307456", // Replace with Denise's actual WhatsApp number
      image: "/Denise.jpg"
    }
  ];

  const handleDateChange = (value: Value) => {
    setDate(value);
    // Here you would typically integrate with a booking system
    console.log('Selected date:', value);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-white hover:text-blue-200 transition-colors mb-8"
          >
            <ArrowLeft className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-200">Schedule a meeting or reach out directly</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calendar Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Book a Meeting</h2>
            <div className="calendar-container">
              <Calendar
                onChange={handleDateChange}
                value={date}
                className="mx-auto w-full max-w-md rounded-lg shadow-sm"
              />
            </div>
            {date && (
              <p className="mt-4 text-gray-600 text-center">
                Selected date: {date.toString().split('00:00')[0]}
              </p>
            )}
          </motion.div>

          {/* Team Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Our Team</h2>
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-6"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <div className="flex space-x-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Email
                    </a>
                    <a
                      href={`https://wa.me/${member.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors"
                    >
                      <MessageSquare className="w-5 h-5 mr-2" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;