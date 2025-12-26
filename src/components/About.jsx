import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sun, Waves } from 'lucide-react';
import campfireImg from '../assets/campfire.png';

const About = () => {
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
                                src={campfireImg}
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
                        <h2 className="text-primary font-bold text-lg mb-2 uppercase tracking-wider">About Us</h2>
                        <h3 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-6">
                            Nature's Best Kept Secret
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            Nestled along the pristine coastline, CoastalCamp offers a unique blend of rugged adventure
                            and serene relaxation. Wake up to the sound of waves, spend your days surfing or sunbathing,
                            and end your nights with stories around a crackling bonfire under a blanket of stars.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            Whether you're a seasoned camper or looking for a comfortable glamping experience,
                            our site provides the perfect backdrop for making unforgettable memories.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <Sun className="w-8 h-8 text-accent mb-3" />
                                <span className="font-medium text-dark">300+ Sunny Days</span>
                            </div>
                            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <Waves className="w-8 h-8 text-primary mb-3" />
                                <span className="font-medium text-dark">Private Beach</span>
                            </div>
                            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <MapPin className="w-8 h-8 text-secondary mb-3" />
                                <span className="font-medium text-dark">Prime Location</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
