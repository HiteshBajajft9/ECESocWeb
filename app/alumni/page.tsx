"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Search, Check, Mail, ChevronLeft, ChevronRight } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function AlumniPage() {
  const [activeFeatured, setActiveFeatured] = useState(0);

  const featuredAlumni = [
    {
      name: "Ananya",
      lastName: "Iyer",
      role: "Neural Systems Architect",
      description: "Pioneering the intersection of neural networks and architectural bio-mimicry at the forefront of urban evolution. Her ground-breaking research at the ECE Society laid the foundation for modern adaptive smart-cities, directly influencing metropolitan infrastructures across four continents.",
      image: "/images/alumni/elara.png",
      year: "K15 batch"
    },
    {
      name: "Arjun",
      lastName: "Mehta",
      role: "Lead Systems Architect",
      description: "Specializing in the development of hyper-redundant power grids for low-earth orbit satellite constellations and deep-space missions. Arjun's innovative research continues to push the boundaries of energy efficiency in orbital environments, ensuring resilient connectivity for the next generation of global communications.",
      image: "/images/alumni/marcus.png",
      year: "K18 batch"
    },
    {
      name: "Ishita",
      lastName: "Sharma",
      role: "AI Safety Researcher",
      description: "Spearheading the development of robust ethical alignment protocols for large-scale generative models at OpenAI. Ishita's published frameworks on algorithmic transparency have set new global standards, ensuring that advanced machine learning systems are navigated safely and serve humanity's core interests.",
      image: "/images/alumni/sarah.png",
      year: "K20 batch"
    }
  ];

  const nextProfile = () => {
    setActiveFeatured((prev) => (prev + 1) % featuredAlumni.length);
  };

  const prevProfile = () => {
    setActiveFeatured((prev) => (prev - 1 + featuredAlumni.length) % featuredAlumni.length);
  };

  const alumniList = [
    {
      name: "Arjun Mehta",
      image: "/images/alumni/marcus.png",
      role: "Lead Systems Architect",
      description: "Specializing in redundant power grids for low-earth orbit satellite constellations.",
      year: "K18 batch"
    },
    {
      name: "Ishita Sharma",
      image: "/images/alumni/sarah.png",
      role: "AI Safety Researcher",
      description: "Developing ethical alignment protocols for large-scale generative models at OpenAI.",
      year: "K20 batch"
    },
    {
      name: "Kabir Malhotra",
      image: "/images/alumni/julian.png",
      role: "Creative Director",
      description: "Bridging the gap between industrial hardware design and spatial computing interfaces.",
      year: "K16 Batch"
    },
    {
      name: "Priyanka Das",
      image: "/images/alumni/elena.png",
      role: "Hardware Lead",
      description: "Developing the next generation of wearable bio-sensors for extreme environmental tracking.",
      year: "K19 Batch"
    }
  ];

  const currentAlumnus = featuredAlumni[activeFeatured];

  return (
    <main className="min-h-screen bg-[#080808] text-white pt-24 pb-32">
      {/* 1. Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2DD4BF]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

        <div className="absolute top-40 left-1/2 -translate-x-1/2 text-[180px] font-black text-white/[0.02] tracking-tighter select-none pointer-events-none leading-none uppercase">
          Legacy
        </div>



        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`info-${activeFeatured}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8 absolute top-0 left-0 w-full"
              >

                <div className="flex items-center gap-4">
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 backdrop-blur-sm">
                    <span className="text-[#2DD4BF] text-[10px] font-bold uppercase tracking-[0.2em]">
                      Distinguished Alumni
                    </span>
                  </div>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                  {currentAlumnus.name} <span className="text-[#2DD4BF]">{currentAlumnus.lastName}</span>
                </h1>

                <p className="text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed font-light">
                  {currentAlumnus.description}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#080808] font-bold uppercase tracking-widest text-xs hover:bg-[#2DD4BF] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] transition-all duration-500 transform hover:-translate-y-1">
                    Read More
                    <ArrowUpRight className="w-4 h-4 text-[#080808]" />
                  </button>
                  <button className="flex items-center gap-2 px-8 py-4 border-2 border-white/10 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:border-[#2DD4BF] hover:bg-[#2DD4BF]/5 transition-all duration-500 transform hover:-translate-y-1 backdrop-blur-sm">
                    View Profile
                  </button>
                </div>


              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="relative w-full max-w-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`image-${activeFeatured}`}
                  initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-[#1A1A1A]"></div>
                  <Image
                    src={currentAlumnus.image}
                    alt={currentAlumnus.name}
                    fill
                    className="object-cover group-hover:scale-[1.05] transition-transform duration-1000 ease-out relative z-0"
                    priority
                  />

                  <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-[#2DD4BF] text-xs font-bold uppercase tracking-widest mb-1">{currentAlumnus.role}</p>
                    <p className="text-white text-lg font-medium">{currentAlumnus.name} {currentAlumnus.lastName}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevProfile}
                className="p-4 rounded-full border border-white/10 hover:border-[#2DD4BF]/50 hover:bg-[#2DD4BF]/5 transition-all group"
                aria-label="Previous profile"
              >
                <ChevronLeft className="w-5 h-5 text-neutral-400 group-hover:text-[#2DD4BF] transition-colors" />
              </button>

              <div className="flex items-center gap-2 px-4">
                {featuredAlumni.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === activeFeatured ? 'w-8 bg-[#2DD4BF]' : 'w-2 bg-white/10'}`}
                  />
                ))}
              </div>

              <button
                onClick={nextProfile}
                className="p-4 rounded-full border border-white/10 hover:border-[#2DD4BF]/50 hover:bg-[#2DD4BF]/5 transition-all group"
                aria-label="Next profile"
              >
                <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-[#2DD4BF] transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Archive Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 md:pt-32 md:pb-40">
        <motion.div
          animate="visible"
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              The <span className="text-[#2DD4BF]">Archive</span>
            </h2>
            <p className="text-neutral-400 text-lg font-light">
              Tracing the legacy of ECE Society excellence through decades of innovation.
            </p>
          </div>

          <div className="relative w-full md:w-64 lg:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              placeholder="Search alumni..."
              className="w-full bg-[#1A1A1A] border border-white/5 text-white placeholder:text-neutral-500 rounded-full py-3.5 pl-11 pr-4 focus:outline-none focus:border-[#2DD4BF]/50 focus:ring-1 focus:ring-[#2DD4BF]/50 transition-all text-sm"
            />
          </div>
        </motion.div>

        {/* 3. Alumni Cards Grid */}
        <motion.div
          animate="visible"
          variants={staggerChildren}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {alumniList.map((alumni) => (
            <motion.div
              key={alumni.name}
              variants={fadeUp}
              className="group relative bg-[#1A1A1A] rounded-2xl border border-white/5 overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgb(0,0,0,0.6)] transition-all duration-300 flex flex-col"
            >
              <div className="relative w-full aspect-square overflow-hidden bg-[#121212]">
                <Image
                  src={alumni.image}
                  alt={alumni.name}
                  fill
                  className="object-cover grayscale mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-[#2DD4BF] text-xs font-bold tracking-wider uppercase mb-2">{alumni.role}</p>
                <h3 className="text-xl font-semibold mb-3 text-white">{alumni.name}</h3>
                <p className="text-sm text-neutral-400 mb-6 flex-grow leading-relaxed font-light">
                  "{alumni.description}"
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                  <span className="text-sm text-neutral-500 font-medium">
                    {alumni.year}
                  </span>
                  <div className="flex items-center gap-3 px-3 py-1.5 bg-[#080808]/80 backdrop-blur-md border border-white/5 rounded-full opacity-100 md:opacity-0 md:translate-y-1.5 md:scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-400 ease-out origin-right">
                    <button className="text-neutral-400 hover:text-white transition-colors outline-none">
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </button>
                    <button className="text-neutral-400 hover:text-white transition-colors outline-none">
                      <Mail className="w-3.5 h-3.5" />
                    </button>
                    <button className="text-neutral-400 hover:text-white transition-colors outline-none">
                      <InstagramIcon className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. Alumni Network Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="bg-[#1A1A1A] border border-white/5 rounded-3xl overflow-hidden shadow-2xl relative"
        >
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2DD4BF]/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stay Connected to the <span className="text-[#2DD4BF]">Network</span>
              </h2>
              <p className="text-neutral-400 text-lg mb-10 max-w-md leading-relaxed font-light">
                Your expertise is our foundation. Join the network to mentor the current batch, access the alumni portal, and collaborate on next-gen projects.
              </p>

              <ul className="space-y-4">
                {[
                  "Quarterly Newsletter",
                  "Mentorship Opportunities",
                  "Exclusive Networking Opportunity"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 flex justify-center items-center w-6 h-6 rounded-full bg-[#2DD4BF]/10 text-[#2DD4BF]">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </div>
                    <span className="text-neutral-200 font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 md:p-12 lg:p-16 bg-[#0E0E0E] border-l border-white/5 flex flex-col justify-center">
              <form className="space-y-5 max-w-sm mx-auto w-full">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-neutral-400 font-medium ml-1">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-[#1A1A1A] border border-white/5 rounded-full px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2DD4BF]/50 focus:bg-[#202020] transition-colors"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-neutral-400 font-medium ml-1">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-[#1A1A1A] border border-white/5 rounded-full px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2DD4BF]/50 focus:bg-[#202020] transition-colors"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-neutral-400 font-medium ml-1">Email</label>
                  <input
                    type="email"
                    className="w-full bg-[#1A1A1A] border border-white/5 rounded-full px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2DD4BF]/50 focus:bg-[#202020] transition-colors"
                    placeholder="test@example.com"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-neutral-400 font-medium ml-1">Current Role</label>
                  <input
                    type="text"
                    className="w-full bg-[#1A1A1A] border border-white/5 rounded-full px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2DD4BF]/50 focus:bg-[#202020] transition-colors"
                    placeholder="Senior Engineer at..."
                  />
                </div>

                <button type="button" className="w-full py-4 mt-2 rounded-full bg-white text-[#080808] font-bold uppercase tracking-widest text-xs hover:bg-[#2DD4BF] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] transition-all duration-500 transform hover:-translate-y-1">
                  Submit Registration
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
