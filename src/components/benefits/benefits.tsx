'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Benefits = () => {
  const benefits = [
    {
      icon: '🍲',
      title: "Authentic Taste",
      description: "Experience traditional Bihari flavors prepared with original recipes passed down through generations"
    },
    {
      icon: '🌱',
      title: "Fresh Ingredients",
      description: "Made daily with locally-sourced, fresh vegetables and premium spices"
    },
    {
      icon: '⚡', 
      title: "Energy Boost",
      description: "Packed with nutrients to keep you energized throughout the day"
    },
    {
      icon: '❤️',
      title: "Healthy Choice",
      description: "Low oil, no artificial preservatives - a wholesome meal for your body"
    },
    {
      icon: '🏆',
      title: "IITI Certified",
      description: "Quality and hygiene standards maintained as per IIT Indore guidelines"
    },
    {
      icon: '💰',
      title: "Great Value",
      description: "Delicious, filling meals at very affordable prices"
    }
  ];

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      y: -10,
      rotateY: 5,
      scale: 1.03,
      boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)"
    }
  };

  const iconVariants = {
    hover: {
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.7 }
    }
  };

  return (
    <section className="py-16 px-4 bg-amber-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-orange-800 mb-4">
            Why Eat at <span className="text-amber-600">Chokha Litti</span>?
          </h2>
          <p className="text-xl text-orange-600 text-center mb-12 max-w-3xl mx-auto">
            Discover the unique benefits of our traditional Bihari cuisine
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border border-orange-100"
            >
              <motion.span 
                className="text-5xl mb-4"
                variants={iconVariants}
                whileHover="hover"
              >
                {benefit.icon}
              </motion.span>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-lg">{benefit.description}</p>
              
              {/* Decorative 3D elements */}
              <motion.div 
                className="absolute -z-10 w-full h-full inset-0 bg-orange-50 rounded-xl"
                initial={{ rotate: 0, scale: 0.95 }}
                whileHover={{ rotate: 2, scale: 1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div 
          className="absolute top-0 left-0 w-32 h-32 bg-amber-200 rounded-full opacity-20 -z-0"
          animate={{
            y: [0, 20, 0],
            x: [0, 15, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-40 h-40 bg-orange-200 rounded-full opacity-20 -z-0"
          animate={{
            y: [0, -30, 0],
            x: [0, -20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </section>
  );
};

export default Benefits;