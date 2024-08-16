import { motion } from 'framer-motion';

const SocialSection = () => (
  <section className="px-4 py-12 bg-gray-700">
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-semibold">FAN ZONE</h2>
      <div className="mt-4 space-x-4">
        {/* Add social media icons or feeds */}
      </div>
    </motion.div>
  </section>
);

export default SocialSection;
