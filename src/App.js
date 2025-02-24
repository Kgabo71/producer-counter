import React, { useState } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Animated Counter
      </motion.h1>

      <motion.div
        className="text-6xl font-bold bg-gray-800 px-6 py-4 rounded-lg shadow-md"
        key={count}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {count}
      </motion.div>

      <div className="mt-6 flex space-x-4">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="bg-green-500 px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="bg-red-500 px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500 px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
          onClick={() => setCount(0)}
        >
          Reset
        </motion.button>
      </div>
    </div>
  );
};

export default App;
