import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contact" className="bg-dark text-white pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="col-span-1 lg:col-span-2">
                        <h2 className="text-3xl font-heading font-bold mb-6">CoastalCamp</h2>
                        <p className="text-slate-400 mb-8 max-w-md leading-relaxed">
                            Experience the perfect getaway where the sand is your seat and the ocean is your view.
                            Book your stay with us and reconnect with nature in style.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors text-white">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors text-white">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors text-white">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-white border-b border-slate-700 pb-2 inline-block">Contact Us</h4>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-4 text-slate-300">
                                <MapPin className="w-6 h-6 text-primary shrink-0" />
                                <span>123 Coastal Highway,<br />Sunny Beach, CA 90210</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-300">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-300">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>hello@coastalcamp.inc</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-white border-b border-slate-700 pb-2 inline-block">Links</h4>
                        <ul className="flex flex-col gap-3 text-slate-300">
                            <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#amenities" className="hover:text-primary transition-colors">Amenities</a></li>
                            <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Book Now</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} CoastalCamp. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
