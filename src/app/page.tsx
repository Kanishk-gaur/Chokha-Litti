'use client';

import HeroSection from '@/components/home/HeroSection';
import About from '@/components/about/aboutcode';
import Testimonials from '@/app/(main)/reviews/page';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Recipe from './(main)/recipe/page';
import Location from './(main)/location/page';
import Benefits from '@/components/benefits/benefits';

export default function Home() {
  // const [showFullSite, setShowFullSite] = useState(false);

  // if (!showFullSite) {
  //   return (
  //     <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4">
  //       {/* Background Image */}
  //       <div className="absolute inset-0 overflow-hidden">
  //         <Image
  //           src="/images/Main-page1.jpg"
  //           alt="Chokha Litti"
  //           fill
  //           className="object-cover opacity-50"
  //           priority
  //         />
  //       </div>

  //       {/* Content */}
  //       <div className="relative z-10 text-center text-white max-w-2xl">
  //         <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
  //           Discover Authentic Chokha Litti
  //         </h1>
  //         <p className="text-lg md:text-xl mb-8">
  //           Experience the traditional flavors of Bihar with our handcrafted Litti Chokha
  //         </p>

  //         <button
  //           onClick={() => setShowFullSite(true)}
  //           className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-semibold animate-bounce mt-8"
  //         >
  //           Enter Our Kitchen
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <>
      <Navbar />
      <div className="scroll-smooth">
        <main>
          <section id="home">
            <HeroSection />
          </section>
          <section id="about" className="scroll-mt-20">
            <About/>
          </section>
          <section id="menu" className="scroll-mt-20">
            <Recipe/>
          </section>
          <section id="benefits" className="scroll-mt-20">
            <Benefits />
          </section>
          <section id="reviews" className="scroll-mt-20">
            <Testimonials />
          </section>
          <section id="location" className="scroll-mt-20">
            <Location />
          </section>
          {/* <section id="feedback" className="scroll-mt-20">
            <FeedbackForm />
          </section> */}
         
        </main>
      </div>
      <Footer />
    </>
  );
}