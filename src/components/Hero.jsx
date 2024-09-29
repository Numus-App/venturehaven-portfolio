import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
import { ArrowRight } from 'lucide-react';
import AnimatedEcosystem from './AnimatedEcosystem';

const Hero = () => {
  return (
    <AnimatedBackground>
      <section className="relative z-10 bg-gradient-to-b from-green-900 via-green-700 to-green-500 text-white py-16 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <AnimatedEcosystem />
          <motion.div
            className="absolute inset-0 flex flex-col justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-6xl font-bold mb-5 title-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              Redefining the Future of Web3
            </motion.h2>
            <motion.p
              className="text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto text-green-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3 }}
            >
              Numus Venture Studio offers a full-cycle ecosystem to accelerate, incubate, and refine cutting-edge blockchain projects.
            </motion.p>
            <motion.div
              className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3.5 }}
            >
              <Link to="/about" className="w-full md:w-auto">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="futuristic-button group w-full">
                    Explore Our Ecosystem
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/portfolio" className="w-full md:w-auto">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="futuristic-button bg-transparent border-green-300 text-green-300 hover:bg-green-300 hover:text-green-900 w-full">
                    View Our Projects
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </AnimatedBackground>
  );
};

export default Hero;