import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, ArrowUp, Facebook, Instagram, Linkedin, MessageCircle, Youtube } from 'lucide-react'
import { footer } from '../data/content'
import Logo from './Logo'
import CertificationBadge from './CertificationBadge'

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const socialIcons = {
        facebook: Facebook,
        instagram: Instagram,
        linkedin: Linkedin,
        whatsapp: MessageCircle,
        youtube: Youtube,
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
            {/* Background Pattern - Enhanced */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            {/* Floating Elements - Enhanced */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-40 h-40 border border-white/5 rounded-full"></div>
                <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue-500/10 rounded-lg blur-2xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container-custom relative z-10">
                {/* Main Footer Content - Enhanced spacing */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="py-20 grid lg:grid-cols-4 md:grid-cols-2 gap-12"
                >
                    {/* Company Info */}
                    <motion.div variants={itemVariants} className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <Logo size="md" animate={true} />
                            <div>
                                <h3 className="text-2xl font-bold">{footer.companyName}</h3>
                                {/* <p className="text-blue-400 text-sm">{footer.tagline}</p> */}
                            </div>
                        </div>

                        <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                            {footer.description}
                        </p>

                        {/* ISO Certification - Image Only */}
                        <div className="mb-8">
                            <CertificationBadge
                                size="lg"
                                animate={true}
                                theme="dark"
                            />
                        </div>

                        {/* Social Links - Enhanced with proper icons and animations */}
                        <div className="flex space-x-3">
                            {footer.social.map((social, index) => {
                                const IconComponent = socialIcons[social.platform]
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative w-11 h-11 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group overflow-hidden"
                                    >
                                        {/* Gradient glow on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>

                                        <IconComponent className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300 relative z-10" />

                                        {/* Outer glow effect */}
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                                    </motion.a>
                                )
                            })}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {footer.quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                                        }}
                                        className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2 group"
                                    >
                                        <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all"></span>
                                        <span>{link.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-semibold mb-6">Our Services</h4>
                        <ul className="space-y-3">
                            {footer.serviceLinks.map((service, index) => (
                                <li key={index}>
                                    <a
                                        href={service.href}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            document.querySelector(service.href)?.scrollIntoView({ behavior: 'smooth' })
                                        }}
                                        className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2 group"
                                    >
                                        <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all"></span>
                                        <span>{service.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Contact Info Section - Enhanced */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="border-t border-white/10 py-16"
                >
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Address - Enhanced */}
                        <motion.div variants={itemVariants} className="flex items-start space-x-4 group">
                            <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h5 className="font-semibold mb-2 text-lg">Visit Our Office</h5>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {footer.contact.address}
                                </p>
                            </div>
                        </motion.div>

                        {/* Phone - Enhanced */}
                        <motion.div variants={itemVariants} className="flex items-start space-x-4 group">
                            <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <Phone className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h5 className="font-semibold mb-2 text-lg">Call Us</h5>
                                <a
                                    href={`tel:${footer.contact.phone}`}
                                    className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                                >
                                    {footer.contact.phone}
                                </a>
                                <p className="text-xs text-gray-400 mt-1">Mon-Sat, 9AM-6PM</p>
                            </div>
                        </motion.div>

                        {/* Email - Enhanced */}
                        <motion.div variants={itemVariants} className="flex items-start space-x-4 group">
                            <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <Mail className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h5 className="font-semibold mb-2 text-lg">Email Us</h5>
                                <a
                                    href={`mailto:${footer.contact.email}`}
                                    className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                                >
                                    {footer.contact.email}
                                </a>
                                <p className="text-xs text-gray-400 mt-1">Quick Response</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
                >
                    <p className="text-gray-400 text-sm">
                        {footer.copyright}
                    </p>

                    <div className="flex items-center space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll to Top Button - Enhanced */}
            <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-8 right-8 w-14 h-14 gradient-primary rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 z-50 group"
            >
                <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
            </motion.button>
        </footer>
    )
}