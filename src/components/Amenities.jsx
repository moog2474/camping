import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Tent, Flame, Coffee, Wifi, Car, Waves, Utensils, Music } from 'lucide-react';

const Amenities = () => {
    const { t } = useTranslation();

    const amenities = [
        { icon: Tent, title: t('amenities.tents'), desc: t('amenities.tents_desc') },
        { icon: Flame, title: t('amenities.bonfire'), desc: t('amenities.bonfire_desc') },
        { icon: Utensils, title: t('amenities.bbq'), desc: t('amenities.bbq_desc') },
        { icon: Waves, title: t('amenities.surf'), desc: t('amenities.surf_desc') },
        { icon: Wifi, title: t('amenities.wifi'), desc: t('amenities.wifi_desc') },
        { icon: Coffee, title: t('amenities.coffee'), desc: t('amenities.coffee_desc') },
        { icon: Car, title: t('amenities.parking'), desc: t('amenities.parking_desc') },
        { icon: Music, title: t('amenities.music'), desc: t('amenities.music_desc') },
    ];

    return (
        <section id="amenities" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold text-lg mb-2 uppercase tracking-wider">{t('amenities.heading')}</h2>
                    <h3 className="text-4xl md:text-5xl font-heading font-bold text-dark">
                        {t('amenities.title')}
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {amenities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-100 group"
                        >
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:bg-primary transition-colors duration-300">
                                <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h4 className="text-xl font-bold text-dark mb-2">{item.title}</h4>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Amenities;
