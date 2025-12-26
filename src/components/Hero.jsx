import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import heroImg from '../assets/hero.png';
import main from '../assets/img.jpeg'

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={main}
                    alt="Beautiful Beach Camp"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 drop-shadow-lg"
                >
                    {t('hero.title')} <span className="text-secondary">{t('hero.subtitle')}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="text-lg md:text-2xl text-white/90 mb-8 font-light max-w-2xl mx-auto drop-shadow-md"
                >
                    {t('hero.description')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <a
                        href="#contact"
                        className="inline-block bg-accent hover:bg-orange-600 text-white text-lg font-semibold px-8 py-4 rounded-full transition-transform hover:scale-105 shadow-xl hover:shadow-2xl"
                    >
                        {t('hero.cta')}
                    </a>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
            >
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
