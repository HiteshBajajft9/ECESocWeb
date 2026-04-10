'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
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
      className="group"
    >
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#090909]/90 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] transition-all duration-500 hover:shadow-[0_25px_70px_-15px_rgba(45,212,191,0.28)] hover:border-[#2DD4BF]/30">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-3 py-2">
          <span className="rounded-full bg-[#0f172a] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#2DD4BF] border border-[#2DD4BF]/20 shadow-sm">
            {member.year}
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
            {member.tenure}
          </span>
        </div>

        <div className="flex">
          <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-l-xl">
            <Image
              src={member.photo}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="flex-1 p-3">
            <div className="transition-transform duration-300 group-hover:-translate-y-1">
              <h3 className="text-sm font-bold text-white tracking-tight mb-1">{member.name}</h3>
              <p className="text-xs text-[#2DD4BF] font-medium mb-0.5">{member.pastPosition}</p>
              <p className="text-xs text-neutral-400 mb-2">{member.tenure}</p>

              <div className="flex items-center gap-1.5">
                {member.social.instagram && (
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#2DD4BF]/40 hover:bg-[#2DD4BF]/15 hover:text-[#2DD4BF]"
                  >
                    <FiInstagram size={10} />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#2DD4BF]/40 hover:bg-[#2DD4BF]/15 hover:text-[#2DD4BF]"
                  >
                    <FiLinkedin size={10} />
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#2DD4BF]/40 hover:bg-[#2DD4BF]/15 hover:text-[#2DD4BF]"
                  >
                    <FiGithub size={10} />
                  </a>
                )}
                {member.social.gmail && (
                  <a
                    href={`mailto:${member.social.gmail}`}
                    className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#2DD4BF]/40 hover:bg-[#2DD4BF]/15 hover:text-[#2DD4BF]"
                  >
                    <FiMail size={10} />
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

              <div className="grid gap-4 sm:grid-cols-2">
                {selectedMembers.map((member, index) => (
                  <motion.div
                    key={`${member.name}-${member.year}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <HallOfFameCard member={member} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
};