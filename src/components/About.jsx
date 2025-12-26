import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, Sun, Waves } from 'lucide-react';
import campfireImg from '../assets/campfire.png';
import img from '../assets/img1.jpeg'

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-20 bg-light overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10">
                            <img
                                src={img}
                                alt="Evening campfire"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full -z-0 opacity-20" />
                        <div className="absolute -top-6 -left-6 w-40 h-40 bg-accent rounded-full -z-0 opacity-10" />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-primary font-bold text-lg mb-2 uppercase tracking-wider">{t('about.heading')}</h2>
                        <h3 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-6">
                            {t('about.title')}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            {t('about.p1')}
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            {t('about.p2')}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <Sun className="w-8 h-8 text-accent mb-3" />
                                <span className="font-medium text-dark">{t('about.sunny_days')}</span>
                            </div>
                            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <Waves className="w-8 h-8 text-primary mb-3" />
                                <span className="font-medium text-dark">{t('about.private_beach')}</span>
                            </div>
                            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <MapPin className="w-8 h-8 text-secondary mb-3" />
                                <span className="font-medium text-dark">{t('about.location')}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
