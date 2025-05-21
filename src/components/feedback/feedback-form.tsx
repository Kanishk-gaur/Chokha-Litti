"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function FeedbackForm() {
  const router = useRouter();

  // Define interface for form data
  interface FormData {
    name: string;
    city: string;
    phone: string;
    rating: string;
    suggestions: string;
  }

  const [formData, setFormData] = useState<FormData>({
    name: "",
    city: "",
    phone: "",
    rating: "",
    suggestions: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  interface MessageState {
    text: string;
    type: string;
  }

  const [message, setMessage] = useState<MessageState>({ text: "", type: "" });
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingClick = (value: number) => {
    setFormData((prev) => ({ ...prev, rating: value.toString() }));
  };

  const handleLogoClick = () => {
    router.push("/home");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

        // Redirect to home after 2 seconds
        setTimeout(() => {
          router.push("/home");
        }, 2000);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      setMessage({
        text: `Failed to submit feedback: ${errorMessage}`,
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessage({ text: "", type: "" }), 5000);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const buttonHover = {
    scale: 1.05,
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
    transition: { type: "spring", stiffness: 300 },
  };

  const buttonTap = {
    scale: 0.98,
    transition: { type: "spring", stiffness: 300 },
  };

  const ratingHover = {
    scale: 1.1,
    rotate: [0, 5, -5, 0],
    transition: { duration: 0.4 },
  };
  const logoVariants = {
    initial: {
      rotate: 0,
      scale: 1,
      y: 0,
    },
    animate: {
      rotate: [0, 15, -15, 0],
      scale: [1, 1.05, 1],
      y: [0, -10, 10, 0],
      transition: {
        duration: 8,
        ease: "easeInOut" as const,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
    hover: {
      rotate: [0, 20, -20, 0],
      scale: [1, 1.1, 1],
      y: [0, -15, 15, 0],
      transition: {
        duration: 4,
        ease: "easeInOut" as const,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  return (
    <div className="min-h-screen bg-amber-100 py-4 px-4 sm:py-8 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl mx-auto p-4 sm:p-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl shadow-2xl border border-orange-100"
      >
        <div className="flex flex-col md:flex-row gap-2 sm:gap-8">
          {/* Enhanced Image container with continuous animation */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-full md:w-1/2 flex items-center justify-center"
          >
            <motion.div
              variants={logoVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="relative w-full h-[150px] sm:h-[300px] md:h-[600px] cursor-pointer" // Added cursor-pointer
              onClick={handleLogoClick} // Added click handler
              whileTap={{ scale: 0.95 }} // Added tap animation
            >
              <Image
                src="/images/Logo.png"
                alt="Customer feedback"
                fill
                className="object-contain"
                priority
              />
              {/* Optional floating elements around the logo */}
              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-amber-200 opacity-70"
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0.9, 0.7],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-orange-200 opacity-70"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 0.5, 0.7],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Form on the right */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full md:w-1/2"
          >
            <motion.div
              variants={itemVariants}
              className="text-center mb-4 sm:mb-8"
            >
              <motion.h1
                whileHover={{ scale: 1.02 }}
                className="text-3xl sm:text-4xl font-bold text-orange-800 mb-2 sm:mb-3"
              >
                Share Your Feedback
              </motion.h1>
              <motion.p
                animate={{
                  color: ["#ea580c", "#d97706", "#ea580c"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="text-lg sm:text-xl"
              >
                We value your opinion and suggestions
              </motion.p>
            </motion.div>

            <AnimatePresence>
              {message.text && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ type: "spring" }}
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

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={containerVariants} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label className="block text-black font-medium mb-2 text-xl">
                    Full Name*
                  </label>
                  <motion.input
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0px 0px 8px rgba(234, 88, 12, 0.4)",
                    }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 text-lg bg-white text-black border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-black font-medium mb-2 text-xl">
                    City*
                  </label>
                  <motion.input
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0px 0px 8px rgba(234, 88, 12, 0.4)",
                    }}
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-5 py-4 text-lg bg-white text-black border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Enter your Native city"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-black font-medium mb-2 text-xl">
                    Phone Number*
                  </label>
                  <motion.input
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0px 0px 8px rgba(234, 88, 12, 0.4)",
                    }}
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 text-lg bg-white text-black border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    pattern="[0-9]{10}"
                    placeholder="10-digit phone number"
                    required
                  />
                  <motion.p
                    whileHover={{ x: [0, 2, -2, 0] }}
                    transition={{ duration: 0.5 }}
                    className="text-md text-orange-600 mt-2"
                  >
                    We will never share your phone number
                  </motion.p>
                </motion.div>

                <motion.div variants={itemVariants}>
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
                        whileHover={ratingHover}
                        whileTap={{ scale: 0.9 }}
                        className={`w-16 h-16 flex items-center justify-center rounded-xl text-2xl font-bold transition-all
                          ${
                            formData.rating === rating.toString() ||
                            (hoveredRating && rating <= hoveredRating)
                              ? "bg-orange-500 text-white shadow-md"
                              : "bg-white text-orange-500 border-2 border-orange-300 hover:bg-orange-100"
                          }`}
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

                <motion.div variants={itemVariants}>
                  <label className="block text-black font-medium mb-2 text-xl">
                    Suggestions
                  </label>
                  <motion.textarea
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0px 0px 8px rgba(234, 88, 12, 0.4)",
                    }}
                    name="suggestions"
                    value={formData.suggestions}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-5 py-4 text-lg bg-white text-black border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Any comment and suggestions for improvement?"
                  />
                </motion.div>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting || !formData.rating}
                whileHover={!isSubmitting && formData.rating ? buttonHover : {}}
                whileTap={!isSubmitting && formData.rating ? buttonTap : {}}
                className={`w-full py-5 px-6 rounded-xl font-bold text-white text-xl transition-all ${
                  isSubmitting
                    ? "bg-orange-400 cursor-not-allowed"
                    : !formData.rating
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-md hover:shadow-lg"
                }`}
              >
                {isSubmitting ? (
                  <motion.span
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex items-center justify-center"
                  >
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
                  </motion.span>
                ) : (
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Submit Feedback
                  </motion.span>
                )}
              </motion.button>
            </form>

            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="mt-8 text-center text-orange-600 text-lg"
            >
              <p>Thank you for helping us improve!</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
