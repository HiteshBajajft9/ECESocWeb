'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    y?: number;
    onViewportEnter?: () => void;
}

export const SectionReveal = ({ children, className = '', delay = 0, y = 30, onViewportEnter }: SectionRevealProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            onViewportEnter={onViewportEnter}
            transition={{
                duration: 1.5,
                delay,
                ease: [0.16, 1, 0.3, 1] // Out-expo style
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
