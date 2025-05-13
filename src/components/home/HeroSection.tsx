'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  const [showOrderOptions, setShowOrderOptions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Enhanced food items with better descriptions and price info
  const featuredItems = [
    {
      id: 1,
      name: "Traditional Litti Chokha",
      description: "Whole wheat dough balls filled with roasted gram flour, herbs & spices",
      price: "₹169",
      image: "/images/litti.jpeg"
    },
    {
      id: 2,
      name: "Spicy Baingan Chokha",
      description: "Smoky roasted eggplant mash with aromatic spices and fresh herbs",
      price: "₹49",
      image: "/images/litti-chockha.jpeg"
    },
    {
      id: 3,
      name: "Sattu-Stuffed Litti",
      description: "Our signature litti with premium sattu filling and ghee",
      price: "₹229",
      image: "/images/Main-page.jpg"
    }
  ];

  // Auto rotate featured items
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % featuredItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredItems.length]);

  // Close order options when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setShowOrderOptions(false);
    if (showOrderOptions) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [showOrderOptions]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background with overlay gradient for depth */}
      <div className="absolute inset-0">
        <Image
          src="/images/Des.jpeg"
          alt="Litti Chokha Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-amber-600/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-amber-900/40 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block"
          >
            <span className="bg-amber-500 text-amber-950 text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full">
              Authentic Bihari Cuisine
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg"
          >
            <span className="text-amber-400">Chokha Litti</span>
            <span className="block mt-2 md:mt-3 text-3xl md:text-4xl font-medium">A Taste of Bihar&apos;s Heritage</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto font-light"
          >
            Experience the rustic flavors and traditional recipes perfected over generations
          </motion.p>

          {/* Featured item showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12 relative h-16"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex justify-center items-center"
              >
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-300/30">
                  <div className="w-8 h-8 relative rounded-full overflow-hidden mr-3 border border-amber-300">
                    <Image
                      src={featuredItems[activeIndex].image}
                      alt={featuredItems[activeIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-amber-100 font-medium">
                    {featuredItems[activeIndex].name} 
                    <span className="text-amber-400 ml-2">{featuredItems[activeIndex].price}</span>
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/menu"
                className="inline-block bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg hover:shadow-amber-500/30 transform hover:-translate-y-1"
              >
                Explore Our Menu
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
              onClick={(e) => {
                e.stopPropagation();
                setShowOrderOptions(!showOrderOptions);
              }}
            >
              <button
                className="inline-flex items-center bg-white/10 hover:bg-white/20 border border-amber-300/50 text-white px-8 py-4 rounded-xl font-medium transition-all hover:border-amber-300"
              >
                Order Now
                <svg
                  className={`ml-2 h-5 w-5 transition-transform ${showOrderOptions ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {showOrderOptions && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-10 mt-3 w-64 right-0 sm:left-0 sm:right-auto origin-top rounded-lg bg-white shadow-xl border border-amber-100"
                  >
                    <div className="p-2 space-y-1">
                      <a
                        href="https://zomato.onelink.me/xqzv/6nmthhe9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-3 text-gray-800 hover:bg-amber-50 rounded-md transition-colors"
                      >
                        <div className="bg-red-500 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                          <Image 
                            src="/images/1080px-Zomato_logo.png" 
                            alt="Zomato" 
                            width={20} 
                            height={20}
                          />
                        </div>
                        <div>
                          <div className="font-medium">Order via Zomato</div>
                          <div className="text-xs text-gray-500">Delivered in 30-45 mins</div>
                        </div>
                      </a>
                      <a
                        href="https://www.swiggy.com/menu/1072365?source=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-3 text-gray-800 hover:bg-amber-50 rounded-md transition-colors"
                      >
                        <div className="bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                          <Image 
                            src="/images/Swiggy_logo_PNG2.png" 
                            alt="Swiggy" 
                            width={20} 
                            height={20}
                          />
                        </div>
                        <div>
                          <div className="font-medium">Order via Swiggy</div>
                          <div className="text-xs text-gray-500">Delivered in 25-40 mins</div>
                        </div>
                      </a>
                      <a
                        href="https://wa.me/9289700931"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-3 text-gray-800 hover:bg-amber-50 rounded-md transition-colors"
                      >
                        <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                          <Image 
                            src="/images/whatsapp-logo.png" 
                            alt="WhatsApp" 
                            width={20} 
                            height={20}
                          />
                        </div>
                        <div>
                          <div className="font-medium">Order via WhatsApp</div>
                          <div className="text-xs text-gray-500">Direct message for orders</div>
                        </div>
                      </a>
                    </div>
                    <div className="px-4 py-2 bg-amber-50 text-xs text-amber-800 rounded-b-lg">
                      Use code <span className="font-bold">FIRSTBITE</span> for 15% off
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
          
          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex items-center justify-center"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-amber-600 border-2 border-amber-800 flex items-center justify-center text-xs text-white">
                  {i}
                </div>
              ))}
            </div>
            <div className="ml-3 text-amber-200 text-sm">
              <span className="font-bold">4.8/5</span> based on <span className="font-bold">2,400+</span> reviews
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Subtle animated elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-amber-300/50"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}