import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowLeft } from 'lucide-react';

const testimonials = Array(10).fill(null).map((_, index) => ({
  name: `Client ${index + 1}`,
  role: "Position & Company",
  image: `https://images.pexels.com/photos/${1181686 + index}/pexels-photo-${1181686 + index}.jpeg?auto=compress&cs=tinysrgb&w=300`,
  quote: "Placeholder testimonial. This space will be filled with actual client feedback and success stories.",
  rating: 5
}));

const TestimonialsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <a 
            href="/" 
            className="inline-flex items-center text-white hover:text-blue-200 transition-colors mb-8"
          >
            <ArrowLeft className="mr-2" />
            Back to Home
          </a>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h1>
          <p className="text-xl text-blue-200">See what our clients say about working with us</p>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-gray-700 italic">
                "{testimonial.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;