'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
}

export default function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }} // Começa invisível e 40px abaixo
            whileInView={{ opacity: 1, y: 0 }} // Quando entra na tela: fica visível e sobe para a posição original
            viewport={{ once: true, margin: '-50px' }} // Anima apenas uma vez quando chega perto do viewport
            transition={{ duration: 0.6, delay, ease: 'easeOut' }} // Duração suave de 0.6s
        >
            {children}
        </motion.div>
    );
}