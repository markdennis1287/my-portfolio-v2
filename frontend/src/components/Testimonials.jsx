import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Senior Developer at TechCorp",
    quote: "An exceptional developer with a great eye for detail. Always delivers quality work!",
  },
  {
    name: "John Smith",
    role: "Project Manager at DevSolutions",
    quote: "Superb problem-solving skills. Always finds the most efficient solutions!",
  },
  {
    name: "Alice Johnson",
    role: "Software Engineer at InnovateX",
    quote: "A great team player and a pleasure to work with. Highly skilled and professional!",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-section">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          className="testimonial-card"
          initial={{ opacity: 0, x: direction * 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -direction * 50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <p className="testimonial-quote">"{testimonials[index].quote}"</p>
          <h4 className="testimonial-name">- {testimonials[index].name}</h4>
          <p className="testimonial-role">{testimonials[index].role}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Testimonials;
