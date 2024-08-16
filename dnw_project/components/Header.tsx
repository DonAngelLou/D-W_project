import { motion } from 'framer-motion';

const Hero = () => (
  <section className="relative flex items-center justify-center h-screen bg-hero-pattern">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h1 className="text-6xl font-bold">Deadpool & Wolverine</h1>
      <p className="mt-4 text-lg">An Epic Team-Up!</p>
    </motion.div>
  </section>
);

export default Hero;
