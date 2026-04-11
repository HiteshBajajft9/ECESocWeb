'use client';

import { motion } from 'framer-motion';
import { FiInstagram, FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import Image from 'next/image';

interface TeamMemberCardProps {
  member: {
    name: string;
    role: string;
    photo: string;
    social: {
      instagram?: string;
      gmail?: string;
      linkedin?: string;
    };
  };
}

export const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 280, damping: 24 }}
      className="group h-full"
    >
      <div className="relative h-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#090909]/90 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] transition-all duration-500 hover:shadow-[0_35px_90px_-20px_rgba(45,212,191,0.28)] hover:border-[#2DD4BF]/30">
        <div className="relative h-full overflow-hidden">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={member.photo}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent" />

            <div className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-20">
              <div className="translate-y-4 transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-lg md:text-xl font-black text-white tracking-tight">{member.name}</h3>
                <p className="text-xs md:text-sm text-neutral-300 mt-1">{member.role}</p>
              </div>
              <div className="mt-5 flex items-center justify-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {member.social.instagram && (
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#2DD4BF]/40 hover:bg-[#2DD4BF]/15 hover:text-[#2DD4BF]"
                  >
                    <FiInstagram size={18} />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#2DD4BF]/40 hover:bg-[#2DD4BF]/15 hover:text-[#2DD4BF]"
                  >
                    <FiLinkedin size={18} />
                  </a>
                )}
                {member.social.gmail && (
                  <a
                    href={`mailto:${member.social.gmail}`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#2DD4BF]/40 hover:bg-[#2DD4BF]/15 hover:text-[#2DD4BF]"
                  >
                    <FiMail size={18} />
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