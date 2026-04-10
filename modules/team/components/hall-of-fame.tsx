'use client';

import { motion, useScroll } from 'framer-motion';
import { useMemo, useState, useRef } from 'react';
import { FiInstagram, FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import Image from 'next/image';
import { SectionReveal } from '@/modules/home/components/section-reveal';
import { hallOfFame } from '../lib/data';
interface HallOfFameMember {
  year: string;
  name: string;
  pastPosition: string;
  tenure: string;
  photo: string;
  social: {
    instagram?: string;
    github?: string;
    gmail?: string;
    linkedin?: string;
  };
}

interface HallOfFameCardProps {
  member: HallOfFameMember;
}

const HallOfFameCard = ({ member }: HallOfFameCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="group h-full w-full"
    >
      <div className="relative h-full flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#090909]/90 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] transition-all duration-500 hover:shadow-[0_25px_70px_-15px_rgba(45,212,191,0.28)] hover:border-[#2DD4BF]/30">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 bg-white/[0.02]">
          <span className="rounded-full bg-[#0f172a] px-3 py-1 text-xs font-bold uppercase tracking-[0.3em] text-[#2DD4BF] border border-[#2DD4BF]/20 shadow-sm">
            {member.year}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
            {member.tenure}
          </span>
        </div>

        <div className="flex flex-1">
          <div className="relative w-28 sm:w-32 shrink-0 overflow-hidden border-r border-white/5 bg-[#040404]">
            <Image
              src={member.photo}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col flex-1 p-4 sm:p-5 bg-gradient-to-br from-[#090909] to-[#040404]">
            <div className="transition-transform duration-300 group-hover:-translate-y-1 h-full flex flex-col">
              <h3 className="text-lg font-bold text-white tracking-tight mb-1">{member.name}</h3>
              <p className="text-sm text-[#2DD4BF] font-semibold mb-1">{member.pastPosition}</p>
              <p className="text-xs text-neutral-400 mb-4">{member.tenure}</p>

              <div className="flex items-center gap-2 mt-auto">
                {member.social.instagram && (
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#2DD4BF]/40 hover:bg-[#2DD4BF]/15 hover:text-[#2DD4BF] hover:shadow-[0_0_10px_rgba(45,212,191,0.2)]"
                  >
                    <FiInstagram size={14} />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#2DD4BF]/40 hover:bg-[#2DD4BF]/15 hover:text-[#2DD4BF] hover:shadow-[0_0_10px_rgba(45,212,191,0.2)]"
                  >
                    <FiLinkedin size={14} />
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#2DD4BF]/40 hover:bg-[#2DD4BF]/15 hover:text-[#2DD4BF] hover:shadow-[0_0_10px_rgba(45,212,191,0.2)]"
                  >
                    <FiGithub size={14} />
                  </a>
                )}
                {member.social.gmail && (
                  <a
                    href={`mailto:${member.social.gmail}`}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#2DD4BF]/40 hover:bg-[#2DD4BF]/15 hover:text-[#2DD4BF] hover:shadow-[0_0_10px_rgba(45,212,191,0.2)]"
                  >
                    <FiMail size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const HallOfFame = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const years = useMemo(
    () => Array.from(new Set(hallOfFame.map((member) => member.year))).sort((a, b) => Number(b) - Number(a)),
    []
  );
  const [selectedYear, setSelectedYear] = useState(years[0] ?? '');

  const selectedMembers = hallOfFame.filter((member) => member.year === selectedYear);

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-16 bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.05),transparent_70%)] pointer-events-none" />

      <SectionReveal className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#2DD4BF] font-black tracking-[0.3em] uppercase text-xs mb-4 block">
            Hall of Fame
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
            Past <span className="text-tertiary drop-shadow-[0_0_30px_rgba(45,212,191,0.3)]">Leaders</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Pick a year to explore the interactive timeline of our past presidents and vice presidents.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
          <div className="relative">
            <div className="sticky top-32 rounded-[2rem] border border-white/10 bg-[#070707]/90 p-4 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.35em] text-[#2DD4BF] mb-4 font-black">Timeline</p>
              <div className="relative space-y-6">
                <div className="absolute left-5 top-5 bottom-5 w-px bg-white/10" />
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-5 top-5 bottom-5 w-px origin-top bg-[#2DD4BF]"
                />
                {years.map((year) => {
                  const isActive = selectedYear === year;
                  const count = hallOfFame.filter((member) => member.year === year).length;

                  return (
                    <button
                      key={year}
                      type="button"
                      onClick={() => setSelectedYear(year)}
                      className={`relative flex w-full items-center gap-3 rounded-3xl border px-4 py-4 pl-16 text-left transition-all duration-300 ${isActive
                          ? 'border-[#2DD4BF] bg-[#062b28] shadow-[0_20px_50px_-30px_rgba(45,212,191,0.8)]'
                          : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
                        }`}
                      aria-pressed={isActive}
                    >
                      <span
                        className={`absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border transition-colors duration-300 ${isActive
                            ? 'border-[#2DD4BF] bg-[#2DD4BF]'
                            : 'border-white/20 bg-[#0a0a0a]'
                          }`}
                      />
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-full border text-sm font-bold ${isActive
                            ? 'border-[#2DD4BF] bg-[#2DD4BF]/15 text-[#2DD4BF]'
                            : 'border-white/10 bg-[#0f172a]/80 text-white/80'
                          }`}
                      >
                        {year}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white">{year}</p>
                        <p className="text-xs text-neutral-400">{count} {count === 1 ? 'card' : 'cards'}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <motion.div
              key={selectedYear}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-[#070707]/80 p-6 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.55)]">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-[#2DD4BF] mb-2">Selected year</p>
                  <h3 className="text-3xl font-black text-white">{selectedYear} Leaders</h3>
                  <p className="mt-2 text-sm text-neutral-400">Showing the timeline cards for the chosen year.</p>
                </div>
                <span className="rounded-full border border-[#2DD4BF]/20 bg-[#0f172a] px-4 py-2 text-sm font-semibold text-[#2DD4BF]">
                  {selectedMembers.length} member{selectedMembers.length === 1 ? '' : 's'}
                </span>
              </div>

              <div ref={containerRef} className="relative grid gap-4 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-6 sm:pb-12">
                {/* Faint Background Line */}
                <div className="hidden sm:block absolute inset-y-4 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                
                {/* Animated Fill Line */}
                <motion.div 
                  className="hidden sm:block absolute top-4 bottom-4 left-1/2 w-[2px] -translate-x-1/2 bg-[#2DD4BF] origin-top shadow-[0_0_15px_rgba(45,212,191,0.6)]"
                  style={{ scaleY: scrollYProgress }}
                />

                {selectedMembers.map((member, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <motion.div
                      key={`${member.name}-${member.year}`}
                      initial={{ opacity: 0, x: isEven ? -30 : 30, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className={`relative flex items-center w-full ${!isEven ? 'sm:top-12' : ''}`}
                    >
                      {/* Timeline Connector Line Wrapper */}
                      <div
                        className={`hidden sm:block absolute z-0 h-px w-6 ${
                          isEven ? '-right-6' : '-left-6'
                        }`}
                      >
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
                          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
                          className={`h-full w-full bg-gradient-to-r ${
                            isEven
                              ? 'origin-right from-transparent to-[#2DD4BF]/40'
                              : 'origin-left from-[#2DD4BF]/40 to-transparent'
                          }`}
                        />
                      </div>

                      {/* Timeline Dot Wrapper */}
                      <div
                        className={`hidden sm:block absolute z-10 ${
                          isEven
                            ? '-right-6 translate-x-1/2'
                            : '-left-6 -translate-x-1/2'
                        }`}
                      >
                         <motion.div
                           initial={{ scale: 0, opacity: 0 }}
                           whileInView={{ scale: 1, opacity: 1 }}
                           viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
                           transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
                           className="h-3 w-3 rounded-full border-2 border-[#0a0a0a] bg-[#2DD4BF] shadow-[0_0_15px_rgba(45,212,191,0.8)]"
                         />
                      </div>

                      <div className="w-full relative z-10">
                        <HallOfFameCard member={member} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
};