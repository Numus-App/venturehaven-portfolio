import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';
import MatrixTornado from '../components/MatrixTornado';

const Home = () => {
  return (
    <div className="min-h-screen bg-green-900 relative">
      <AnimatedBackground>
        <Header />
        <MatrixTornado />
        <main className="relative z-20">
          <Hero />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Services />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Portfolio />
          </motion.div>
        </main>
        <Footer />
      </AnimatedBackground>
    </div>
  );
};

export default Home;
