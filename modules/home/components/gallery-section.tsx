'use client';

import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const galleryImages = [
    '/blogs/AESA.jpeg',
    '/blogs/CE20.jpeg',
    '/blogs/Chipsets.jpeg',
    '/blogs/DHRUV.jpeg',
    '/blogs/EVM.jpeg',
    '/blogs/Holograph.jpeg',
    '/blogs/IOMT.jpeg',
    '/blogs/IoT .jpeg',
    '/blogs/Networks.jpeg',
    '/blogs/Neuromorphic .jpeg',
    '/blogs/Optimus.jpeg',
    '/blogs/Paper.jpeg',
    '/blogs/Satellite .jpeg',
    '/blogs/Summit .jpeg',
    '/blogs/Thermal .jpeg',
    '/home/batch.PNG',
    '/blogs/AESA.jpeg',
    '/blogs/CE20.jpeg',
    '/blogs/Chipsets.jpeg',
    '/blogs/DHRUV.jpeg',
];

export const GallerySection = () => {
    const controls1 = useAnimationControls();
    const controls2 = useAnimationControls();
    const [isPaused1, setIsPaused1] = useState(false);
    const [isPaused2, setIsPaused2] = useState(false);
    const [isInView, setIsInView] = useState(false);

    const row1 = galleryImages.slice(0, 10);
    const row2 = galleryImages.slice(10, 20);

    const SPEED = 25;

    useEffect(() => {
        if (isInView && !isPaused1) {
            controls1.start({
                x: '-50%',
                transition: { duration: SPEED, ease: 'linear', repeat: Infinity }
            });
        } else {
            controls1.stop();
        }
    }, [isPaused1, isInView, controls1]);

    useEffect(() => {
        if (isInView && !isPaused2) {
            controls2.start({
                x: '0%',
                transition: { duration: SPEED, ease: 'linear', repeat: Infinity }
            });
        } else {
            controls2.stop();
        }
    }, [isPaused2, isInView, controls2]);

    return (
        <section className="py-32 overflow-hidden bg-[#080808]">
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                onViewportEnter={() => setIsInView(true)}
                className="max-w-[1800px] mx-auto px-12 md:px-32 lg:px-72 mb-20 text-center md:text-left"
            >
                <div className="flex flex-col gap-6">
                    <span className="text-[#2DD4BF] font-black tracking-[0.3em] uppercase text-xs">
                        Events & Innovation
                    </span>
                    <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
                        Technological <br />
                        <span className="text-[#2DD4BF]">Gallery</span>
                    </h2>
                </div>
            </motion.div>
            
            <div className="flex flex-col gap-12">
                {/* Row 1 */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                    className="relative flex whitespace-nowrap mask-gradient overflow-hidden px-12 md:px-32 lg:px-72"
                    onMouseEnter={() => setIsPaused1(true)}
                    onMouseLeave={() => setIsPaused1(false)}
                >
                    <motion.div
                        animate={controls1}
                        initial={{ x: '0%' }}
                        className="flex gap-8 pr-8"
                    >
                        {[...row1, ...row1].map((src, index) => (
                            <GalleryItem key={`r1-${index}`} src={src} index={index} />
                        ))}
                    </motion.div>
                </motion.div>

                {/* Row 2 */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative flex whitespace-nowrap mask-gradient overflow-hidden px-12 md:px-32 lg:px-72"
                    onMouseEnter={() => setIsPaused2(true)}
                    onMouseLeave={() => setIsPaused2(false)}
                >
                    <motion.div
                        animate={controls2}
                        initial={{ x: '-50%' }}
                        className="flex gap-8 pr-8"
                    >
                        {[...row2, ...row2].map((src, index) => (
                            <GalleryItem key={`r2-${index}`} src={src} index={index} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            <style jsx>{`
                .mask-gradient {
                    mask-image: linear-gradient(
                        to right,
                        transparent,
                        black 2%,
                        black 98%,
                        transparent
                    );
                }
            `}</style>
        </section>
    );
};

const GalleryItem = ({ src, index }: { src: string; index: number }) => (
    <div
        className="relative flex-shrink-0 w-[300px] md:w-[450px] aspect-[16/10] group overflow-hidden rounded-[2.5rem] border border-white/5 transition-all duration-700 hover:border-[#2DD4BF]/40 hover:shadow-[0_0_40px_-10px_rgba(45,212,191,0.2)]"
    >
        <Image
            src={src}
            alt={`Gallery image ${index + 1}`}
            fill
            className="object-cover transition-all duration-1000 group-hover:scale-110"
            sizes="(max-width: 1024px) 50vw, 30vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-[#2DD4BF]/20 transition-all duration-700" />
    </div>
);
