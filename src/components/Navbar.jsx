import React, { useState, useEffect } from 'react';
import { Menu, X, Tent, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const Navbar = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);

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
        { name: t('nav.home'), href: '#home' },
        { name: t('nav.about'), href: '#about' },
        { name: t('nav.amenities'), href: '#amenities' },
        { name: t('nav.gallery'), href: '#gallery' },
        { name: t('nav.contact'), href: '#contact' },
    ];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLangMenuOpen(false);
    };

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
                        <span>{t('contact.brand')}</span>
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

                        {/* Language Switcher */}
                        <div className="relative">
                            <button onClick={() => setLangMenuOpen(!langMenuOpen)} className={`flex items-center gap-1 font-medium transition-colors hover:text-accent ${isScrolled ? 'text-gray-700' : 'text-white drop-shadow-md'}`}>
                                <Globe className="w-5 h-5" />
                                <span className="uppercase">{i18n?.language?.split('-')[0] || 'EN'}</span>
                            </button>
                            {langMenuOpen && (
                                <div className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-lg py-1 w-24 border border-gray-100 overflow-hidden">
                                    <button onClick={() => changeLanguage('mn')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-slate-50 hover:text-primary">
                                        Монгол
                                    </button>
                                    <button onClick={() => changeLanguage('en')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-slate-50 hover:text-primary">
                                        English
                                    </button>
                                    <button onClick={() => changeLanguage('ru')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-slate-50 hover:text-primary">
                                        Русский
                                    </button>
                                </div>
                            )}
                        </div>

                        <button className="bg-accent hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors shadow-md">
                            {t('nav.book')}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-4 md:hidden">
                        <button onClick={() => setLangMenuOpen(!langMenuOpen)} className={`text-gray-700 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                            <Globe className="w-6 h-6" />
                        </button>
                        <button
                            className="md:hidden text-gray-700"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />}
                        </button>
                    </div>
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
                            {/* Mobile Language Options */}
                            <div className="flex gap-4 border-t pt-4">
                                <button onClick={() => changeLanguage('mn')} className={`text-sm ${i18n.language === 'mn' ? 'font-bold text-primary' : 'text-gray-600'}`}>MN</button>
                                <button onClick={() => changeLanguage('en')} className={`text-sm ${i18n.language === 'en' ? 'font-bold text-primary' : 'text-gray-600'}`}>EN</button>
                                <button onClick={() => changeLanguage('ru')} className={`text-sm ${i18n.language === 'ru' ? 'font-bold text-primary' : 'text-gray-600'}`}>RU</button>
                            </div>

                            <button className="bg-primary text-white w-full py-2 rounded-md font-medium">
                                {t('nav.book')}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* Mobile Language Dropdown if toggled NOT in menu */}
            {langMenuOpen && !isOpen && (
                <div className="absolute top-16 right-4 bg-white rounded-md shadow-lg py-1 w-32 border border-gray-100 md:hidden">
                    <button onClick={() => changeLanguage('mn')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-slate-50">Монгол</button>
                    <button onClick={() => changeLanguage('en')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-slate-50">English</button>
                    <button onClick={() => changeLanguage('ru')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-slate-50">Русский</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
