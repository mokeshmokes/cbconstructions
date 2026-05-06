import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { navbarLinks } from '../data/content'
import Logo from './Logo'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)

            // Update active section based on scroll position
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
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (href) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsOpen(false)
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/20'
                : 'bg-transparent'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo - Clean Professional Branding */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center space-x-3 cursor-pointer"
                        onClick={() => scrollToSection('#home')}
                    >
                        {/* Clean logo without heavy effects */}
                        <Logo
                            size="md"
                            animate={true}
                        />

                        {/* Company name with clean professional styling */}
                        <div className="flex flex-col">
                            <h1 className={`text-lg md:text-xl font-bold transition-colors duration-300 leading-tight ${isScrolled
                                    ? 'text-gray-900'
                                    : 'text-white'
                                }`}>
                                CB Building Approval
                            </h1>
                            <p className={`text-xs font-medium transition-colors duration-300 ${isScrolled
                                    ? 'text-blue-600'
                                    : 'text-blue-100'
                                }`}>
                                {/* Your Approval Simplified */}
                            </p>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navbarLinks.map((link, index) => (
                            <motion.button
                                key={link.label}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                onClick={() => scrollToSection(link.href)}
                                className={`relative px-4 py-2 font-medium transition-all duration-300 animated-underline ${activeSection === link.href.substring(1)
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
                        ))}

                        {/* CTA Button */}
                        <motion.a
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 }}
                            href="tel:+917448922333"
                            className="btn-premium gradient-primary text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                        >
                            <Phone size={18} />
                            <span>Call Now</span>
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                            }`}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/20"
                    >
                        <div className="container-custom py-6">
                            <div className="flex flex-col space-y-4">
                                {navbarLinks.map((link, index) => (
                                    <motion.button
                                        key={link.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => scrollToSection(link.href)}
                                        className={`text-left px-4 py-3 rounded-lg font-medium transition-colors ${activeSection === link.href.substring(1)
                                            ? 'text-blue-600 bg-blue-50'
                                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        {link.label}
                                    </motion.button>
                                ))}

                                <motion.a
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
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
