'use client';

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

  return (
    <section className="py-16 px-4 bg-amber-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-orange-800 mb-4">
          Why Eat at Chokha Litti?
        </h2>
        <p className="text-xl text-orange-600 text-center mb-12 max-w-3xl mx-auto">
          Discover the unique benefits of our traditional Bihari cuisine
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <span className="text-5xl mb-4">{benefit.icon}</span>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-lg">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;