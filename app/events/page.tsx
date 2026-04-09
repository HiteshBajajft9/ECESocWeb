'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, Zap, Code2, Trophy, Cpu, Gamepad2, Star, Briefcase } from 'lucide-react';
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
        isFeatured: true,
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
        isFeatured: false,
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
        isFeatured: false,
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
        isFeatured: false,
    },
];

/* ─── Reusable sub-event box ─── */
type SubEventBoxProps = {
    name: string;
    subtitle: string;
    icon: React.ElementType;
    accentColor: string;
    glowColor: string;
    groupId: string;
};

function SubEventBox({ name, subtitle, icon: Icon, accentColor, glowColor, groupId }: SubEventBoxProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`relative group/${groupId} overflow-hidden flex items-center gap-4 px-5 py-4 rounded-2xl bg-[#0a0a0a]/80 border cursor-pointer transition-all duration-300`}
            style={{
                borderColor: `${accentColor}25`,
                boxShadow: `0 4px 24px -8px ${glowColor}25`,
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${accentColor}55`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px -8px ${glowColor}45`;
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${accentColor}25`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 24px -8px ${glowColor}25`;
            }}
        >
            {/* Glow on hover */}
            <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${accentColor}08, transparent)` }}
            />

            {/* Icon */}
            <div
                className="relative flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl border transition-colors duration-300"
                style={{ backgroundColor: `${accentColor}12`, borderColor: `${accentColor}25` }}
            >
                <Icon className="w-5 h-5" style={{ color: accentColor }} />
            </div>

            {/* Text */}
            <div className="relative flex flex-col gap-0.5 flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-black uppercase tracking-wider text-white/90 transition-colors">
                        {name}
                    </span>
                    <span
                        className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest border"
                        style={{ backgroundColor: `${accentColor}15`, borderColor: `${accentColor}30`, color: accentColor }}
                    >
                        Sub-Event
                    </span>
                </div>
                <span className="text-[11px] text-neutral-500 transition-colors font-medium truncate">
                    {subtitle}
                </span>
            </div>

            {/* Arrow */}
            <ArrowRight className="relative flex-shrink-0 w-4 h-4 text-neutral-600 transition-all duration-300" style={{ color: `${accentColor}60` }} />
        </motion.div>
    );
}

/* ─── Electropoly box (Bitotsav) ─── */
function ElectropolyBox() {
    return (
        <SubEventBox
            name="Electropoly"
            subtitle="Strategy · Board Game · Team Play"
            icon={Gamepad2}
            accentColor="#2DD4BF"
            glowColor="#2DD4BF"
            groupId="electropoly"
        />
    );
}

/* ─── Intern Insights box (Techathon) ─── */
function InternInsightsBox() {
    return (
        <SubEventBox
            name="Intern Insights"
            subtitle="Career Talks · Industry Connect · Resume Tips"
            icon={Briefcase}
            accentColor="#a78bfa"
            glowColor="#a78bfa"
            groupId="interninsights"
        />
    );
}

/* ─── Bitotsav featured card ─── */
function BitotsavCard({ event }: { event: typeof events[0] }) {
    const Icon = event.icon;
    return (
        <motion.div
            whileHover={{ y: -6, scale: 1.015 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="
                group relative p-10 md:p-12
                bg-[#0d0d0d]/90 backdrop-blur-xl
                rounded-[3rem] overflow-hidden cursor-pointer
                border border-[#2DD4BF]/20
                hover:border-[#2DD4BF]/50
                shadow-[0_24px_80px_-20px_rgba(0,0,0,0.9)]
                hover:shadow-[0_32px_80px_-12px_rgba(45,212,191,0.25)]
                transition-all duration-500
            "
        >
            {/* Pulsing outer ring on hover */}
            <div className="absolute -inset-px rounded-[3rem] border border-[#2DD4BF]/0 group-hover:border-[#2DD4BF]/30 transition-all duration-700 pointer-events-none" />

            {/* Large diffuse glow blob */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#2DD4BF]/25 via-transparent to-purple-600/15 opacity-0 group-hover:opacity-100 transition-opacity duration-600 blur-3xl pointer-events-none rounded-[3rem]" />

            {/* Inner surface tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/6 via-transparent to-purple-500/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem] pointer-events-none" />

            {/* Top shimmer line */}
            <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#2DD4BF]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Flagship badge */}
            <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2DD4BF]/10 border border-[#2DD4BF]/25 backdrop-blur-sm">
                <Star className="w-3 h-3 text-[#2DD4BF] fill-[#2DD4BF]" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#2DD4BF]">Flagship</span>
            </div>

            <div className="relative z-10 flex flex-col gap-6">
                {/* Header row */}
                <div className="flex items-start justify-between gap-4">
                    <div
                        className="flex items-center justify-center w-14 h-14 rounded-2xl border transition-all duration-400 group-hover:scale-110 group-hover:rotate-3"
                        style={{ backgroundColor: `${event.color}15`, borderColor: `${event.color}30` }}
                    >
                        <Icon className="w-6 h-6" style={{ color: event.color }} />
                    </div>
                    <div
                        className="flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-black uppercase tracking-[0.15em]"
                        style={{ backgroundColor: `${event.color}10`, borderColor: `${event.color}25`, color: event.color }}
                    >
                        <Calendar className="w-3.5 h-3.5" />
                        {event.date}
                    </div>
                </div>

                {/* Title */}
                <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500 group-hover:text-[#2DD4BF]/70 transition-colors duration-300">
                        {event.tagline}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none text-white group-hover:text-[#2DD4BF] transition-colors duration-400">
                        {event.title}
                    </h2>
                </div>

                {/* Description */}
                <p className="text-neutral-400 font-medium leading-relaxed text-base md:text-lg group-hover:text-neutral-200 transition-colors duration-300">
                    {event.description}
                </p>

                {/* ── Electropoly sub-event box ── */}
                <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-600">
                        Sub-Events
                    </span>
                    <ElectropolyBox />
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5 group-hover:border-[#2DD4BF]/15 transition-colors duration-300">
                    <div className="flex items-center gap-2 text-neutral-500 group-hover:text-neutral-300 transition-colors text-xs font-bold uppercase tracking-widest">
                        <MapPin className="w-4 h-4" style={{ color: `${event.color}80` }} />
                        <span className="font-mono">{event.location}</span>
                    </div>
                    <div className="flex gap-2">
                        {event.tags.slice(0, 2).map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 text-white/40 group-hover:bg-[#2DD4BF]/10 group-hover:text-[#2DD4BF]/70 transition-all duration-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-neutral-600 group-hover:text-white transition-colors duration-300">
                    <div className="w-6 h-[1px] bg-[#2DD4BF] transition-all duration-500 group-hover:w-10" />
                    <span>Explore Event</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#2DD4BF] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
            </div>
        </motion.div>
    );
}

/* ─── Techathon featured card ─── */
function TechathonCard({ event }: { event: typeof events[0] }) {
    const Icon = event.icon;
    return (
        <motion.div
            whileHover={{ y: -6, scale: 1.015 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="
                group relative p-10 md:p-12
                bg-[#0d0d0d]/90 backdrop-blur-xl
                rounded-[3rem] overflow-hidden cursor-pointer
                border border-[#a78bfa]/20
                hover:border-[#a78bfa]/50
                shadow-[0_24px_80px_-20px_rgba(0,0,0,0.9)]
                hover:shadow-[0_32px_80px_-12px_rgba(167,139,250,0.25)]
                transition-all duration-500
            "
        >
            {/* Pulsing outer ring */}
            <div className="absolute -inset-px rounded-[3rem] border border-[#a78bfa]/0 group-hover:border-[#a78bfa]/30 transition-all duration-700 pointer-events-none" />

            {/* Large diffuse glow blob */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#a78bfa]/25 via-transparent to-blue-600/15 opacity-0 group-hover:opacity-100 transition-opacity duration-600 blur-3xl pointer-events-none rounded-[3rem]" />

            {/* Inner surface tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#a78bfa]/6 via-transparent to-blue-500/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem] pointer-events-none" />

            {/* Top shimmer line */}
            <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#a78bfa]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Hackathon badge */}
            <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#a78bfa]/10 border border-[#a78bfa]/25 backdrop-blur-sm">
                <Zap className="w-3 h-3 text-[#a78bfa] fill-[#a78bfa]" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#a78bfa]">Hackathon</span>
            </div>

            <div className="relative z-10 flex flex-col gap-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                    <div
                        className="flex items-center justify-center w-14 h-14 rounded-2xl border transition-all duration-400 group-hover:scale-110 group-hover:rotate-3"
                        style={{ backgroundColor: `${event.color}15`, borderColor: `${event.color}30` }}
                    >
                        <Icon className="w-6 h-6" style={{ color: event.color }} />
                    </div>
                    <div
                        className="flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-black uppercase tracking-[0.15em]"
                        style={{ backgroundColor: `${event.color}10`, borderColor: `${event.color}25`, color: event.color }}
                    >
                        <Calendar className="w-3.5 h-3.5" />
                        {event.date}
                    </div>
                </div>

                {/* Title */}
                <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500 group-hover:text-[#a78bfa]/70 transition-colors duration-300">
                        {event.tagline}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none text-white group-hover:text-[#a78bfa] transition-colors duration-400">
                        {event.title}
                    </h2>
                </div>

                {/* Description */}
                <p className="text-neutral-400 font-medium leading-relaxed text-base md:text-lg group-hover:text-neutral-200 transition-colors duration-300">
                    {event.description}
                </p>

                {/* ── Intern Insights sub-event box ── */}
                <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-600">
                        Sub-Events
                    </span>
                    <InternInsightsBox />
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5 group-hover:border-[#a78bfa]/15 transition-colors duration-300">
                    <div className="flex items-center gap-2 text-neutral-500 group-hover:text-neutral-300 transition-colors text-xs font-bold uppercase tracking-widest">
                        <MapPin className="w-4 h-4" style={{ color: `${event.color}80` }} />
                        <span className="font-mono">{event.location}</span>
                    </div>
                    <div className="flex gap-2">
                        {event.tags.slice(0, 2).map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 text-white/40 group-hover:bg-[#a78bfa]/10 group-hover:text-[#a78bfa]/70 transition-all duration-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-neutral-600 group-hover:text-white transition-colors duration-300">
                    <div className="w-6 h-[1px] bg-[#a78bfa] transition-all duration-500 group-hover:w-10" />
                    <span>Explore Event</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#a78bfa] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
            </div>
        </motion.div>
    );
}

/* ─── Generic event card ─── */
function EventCard({ event, delay }: { event: typeof events[0]; delay: number }) {
    const Icon = event.icon;
    return (
        <SectionReveal
            delay={delay}
            className="group relative p-10 md:p-12 bg-[#111]/80 backdrop-blur-md rounded-[3rem] border border-white/5 hover:border-white/15 transition-all duration-500 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] overflow-hidden cursor-pointer"
        >
            <div className={`absolute -inset-1 bg-gradient-to-br ${event.gradientFrom} via-transparent ${event.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none`} />
            <div className={`absolute inset-0 bg-gradient-to-br ${event.gradientFrom} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem] pointer-events-none`} />
            <div
                className="absolute top-0 left-12 right-12 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `linear-gradient(90deg, transparent, ${event.color}60, transparent)` }}
            />

            <div className="relative z-10 flex flex-col h-full gap-6">
                <div className="flex items-start justify-between gap-4">
                    <div
                        className="flex items-center justify-center w-14 h-14 rounded-2xl border transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${event.color}15`, borderColor: `${event.color}30` }}
                    >
                        <Icon className="w-6 h-6" style={{ color: event.color }} />
                    </div>
                    <div
                        className="flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-black uppercase tracking-[0.15em]"
                        style={{ backgroundColor: `${event.color}10`, borderColor: `${event.color}25`, color: event.color }}
                    >
                        <Calendar className="w-3.5 h-3.5" />
                        {event.date}
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500 group-hover:text-neutral-400 transition-colors">
                        {event.tagline}
                    </span>
                    <h2
                        className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none text-white transition-colors duration-300"
                        style={{ '--event-color': event.color } as React.CSSProperties}
                    >
                        <span className="group-hover:text-[--event-color] transition-colors duration-300">{event.title}</span>
                    </h2>
                </div>

                <p className="text-neutral-400 font-medium leading-relaxed text-base md:text-lg group-hover:text-neutral-300 transition-colors duration-300 flex-grow">
                    {event.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors duration-300">
                    <div className="flex items-center gap-2 text-neutral-500 group-hover:text-neutral-400 transition-colors text-xs font-bold uppercase tracking-widest">
                        <MapPin className="w-4 h-4" style={{ color: `${event.color}70` }} />
                        <span className="font-mono">{event.location}</span>
                    </div>
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

                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-neutral-600 group-hover:text-white transition-colors duration-300 mt-1">
                    <div className="w-6 h-[1px] transition-all duration-500 group-hover:w-10" style={{ backgroundColor: event.color }} />
                    <span>Explore Event</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" style={{ color: event.color }} />
                </div>
            </div>
        </SectionReveal>
    );
}

/* ─── Page ─── */
export default function EventsPage() {
    const [bitotsav, ...rest] = events;

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

            {/* Events Grid */}
            <section className="relative px-6 md:px-12 lg:px-20 pb-40 max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {/* Bitotsav — featured: special hover + Electropoly sub-box */}
                    <SectionReveal delay={0}>
                        <BitotsavCard event={bitotsav} />
                    </SectionReveal>

                    {/* Techathon — featured: special hover + Intern Insights sub-box */}
                    <SectionReveal delay={0.1}>
                        <TechathonCard event={rest[0]} />
                    </SectionReveal>

                    {/* Remaining cards */}
                    {rest.slice(1).map((event, index) => (
                        <EventCard key={event.id} event={event} delay={(index + 2) * 0.1} />
                    ))}
                </div>
            </section>
        </main>
    );
}
