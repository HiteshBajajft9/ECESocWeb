'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, Zap, Code2, Trophy, Cpu } from 'lucide-react';
import { SectionReveal } from '@/modules/home/components/section-reveal';

const events = [
    {
        id: 'bitotsav',
        title: 'Bitotsav',
        tagline: 'The Grand Tech Fest',
        date: 'Mar 14–16, 2025',
        location: 'Main Campus, BIT Mesra',
        description:
            'The flagship annual techno-cultural festival of BIT Mesra. Three days of innovation, competitions, workshops, and performances uniting the brightest minds from across the nation.',
        icon: Trophy,
        color: '#2DD4BF',
        gradientFrom: 'from-[#2DD4BF]/20',
        gradientTo: 'to-purple-500/10',
        tags: ['Flagship', 'Annual Fest', 'Multi-Day'],
    },
    {
        id: 'techathon',
        title: 'Techathon',
        tagline: '24-Hour Hackathon',
        date: 'Jan 22, 2025',
        location: 'ECE Block, BIT Mesra',
        description:
            'A high-velocity 24-hour hackathon where teams race against the clock to build embedded, IoT, and hardware solutions for real-world engineering problems.',
        icon: Zap,
        color: '#a78bfa',
        gradientFrom: 'from-purple-500/20',
        gradientTo: 'to-blue-500/10',
        tags: ['Hackathon', '24 Hours', 'Hardware'],
    },
    {
        id: 'codeverse',
        title: 'Codeverse',
        tagline: 'Competitive Programming',
        date: 'Feb 08, 2025',
        location: 'Computing Labs, BIT Mesra',
        description:
            "An intense competitive programming contest spanning multiple difficulty tiers — from DSA to system design — crafted to challenge and elevate every coder's limits.",
        icon: Code2,
        color: '#38bdf8',
        gradientFrom: 'from-sky-500/20',
        gradientTo: 'to-[#2DD4BF]/10',
        tags: ['DSA', 'Competitive', 'Coding'],
    },
    {
        id: 'electroquiz',
        title: 'Electroquiz',
        tagline: 'Electronics Quiz Championship',
        date: 'Mar 01, 2025',
        location: 'Seminar Hall, ECE Dept.',
        description:
            'A rigorous electronics and communication engineering quiz that pushes participants on circuit theory, signal processing, microcontrollers, and beyond.',
        icon: Cpu,
        color: '#fb923c',
        gradientFrom: 'from-orange-500/20',
        gradientTo: 'to-red-500/10',
        tags: ['Electronics', 'Quiz', 'ECE Domain'],
    },
];

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-[#080808] text-white overflow-x-hidden">
            {/* Ambient background glows */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#2DD4BF]/5 rounded-full blur-[160px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[140px]" />
            </div>

            {/* Page Hero */}
            <section className="relative flex flex-col items-center justify-center text-center px-6 pt-48 pb-32 overflow-hidden">
                <SectionReveal className="flex flex-col items-center gap-6 relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="text-[#2DD4BF] font-black tracking-[0.4em] uppercase text-xs"
                    >
                        ECE Society · Events
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85]"
                    >
                        <span className="text-white">Our</span>{' '}
                        <span className="text-[#2DD4BF] drop-shadow-[0_0_40px_rgba(45,212,191,0.35)]">
                            Events
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
                        className="text-neutral-400 text-lg md:text-xl font-medium max-w-2xl leading-relaxed mt-2"
                    >
                        Where circuits meet creativity. Explore the signature events crafted by the
                        ECE Society to challenge, inspire, and connect the engineering community.
                    </motion.p>
                </SectionReveal>

                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
            </section>

            {/* Events Grid */}
            <section className="relative px-6 md:px-12 lg:px-20 pb-40 max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {events.map((event, index) => {
                        const Icon = event.icon;
                        return (
                            <SectionReveal
                                key={event.id}
                                delay={index * 0.1}
                                className="group relative p-10 md:p-12 bg-[#111]/80 backdrop-blur-md rounded-[3rem] border border-white/5 hover:border-white/15 transition-all duration-500 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] overflow-hidden cursor-pointer"
                            >
                                {/* Animated hover glow */}
                                <div
                                    className={`absolute -inset-1 bg-gradient-to-br ${event.gradientFrom} via-transparent ${event.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none`}
                                />
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${event.gradientFrom} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem] pointer-events-none`}
                                />

                                {/* Corner accent line */}
                                <div
                                    className="absolute top-0 left-12 right-12 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: `linear-gradient(90deg, transparent, ${event.color}60, transparent)`,
                                    }}
                                />

                                <div className="relative z-10 flex flex-col h-full gap-6">
                                    {/* Header row */}
                                    <div className="flex items-start justify-between gap-4">
                                        {/* Icon badge */}
                                        <div
                                            className="flex items-center justify-center w-14 h-14 rounded-2xl border transition-all duration-300 group-hover:scale-110"
                                            style={{
                                                backgroundColor: `${event.color}15`,
                                                borderColor: `${event.color}30`,
                                            }}
                                        >
                                            <Icon
                                                className="w-6 h-6 transition-colors duration-300"
                                                style={{ color: event.color }}
                                            />
                                        </div>

                                        {/* Date pill */}
                                        <div
                                            className="flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-black uppercase tracking-[0.15em] transition-all duration-300"
                                            style={{
                                                backgroundColor: `${event.color}10`,
                                                borderColor: `${event.color}25`,
                                                color: event.color,
                                            }}
                                        >
                                            <Calendar className="w-3.5 h-3.5" />
                                            {event.date}
                                        </div>
                                    </div>

                                    {/* Title block */}
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500 group-hover:text-neutral-400 transition-colors">
                                            {event.tagline}
                                        </span>
                                        <h2
                                            className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none transition-colors duration-300 group-hover:text-[--event-color]"
                                            style={
                                                {
                                                    '--event-color': event.color,
                                                } as React.CSSProperties
                                            }
                                        >
                                            <span className="text-white group-hover:text-[--event-color] transition-colors duration-300">
                                                {event.title}
                                            </span>
                                        </h2>
                                    </div>

                                    {/* Description */}
                                    <p className="text-neutral-400 font-medium leading-relaxed text-base md:text-lg group-hover:text-neutral-300 transition-colors duration-300 flex-grow">
                                        {event.description}
                                    </p>

                                    {/* Footer row */}
                                    <div className="flex items-center justify-between pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors duration-300">
                                        {/* Location */}
                                        <div className="flex items-center gap-2 text-neutral-500 group-hover:text-neutral-400 transition-colors text-xs font-bold uppercase tracking-widest">
                                            <MapPin
                                                className="w-4 h-4 transition-colors duration-300"
                                                style={{ color: `${event.color}70` }}
                                            />
                                            <span className="font-mono">{event.location}</span>
                                        </div>

                                        {/* Tags */}
                                        <div className="flex gap-2">
                                            {event.tags.slice(0, 2).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 text-white/40 group-hover:bg-white/10 group-hover:text-white/60 transition-all duration-300"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Learn more CTA */}
                                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-neutral-600 group-hover:text-white transition-colors duration-300 mt-1">
                                        <div
                                            className="w-6 h-[1px] transition-all duration-500 group-hover:w-10"
                                            style={{ backgroundColor: event.color }}
                                        />
                                        <span>Explore Event</span>
                                        <ArrowRight
                                            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                                            style={{ color: event.color }}
                                        />
                                    </div>
                                </div>
                            </SectionReveal>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}
