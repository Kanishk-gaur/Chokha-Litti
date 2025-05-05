"use client";
import { useState, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    phone: "",
    rating: "",
    suggestions: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [hoveredRating, setHoveredRating] = useState(null);
  const formRef = useRef(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingClick = async (value) => {
    setFormData((prev) => ({ ...prev, rating: value.toString() }));
    await controls.start({
      scale: [1, 1.1, 1],
      transition: { duration: 0.3 }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage({
          text: "Feedback submitted successfully!",
          type: "success",
        });
        setFormData({
          name: "",
          city: "",
          phone: "",
          rating: "",
          suggestions: "",
        });
        // Success animation
        await controls.start({
          rotateY: 360,
          transition: { duration: 1 }
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      setMessage({ text: "Failed to submit feedback", type: "error" });
      // Error shake animation
      await controls.start({
        x: [-10, 10, -10, 10, 0],
        transition: { duration: 0.5 }
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessage({ text: "", type: "" }), 5000);
    }
  };

  const starVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.2, rotate: 10, transition: { duration: 0.2 } },
    selected: { scale: 1.3, rotate: 0, boxShadow: "0 0 15px rgba(249, 115, 22, 0.7)" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mx-auto"
      >
        <motion.div 
          className="p-8 bg-white rounded-2xl shadow-2xl border border-orange-100"
          whileHover={{ scale: 1.005 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image on the left with 3D effect */}
            <motion.div 
              className="w-full md:w-1/2 flex items-center justify-center"
              initial={{ rotateY: 0 }}
              whileInView={{ rotateY: 5 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <img
                  src="/images/Logo.png"
                  alt="Customer feedback"
                  className="w-full h-auto max-h-[600px] object-contain drop-shadow-xl"
                />
                <motion.div 
                  className="absolute -inset-4 bg-orange-200 rounded-2xl -z-10 opacity-70"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1, rotate: 2 }}
                  transition={{ 
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Form on the right */}
            <div className="w-full md:w-1/2">
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="text-4xl font-bold text-orange-800 mb-3">
                  Share Your <span className="text-amber-600">Feedback</span>
                </h1>
                <p className="text-orange-600 text-xl">
                  We value your opinion and suggestions
                </p>
              </motion.div>

              <AnimatePresence>
                {message.text && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`p-4 mb-6 rounded-lg text-center font-medium text-lg ${
                      message.type === "success"
                        ? "bg-green-100 text-green-800 border border-green-200"
                        : "bg-red-100 text-red-800 border border-red-200"
                    }`}
                  >
                    {message.text}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                ref={formRef}
                animate={controls}
              >
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-black font-medium mb-2 text-xl">
                      Full Name*
                    </label>
                    <motion.input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 text-lg bg-white text-black border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                      required
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(249, 115, 22, 0.5)" }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-black font-medium mb-2 text-xl">
                      City*
                    </label>
                    <motion.input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-5 py-4 text-lg bg-white text-black border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Enter your city"
                      required
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(249, 115, 22, 0.5)" }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="block text-black font-medium mb-2 text-xl">
                      Phone Number*
                    </label>
                    <motion.input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 text-lg bg-white text-black border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      pattern="[0-9]{10}"
                      placeholder="10-digit phone number"
                      required
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(249, 115, 22, 0.5)" }}
                    />
                    <p className="text-md text-orange-600 mt-2">
                      We'll never share your phone number
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <label className="block text-black font-medium mb-2 text-xl">
                      Rating*
                    </label>
                    <div className="flex items-center justify-center space-x-4">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <motion.button
                          key={rating}
                          type="button"
                          onClick={() => handleRatingClick(rating)}
                          onMouseEnter={() => setHoveredRating(rating)}
                          onMouseLeave={() => setHoveredRating(null)}
                          className={`w-16 h-16 flex items-center justify-center rounded-xl text-2xl font-bold transition-all
                            ${
                              formData.rating === rating.toString() ||
                              (hoveredRating && rating <= hoveredRating)
                                ? "bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-lg"
                                : "bg-white text-orange-500 border-2 border-orange-300 hover:bg-orange-50"
                            }`}
                          variants={starVariants}
                          initial="initial"
                          whileHover="hover"
                          animate={
                            formData.rating === rating.toString() ? "selected" : 
                            (hoveredRating && rating <= hoveredRating) ? "hover" : "initial"
                          }
                        >
                          {rating}
                        </motion.button>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 px-4 text-sm text-orange-600">
                      <span>Excellent</span>
                      <span>Poor</span>
                    </div>
                    <input
                      type="hidden"
                      name="rating"
                      value={formData.rating}
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <label className="block text-black font-medium mb-2 text-xl">
                      Suggestions
                    </label>
                    <motion.textarea
                      name="suggestions"
                      value={formData.suggestions}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-5 py-4 text-lg bg-white text-black border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Any suggestions for improvement?"
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(249, 115, 22, 0.5)" }}
                    />
                  </motion.div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || !formData.rating}
                  className={`w-full py-5 px-6 rounded-xl font-bold text-white text-xl transition-all ${
                    isSubmitting
                      ? "bg-orange-400 cursor-not-allowed"
                      : !formData.rating
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-md hover:shadow-lg"
                  }`}
                  whileHover={!isSubmitting && formData.rating ? { 
                    scale: 1.02,
                    boxShadow: "0 5px 15px rgba(249, 115, 22, 0.4)"
                  } : {}}
                  whileTap={!isSubmitting && formData.rating ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <motion.span
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    >
                      Submit Feedback
                    </motion.span>
                  )}
                </motion.button>
              </motion.form>

              <motion.div 
                className="mt-8 text-center text-orange-600 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <p>Thank you for helping us improve!</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}