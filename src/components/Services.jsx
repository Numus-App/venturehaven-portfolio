import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertTriangle, Gauge, Rocket, Zap, Shield, Cpu, Code, Database, Cloud, GitBranch, Wifi, Layers, BarChart, Briefcase, Users, DollarSign } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const serviceCategories = [
    {
      title: "Technical Services",
      icon: <Cpu className="h-12 w-12 mb-4" />,
      color: "from-blue-400 to-indigo-500",
      services: [
        {
          title: "Advanced Tech Stack",
          description: "Integration of quantum computing, blockchain, and AI/ML frameworks.",
          icon: <Rocket className="h-8 w-8" />,
          details: "Implementation of post-quantum cryptography, edge computing, and AI-assisted development tools."
        },
        {
          title: "Architecture Design",
          description: "Scalable and resilient system architecture design.",
          icon: <Cpu className="h-8 w-8" />,
          details: "Utilization of microservices, event-driven architectures, and self-healing systems."
        },
        {
          title: "Code Optimization",
          description: "Performance enhancement and code refactoring services.",
          icon: <Code className="h-8 w-8" />,
          details: "Application of static analysis, AI-assisted code review, and automated refactoring techniques."
        },
        {
          title: "Cloud Solutions",
          description: "Cloud integration, migration, and management services.",
          icon: <Cloud className="h-8 w-8" />,
          details: "Implementation of multi-cloud orchestration and serverless architectures."
        }
      ]
    },
    {
      title: "Business Development",
      icon: <Briefcase className="h-12 w-12 mb-4" />,
      color: "from-green-400 to-teal-500",
      services: [
        {
          title: "Partnership Architecture",
          description: "Strategic partnership development and management.",
          icon: <Users className="h-8 w-8" />,
          details: "Identification of synergistic opportunities and creation of mutually beneficial partnership structures."
        },
        {
          title: "Business Model Refinement",
          description: "Optimization of business models for market fit and scalability.",
          icon: <BarChart className="h-8 w-8" />,
          details: "Analysis of market trends, competitive landscape, and revenue optimization strategies."
        },
        {
          title: "Startup Incubation",
          description: "Comprehensive support for startup development and market entry.",
          icon: <Zap className="h-8 w-8" />,
          details: "Provision of mentorship, resources, and networking opportunities for accelerated growth."
        },
        {
          title: "Market Entry Strategy",
          description: "Development of strategies for new market penetration.",
          icon: <Gauge className="h-8 w-8" />,
          details: "Analysis of market dynamics, regulatory environments, and localization requirements."
        }
      ]
    },
    {
      title: "Blockchain & Tokenomics",
      icon: <Database className="h-12 w-12 mb-4" />,
      color: "from-purple-400 to-pink-500",
      services: [
        {
          title: "Tokenomics Architecture",
          description: "Design and implementation of token economic models.",
          icon: <DollarSign className="h-8 w-8" />,
          details: "Development of sustainable token ecosystems, including supply mechanisms and utility modeling."
        },
        {
          title: "Smart Contract Development",
          description: "Creation and auditing of blockchain-based smart contracts.",
          icon: <Code className="h-8 w-8" />,
          details: "Implementation of secure, efficient, and scalable smart contracts on various blockchain platforms."
        },
        {
          title: "Blockchain Integration",
          description: "Incorporation of blockchain technology into existing systems.",
          icon: <GitBranch className="h-8 w-8" />,
          details: "Seamless integration of blockchain solutions for enhanced transparency and security."
        },
        {
          title: "Decentralized Finance (DeFi) Solutions",
          description: "Development of DeFi platforms and protocols.",
          icon: <Briefcase className="h-8 w-8" />,
          details: "Creation of decentralized exchanges, lending platforms, and yield farming protocols."
        }
      ]
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="h-12 w-12 mb-4" />,
      color: "from-red-400 to-orange-500",
      services: [
        {
          title: "Advanced Security Measures",
          description: "Implementation of quantum-resistant encryption and threat detection systems.",
          icon: <Shield className="h-8 w-8" />,
          details: "Deployment of AI-powered threat intelligence and blockchain-based audit trails."
        },
        {
          title: "Regulatory Compliance",
          description: "Ensuring adherence to global financial and data protection regulations.",
          icon: <AlertTriangle className="h-8 w-8" />,
          details: "Implementation of KYC/AML procedures and data privacy compliance measures."
        },
        {
          title: "Security Audits",
          description: "Comprehensive security assessments and penetration testing.",
          icon: <Wifi className="h-8 w-8" />,
          details: "Identification and mitigation of vulnerabilities in systems and smart contracts."
        },
        {
          title: "Disaster Recovery Planning",
          description: "Development of robust disaster recovery and business continuity strategies.",
          icon: <Layers className="h-8 w-8" />,
          details: "Creation of resilient systems with failover mechanisms and data redundancy."
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundImage: [
              'radial-gradient(circle, #00A86B 1px, transparent 1px)',
              'radial-gradient(circle, #0EA5E9 1px, transparent 1px)',
              'radial-gradient(circle, #00A86B 1px, transparent 1px)',
            ],
            backgroundSize: ['20px 20px', '30px 30px', '20px 20px'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.h2 
          className="text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Cosmic Services
        </motion.h2>
        <motion.p 
          className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-300"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Embark on an interstellar journey of innovation with our comprehensive suite of services. From rapid problem-solving to cutting-edge tech implementation, we're your cosmic partners in digital transformation.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 h-full cursor-pointer"
                onClick={() => setSelectedCategory(category)}
              >
                <CardHeader>
                  <CardTitle className="flex flex-col items-center">
                    <motion.div
                      className={`p-3 rounded-full bg-gradient-to-br ${category.color}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {React.cloneElement(category.icon, { className: "h-8 w-8 text-white" })}
                    </motion.div>
                    <span className="mt-4 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-300">Click to explore our {category.title.toLowerCase()} offerings.</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCategory(null)}
          >
            <motion.div
              className="bg-gray-800 p-8 rounded-lg max-w-4xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">{selectedCategory.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedCategory.services.map((service, index) => (
                  <Card 
                    key={index}
                    className="bg-gray-700 border-gray-600 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedService(service)}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        {React.cloneElement(service.icon, { className: "h-6 w-6 mr-2 text-blue-400" })}
                        <span>{service.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <button
                className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => setSelectedCategory(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-gray-800 p-8 rounded-lg max-w-2xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">{selectedService.title}</h3>
              <p className="text-gray-300 mb-4">{selectedService.description}</p>
              <h4 className="text-xl font-semibold mb-2 text-green-400">Service Details:</h4>
              <p className="text-gray-300">{selectedService.details}</p>
              <button
                className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => setSelectedService(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
