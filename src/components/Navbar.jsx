import React, { useState, useEffect } from 'react';
import { Menu, X, Tent } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Нүүр', href: '#home' },
        { name: 'Бидний тухай', href: '#about' },
        { name: 'Үйлчилгээ', href: '#amenities' },
        { name: 'Зургийн цомог', href: '#gallery' },
        { name: 'Холбоо барих', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 text-2xl font-heading font-bold text-primary">
                        <Tent className="w-8 h-8" />
                        <span>ХөхБух жуулчны бааз</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-accent ${isScrolled ? 'text-gray-700' : 'text-white drop-shadow-md'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="bg-accent hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors shadow-md">
                            Захиалга өгөх
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-700 font-medium hover:text-primary"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="bg-primary text-white w-full py-2 rounded-md font-medium">
                                Захиалга өгөх
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
