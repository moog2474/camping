import React from 'react';
import { motion } from 'framer-motion';
import { Tent, Flame, Coffee, Wifi, Car, Waves, Utensils, Music } from 'lucide-react';

const amenities = [
    { icon: Tent, title: 'Luxury Tents', desc: 'Spacious glamping tents with comfortable beds.' },
    { icon: Flame, title: 'Bonfire Pits', desc: 'Community and private fire pits for evening gatherings.' },
    { icon: Utensils, title: 'BBQ Stations', desc: 'Fully equipped grilling stations for your catch of the day.' },
    { icon: Waves, title: 'Surf Rental', desc: 'Boards and wetsuits available for all skill levels.' },
    { icon: Wifi, title: 'Free Wi-Fi', desc: 'Stay connected even in the wild (at the main lodge).' },
    { icon: Coffee, title: 'Morning Coffee', desc: 'Fresh local brew served every sunrise.' },
    { icon: Car, title: 'Free Parking', desc: 'Secure parking spots for all our guests.' },
    { icon: Music, title: 'Live Music', desc: 'Acoustic sessions every weekend by the beach.' },
];

const Amenities = () => {
    return (
        <section id="amenities" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold text-lg mb-2 uppercase tracking-wider">Our Amenities</h2>
                    <h3 className="text-4xl md:text-5xl font-heading font-bold text-dark">
                        Comfort Meets Nature
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
