import React from 'react';
import { motion } from 'framer-motion';

function MySkills() {
  return (
    <div className="p-3 border rounded-md bg-white w-3/5 min-h-screen space-y-5">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
          type: 'inertia',
          velocity: 2,
        }}
        whileInView={{ y: 180 }}
        className="w-72 h-96 bg-rose-500 rounded-md shadow-md"
      />
    </div>
  );
}

export default MySkills;
