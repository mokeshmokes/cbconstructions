import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { navbarLinks } from '../data/content'
import Logo from './Logo'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    // Optimized scroll handler with throttling
    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY
        setIsScrolled(scrollY > 50)

        // Throttled active section detection
        const sections = navbarLinks.map(link => link.href.substring(1))
        const currentSection = sections.find(section => {
            const element = document.getElementById(section)
            if (element) {
                const rect = element.getBoundingClientRect()
                return rect.top <= 100 && rect.bottom >= 100
            }
            return false
        })

        if (currentSection) {
            setActiveSection(currentSection)
        }
    }, [])

    useEffect(() => {
        // Throttled scroll listener for performance
        let ticking = false
        const throttledScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll()
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', throttledScroll, { passive: true })
        return () => window.removeEventListener('scroll', throttledScroll)
    }, [handleScroll])

    const scrollToSection = useCallback((href) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsOpen(false)
    }, [])

    // Memoized navigation items to prevent re-renders
    const navigationItems = useMemo(() =>
        navbarLinks.map((link, index) => (
            <motion.button
                key={link.label}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
                onClick={() => scrollToSection(link.href)}
                className={`relative px-4 py-2 font-medium transition-colors duration-200 animated-underline ${activeSection === link.href.substring(1)
                    ? isScrolled
                        ? 'text-blue-600'
                        : 'text-white'
                    : isScrolled
                        ? 'text-gray-700 hover:text-blue-600'
                        : 'text-gray-200 hover:text-white'
                    }`}
            >
                {link.label}
            </motion.button>
        )), [activeSection, isScrolled, scrollToSection])

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isScrolled
                ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/20'
                : 'bg-transparent'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Optimized Premium Branding Layout */}
                    <motion.div
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="flex items-center space-x-4 cursor-pointer"
                        onClick={() => scrollToSection('#home')}
                    >
                        {/* Optimized Logo */}
                        <div className="relative">
                            <Logo
                                size="lg"
                                animate={true}
                                className="drop-shadow-sm"
                            />
                            {/* Reduced glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-sm opacity-0 hover:opacity-100 transition-opacity duration-200 -z-10"></div>
                        </div>

                        {/* Company Name - Single Line Layout */}
                        <div className="flex flex-col justify-center">
                            <h1 className={`text-xl md:text-2xl lg:text-3xl font-bold transition-colors duration-200 leading-tight whitespace-nowrap ${isScrolled
                                ? 'text-gray-900'
                                : 'text-white drop-shadow-sm'
                                }`}>
                                CB Building Approval
                            </h1>
                            <p className={`text-xs md:text-sm font-medium transition-colors duration-200 whitespace-nowrap ${isScrolled
                                ? 'text-blue-600'
                                : 'text-blue-200'
                                }`}>
                                Your Approval Simplified
                            </p>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navigationItems}

                        {/* Optimized CTA Button */}
                        <motion.a
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.4 }}
                            href="tel:+917448922333"
                            className="btn-premium gradient-primary text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:shadow-lg transform hover:scale-105 transition-all duration-200 group"
                        >
                            <Phone size={18} />
                            <span>Call Now</span>
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.3 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                            }`}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>
            </div>

            {/* Optimized Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/20"
                    >
                        <div className="container-custom py-6">
                            <div className="flex flex-col space-y-4">
                                {navbarLinks.map((link, index) => (
                                    <motion.button
                                        key={link.label}
                                        initial={{ opacity: 0, x: -15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05, duration: 0.3 }}
                                        onClick={() => scrollToSection(link.href)}
                                        className={`text-left px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${activeSection === link.href.substring(1)
                                            ? 'text-blue-600 bg-blue-50'
                                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        {link.label}
                                    </motion.button>
                                ))}

                                <motion.a
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.3 }}
                                    href="tel:+917448922333"
                                    className="btn-premium gradient-primary text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 mt-4"
                                >
                                    <Phone size={18} />
                                    <span>Call Now</span>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}