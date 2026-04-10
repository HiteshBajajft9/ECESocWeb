'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar, MapPin, ArrowRight, Zap, Code2, Trophy, Cpu,
    Gamepad2, Star, Briefcase, Shield, Wrench, Wifi, Terminal,
} from 'lucide-react';
import { SectionReveal } from '@/modules/home/components/section-reveal';
import { useState } from 'react';

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */

const featuredEvents = [
    {
        id: 'techathon',
        title: 'Tech-A-Thon',
        tagline: '4-Week Hackathon',
        date: 'July-August 2025',
        location: 'ECE Block, BIT Mesra',
        description:
            'ECE Society, BIT Mesra proudly presents its flagship event – Tech-A-Thon. This is a month-long, hybrid inter-college innovation sprint that brings together students from across India to build impactful solutions in Artificial Intelligence/Machine Learning, Core Electronics, Embedded Systems, Automation, and Web Development.',
        icon: Zap,
        color: '#a78bfa',
        badgeLabel: 'Flagship',
        badgeIcon: Star,
        glowRgb: '167,139,250',
        purpleAccent: 'blue-600',
        subEvents: [],
    },
];

const genericEvents = [
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
        tags: ['Tech Fest', 'Multi-Day', 'BIT Mesra'],
    },
    {
        id: 'interninsights',
        title: 'Intern Insights',
        tagline: 'Industry Connect Series',
        date: 'Feb 14, 2025',
        location: 'Seminar Hall, BIT Mesra',
        description:
            'A career-forward session connecting students with industry professionals, featuring panel talks, resume critiques, and insider tips on cracking top internships.',
        icon: Briefcase,
        color: '#34d399',
        gradientFrom: 'from-emerald-500/20',
        gradientTo: 'to-teal-500/10',
        tags: ['Career', 'Industry', 'Internship'],
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
    {
        id: 'pantheon',
        title: 'Pantheon',
        tagline: 'The Ultimate Techfest',
        date: 'Apr 05, 2025',
        location: 'Main Auditorium, BIT Mesra',
        description:
            'Pantheon is the grand techfest of BIT Mesra — a convergence of the brightest engineering minds across India. Packed with technical competitions, hackathons, workshops, and culturals, it celebrates innovation, creativity, and the spirit of engineering at its finest.',
        icon: Shield,
        color: '#f472b6',
        gradientFrom: 'from-pink-500/20',
        gradientTo: 'to-purple-500/10',
        tags: ['Techfest', 'BIT Mesra', 'Annual'],
    },
];

const workshopEvents = [
    {
        id: 'pcb-design',
        title: 'PCB Design',
        tagline: 'Hands-On PCB Workshop',
        date: 'Feb 20, 2025',
        location: 'Electronics Lab, BIT Mesra',
        description:
            'A hands-on workshop covering PCB design fundamentals using KiCad and EasyEDA — from schematic capture to layout, routing, and fabrication-ready exports.',
        icon: Wrench,
        color: '#facc15',
        gradientFrom: 'from-yellow-500/20',
        gradientTo: 'to-orange-500/10',
        tags: ['PCB', 'KiCad', 'Hardware'],
    },
    {
        id: 'iot-bootcamp',
        title: 'IoT Bootcamp',
        tagline: 'Build Connected Devices',
        date: 'Mar 08, 2025',
        location: 'ECE Lab B, BIT Mesra',
        description:
            'A two-day intensive bootcamp covering the full IoT stack — from ESP32 and sensor interfacing to MQTT, cloud dashboards, and real-time monitoring.',
        icon: Wifi,
        color: '#22d3ee',
        gradientFrom: 'from-cyan-500/20',
        gradientTo: 'to-sky-500/10',
        tags: ['IoT', 'ESP32', 'Cloud'],
    },
    {
        id: 'python-for-ece',
        title: 'Python for ECE',
        tagline: 'Signal Processing with Python',
        date: 'Jan 30, 2025',
        location: 'Computing Lab, BIT Mesra',
        description:
            'Learn to apply Python for ECE applications — signal processing with NumPy and SciPy, data visualisation with Matplotlib, and automation of lab measurements.',
        icon: Terminal,
        color: '#a3e635',
        gradientFrom: 'from-lime-500/20',
        gradientTo: 'to-green-500/10',
        tags: ['Python', 'Signal Processing', 'NumPy'],
    },
];

/* ══════════════════════════════════════════
   SUB-EVENT BOX
══════════════════════════════════════════ */

type SubEventBoxProps = {
    name: string;
    subtitle: string;
    icon: React.ElementType;
    accentColor: string;
};

function SubEventBox({ name, subtitle, icon: Icon, accentColor }: SubEventBoxProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden flex items-center gap-4 px-5 py-4 rounded-2xl bg-[#0a0a0a]/80 border cursor-pointer transition-all duration-300"
            style={{ borderColor: `${accentColor}25`, boxShadow: `0 4px 20px -8px ${accentColor}20` }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${accentColor}55`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px -8px ${accentColor}45`;
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${accentColor}25`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px -8px ${accentColor}20`;
            }}
        >
            <div className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, ${accentColor}08, transparent)` }} />

            <div className="relative flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl border"
                style={{ backgroundColor: `${accentColor}12`, borderColor: `${accentColor}25` }}>
                <Icon className="w-5 h-5" style={{ color: accentColor }} />
            </div>

            <div className="relative flex flex-col gap-0.5 flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-black uppercase tracking-wider text-white/90">{name}</span>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest border"
                        style={{ backgroundColor: `${accentColor}15`, borderColor: `${accentColor}30`, color: accentColor }}>
                        Sub-Event
                    </span>
                </div>
                <span className="text-[11px] text-neutral-500 font-medium truncate">{subtitle}</span>
            </div>

            <ArrowRight className="relative flex-shrink-0 w-4 h-4 transition-all duration-300"
                style={{ color: `${accentColor}60` }} />
        </motion.div>
    );
}

/* ══════════════════════════════════════════
   FEATURED CARD (Bitotsav / Techathon)
══════════════════════════════════════════ */

function FeaturedCard({ event }: { event: typeof featuredEvents[0] }) {
    const Icon = event.icon;
    const BadgeIcon = event.badgeIcon;
    return (
        <motion.div
            whileHover={{ y: -6, scale: 1.015 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="group relative p-10 md:p-12 bg-[#0d0d0d]/90 backdrop-blur-xl rounded-[3rem] overflow-hidden cursor-pointer transition-all duration-500"
            style={{
                border: `1px solid ${event.color}30`,
                boxShadow: `0 24px 80px -20px rgba(0,0,0,0.9)`,
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${event.color}60`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 32px 80px -12px rgba(${event.glowRgb},0.28)`;
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${event.color}30`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 24px 80px -20px rgba(0,0,0,0.9)`;
            }}
        >
            {/* Glow blob */}
            <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none rounded-[3rem]"
                style={{ background: `radial-gradient(ellipse at 30% 30%, ${event.color}22, transparent 70%)` }} />

            {/* Inner surface tint */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem] pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${event.color}07, transparent)` }} />

            {/* Top shimmer */}
            <div className="absolute top-0 left-12 right-12 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `linear-gradient(90deg, transparent, ${event.color}80, transparent)` }} />

            {/* Badge — only shown when set */}
            {BadgeIcon && event.badgeLabel && (
                <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-sm border"
                    style={{ backgroundColor: `${event.color}12`, borderColor: `${event.color}30` }}>
                    <BadgeIcon className="w-3 h-3" style={{ color: event.color, fill: event.color }} />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em]" style={{ color: event.color }}>
                        {event.badgeLabel}
                    </span>
                </div>
            )}

            <div className="relative z-10 flex flex-col gap-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl border transition-all duration-400 group-hover:scale-110 group-hover:rotate-3"
                        style={{ backgroundColor: `${event.color}15`, borderColor: `${event.color}30` }}>
                        <Icon className="w-6 h-6" style={{ color: event.color }} />
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-black uppercase tracking-[0.15em]"
                        style={{ backgroundColor: `${event.color}10`, borderColor: `${event.color}25`, color: event.color }}>
                        <Calendar className="w-3.5 h-3.5" />
                        {event.date}
                    </div>
                </div>

                {/* Title */}
                <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500 group-hover:opacity-70 transition-colors duration-300"
                        style={{ color: 'inherit' }}>
                        {event.tagline}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none text-white transition-colors duration-400"
                        style={{ ['--ec' as string]: event.color }}>
                        <span className="group-hover:text-[--ec] transition-colors duration-400"
                            style={{ ['--ec' as string]: event.color }}>
                            {event.title}
                        </span>
                    </h2>
                </div>

                {/* Description */}
                <p className="text-neutral-400 font-medium leading-relaxed text-base md:text-lg group-hover:text-neutral-200 transition-colors duration-300">
                    {event.description}
                </p>

                {/* Sub-events */}
                {event.subEvents.length > 0 && (
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-600">
                            Sub-Events
                        </span>
                        <div className="flex flex-col gap-2">
                            {event.subEvents.map((sub) => (
                                <SubEventBox key={sub.name} {...sub} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors duration-300">
                    <div className="flex items-center gap-2 text-neutral-500 group-hover:text-neutral-300 transition-colors text-xs font-bold uppercase tracking-widest">
                        <MapPin className="w-4 h-4" style={{ color: `${event.color}80` }} />
                        <span className="font-mono">{event.location}</span>
                    </div>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-neutral-600 group-hover:text-white transition-colors duration-300">
                    <div className="w-6 h-[1px] transition-all duration-500 group-hover:w-10"
                        style={{ backgroundColor: event.color }} />
                    <span>Explore Event</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                        style={{ color: event.color }} />
                </div>
            </div>
        </motion.div>
    );
}

/* ══════════════════════════════════════════
   GENERIC EVENT CARD (with description hover reveal)
══════════════════════════════════════════ */

function EventCard({ event, delay }: { event: typeof genericEvents[0]; delay: number }) {
    const Icon = event.icon;
    const [hovered, setHovered] = useState(false);

    return (
        <SectionReveal delay={delay}>
            <motion.div
                className="group relative overflow-hidden cursor-pointer rounded-[2.5rem] border border-white/5 bg-[#111]/80 backdrop-blur-md transition-all duration-500"
                style={{ boxShadow: '0 20px 60px -20px rgba(0,0,0,0.8)' }}
                whileHover={{ y: -5, scale: 1.015 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${event.color}30`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 24px 60px -12px ${event.color}25`;
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px -20px rgba(0,0,0,0.8)';
                }}
            >
                {/* Glow layer */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${event.gradientFrom} via-transparent ${event.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none`} />
                <div className={`absolute inset-0 bg-gradient-to-br ${event.gradientFrom} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] pointer-events-none`} />

                {/* Top shimmer */}
                <div className="absolute top-0 left-10 right-10 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `linear-gradient(90deg, transparent, ${event.color}60, transparent)` }} />

                {/* ── Static content (always visible) ── */}
                <div className="relative z-10 p-8 md:p-10 flex flex-col gap-5">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center justify-center w-14 h-14 rounded-2xl border transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                            style={{ backgroundColor: `${event.color}15`, borderColor: `${event.color}30` }}>
                            <Icon className="w-6 h-6" style={{ color: event.color }} />
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-black uppercase tracking-[0.15em]"
                            style={{ backgroundColor: `${event.color}10`, borderColor: `${event.color}25`, color: event.color }}>
                            <Calendar className="w-3.5 h-3.5" />
                            {event.date}
                        </div>
                    </div>

                    {/* Title */}
                    <div className="flex flex-col gap-1">
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500 group-hover:text-neutral-400 transition-colors">
                            {event.tagline}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none text-white transition-colors duration-300"
                            style={{ ['--ec' as string]: event.color }}>
                            <span className="group-hover:text-[--ec] transition-colors duration-300"
                                style={{ ['--ec' as string]: event.color }}>
                                {event.title}
                            </span>
                        </h2>
                    </div>

                    {/* ── Hover-reveal description ── */}
                    <AnimatePresence>
                        {hovered && (
                            <motion.div
                                key="desc"
                                initial={{ opacity: 0, height: 0, y: 8 }}
                                animate={{ opacity: 1, height: 'auto', y: 0 }}
                                exit={{ opacity: 0, height: 0, y: 8 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                            >
                                <p className="text-neutral-300 font-medium leading-relaxed text-sm md:text-base pt-1 pb-2">
                                    {event.description}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors duration-300 mt-auto">
                        <div className="flex items-center gap-2 text-neutral-500 group-hover:text-neutral-400 transition-colors text-xs font-bold uppercase tracking-widest">
                            <MapPin className="w-4 h-4" style={{ color: `${event.color}70` }} />
                            <span className="font-mono">{event.location}</span>
                        </div>
                        <div className="flex gap-2">
                            {event.tags.slice(0, 2).map((tag) => (
                                <span key={tag}
                                    className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 text-white/40 group-hover:bg-white/10 group-hover:text-white/60 transition-all duration-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-neutral-600 group-hover:text-white transition-colors duration-300">
                        <div className="w-6 h-[1px] transition-all duration-500 group-hover:w-10"
                            style={{ backgroundColor: event.color }} />
                        <span>Explore Event</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                            style={{ color: event.color }} />
                    </div>
                </div>
            </motion.div>
        </SectionReveal>
    );
}

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-[#080808] text-white overflow-x-hidden">
            {/* Ambient glows */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#2DD4BF]/5 rounded-full blur-[160px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[140px]" />
            </div>

            {/* Hero */}
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
                        <span className="text-[#2DD4BF] drop-shadow-[0_0_40px_rgba(45,212,191,0.35)]">Events</span>
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

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
            </section>

            {/* ── Featured Events (2-col) ── */}
            <section className="relative px-6 md:px-12 lg:px-20 pb-16 max-w-[1600px] mx-auto">
                <SectionReveal className="mb-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-600">
                        ── Flagship Events
                    </span>
                </SectionReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {featuredEvents.map((event, i) => (
                        <SectionReveal key={event.id} delay={i * 0.1}>
                            <FeaturedCard event={event} />
                        </SectionReveal>
                    ))}
                </div>
            </section>

            {/* ── Generic Events (3-col) ── */}
            <section className="relative px-6 md:px-12 lg:px-20 pb-40 max-w-[1600px] mx-auto">
                <SectionReveal className="mb-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-600">
                        ── All Events
                    </span>
                </SectionReveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {genericEvents.map((event, i) => (
                        <EventCard key={event.id} event={event} delay={i * 0.1} />
                    ))}
                </div>
            </section>
            {/* ── Workshops (3-col) ── */}
            <section className="relative px-6 md:px-12 lg:px-20 pb-40 max-w-[1600px] mx-auto">
                <SectionReveal className="mb-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-600">
                        ── Workshops
                    </span>
                </SectionReveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {workshopEvents.map((event, i) => (
                        <EventCard key={event.id} event={event} delay={i * 0.1} />
                    ))}
                </div>
            </section>
        </main>
    );
}
