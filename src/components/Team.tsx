import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, MessageCircle, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  chineseName: string;
  role: string;
  qualifications: string[];
  image: string;
  email: string;
  linkedinUrl: string;
  isReversed?: boolean;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, chineseName, role, qualifications, image, email, linkedinUrl, isReversed }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${isReversed ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="w-64 h-64 rounded-full overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-3xl font-bold text-gray-800 mb-1">
          {name} <span className="text-gray-600">{chineseName}</span>
        </h3>
        <div className="space-y-1 mb-4">
          {qualifications.map((qualification, index) => (
            <p key={index} className="text-gray-600">{qualification}</p>
          ))}
        </div>
        <h4 className="text-2xl font-bold text-blue-900 mb-4">{role}</h4>
        <div className="flex space-x-4">
          <a 
            href={linkedinUrl}
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 hover:text-blue-500 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
            <MessageCircle size={24} />
          </a>
          <a 
            href={`mailto:${email}`}
            className="text-gray-500 hover:text-blue-500 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Soh Wei Xuan",
      chineseName: "苏伟轩",
      role: "Corporate Solutions Specialist",
      qualifications: [
        "Master of Science in Professional Accountancy",
        "Bachelor of Accountancy – Summa Cum Laude",
        "Association of Chartered Certified Accountants (ACCA)",
        "Chartered Alternative Investment Analyst Association (CAIA)"
      ],
      image: "/Wei.png",
      email: "SohWeiXuan@rep.greateasternfa.sg",
      linkedinUrl: "https://www.linkedin.com/in/weixuan-soh/"
    },
    {
      name: "Denise Teo Jiya Yi",
      chineseName: "张佳仪",
      role: "Corporate Solutions Specialist",
      qualifications: [
        "Top Producer 2024 – Group Insurance (Employee Benefits)",
        "Top Cluster Producer 2024 – Group Insurance (Employee benefits)",
        "GEFA Since 2021 – Employee Benefits Specialist",
        "BA, Tourism & Events Management and Public Relations (Double Major)"
      ],
      image: "/Denise.jpg",
      email: "DeniseTeoJY@rep.greateasternfa.sg",
      // TODO: Replace with Denise's actual LinkedIn URL when available
      linkedinUrl: "https://www.linkedin.com/in/weixuan-soh/"
    }
  ];

  return (
    <section id="team" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-blue-900 uppercase">Meet the Team!</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our exceptional team of professionals brings diverse expertise and experience to deliver the best solutions for your business.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              chineseName={member.chineseName}
              role={member.role}
              qualifications={member.qualifications}
              image={member.image}
              email={member.email}
              linkedinUrl={member.linkedinUrl}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;