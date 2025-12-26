import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import img1 from '../assets/im4.jpeg'
import nuur from '../assets/nuur.webp'
import img3 from '../assets/img2.jpeg'

const Gallery = () => {
    const { t } = useTranslation();

    return (
        <section id="gallery" className="py-20 bg-light">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold text-lg mb-2 uppercase tracking-wider">{t('gallery.heading')}</h2>
                    <h3 className="text-4xl md:text-5xl font-heading font-bold text-dark">
                        {t('gallery.title')}
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[300px]">
                    {/* Main large image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-2 md:row-span-2 rounded-xl overflow-hidden shadow-lg group relative"
                    >
                        <img src={nuur} alt="Beach day" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-medium text-lg tracking-wider">{t('gallery.sunny')}</span>
                        </div>
                    </motion.div>

                    {/* Side stacked images */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-xl overflow-hidden shadow-lg group relative"
                    >
                        <img src={img1} alt="Night vibe" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-medium text-lg tracking-wider">{t('gallery.starry')}</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="rounded-xl overflow-hidden shadow-lg group relative"
                    >
                        {/* Reuse hero img focused differently strictly for placeholder visual */}
                        <img src={img3} alt="Ocean view" className="w-full h-full object-cover object-left transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-medium text-lg tracking-wider">{t('gallery.ocean')}</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
