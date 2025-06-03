import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechVision Inc",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "Solutions has transformed our business operations completely. Their team's expertise and dedication to our success made all the difference. We've seen a 40% increase in productivity since implementing their recommendations."
  },
  {
    name: "James Wilson",
    role: "Director, Global Innovations",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "The level of professionalism and insight that Solutions brings to the table is unmatched. They helped us navigate complex challenges with ease."
  },
  {
    name: "Emily Rodriguez",
    role: "CFO, Future Finance",
    image: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "Working with Solutions was a game-changer for our financial strategy. Their corporate solutions expertise helped us optimize our operations significantly."
  },
  {
    name: "Michael Chang",
    role: "HR Director, Innovation Corp",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "The employee benefits solutions provided by the team have dramatically improved our talent retention and satisfaction scores."
  },
  {
    name: "Lisa Thompson",
    role: "Operations Manager, Global Tech",
    image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "Their consultative approach and deep industry knowledge helped us implement changes that had immediate positive impact on our bottom line."
  }
];

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center relative"
        >
          <div className="mb-8 relative">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-4 border-white shadow-md">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mt-4 text-gray-800">{testimonials[currentIndex].name}</h3>
            <p className="text-gray-600">{testimonials[currentIndex].role}</p>
            <div className="flex justify-center mt-2 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-blue-500 text-blue-500" />
              ))}
            </div>
          </div>

          <blockquote className="text-lg text-gray-700 italic mb-8">
            "{testimonials[currentIndex].quote}"
          </blockquote>

          <div className="flex justify-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-blue-600" />
            </button>
            <a
              href="/testimonials"
              className="inline-block px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
            >
              WHAT OUR CLIENTS SAY
            </a>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-blue-600" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;