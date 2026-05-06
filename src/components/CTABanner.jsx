import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, ArrowRight, Star } from 'lucide-react'
import { ctaBanner } from '../data/content'
import CertificationBadge from './CertificationBadge'

export default function CTABanner() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    return (
        <section className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                {/* Floating Shapes */}
                <div className="absolute inset-0">
                    <motion.div
                        animate={{
                            y: [-20, 20, -20],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full"
                    />
                    <motion.div
                        animate={{
                            y: [20, -20, 20],
                            x: [-10, 10, -10],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute bottom-20 right-20 w-24 h-24 bg-blue-500/20 rounded-lg blur-xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-1/2 left-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl"
                    />
                </div>
            </div>

            <div className="container-custom relative z-10" ref={ref}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center text-white"
                >
                    {/* Badge */}
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-8"
                    >
                        <Phone className="w-5 h-5 text-blue-400" />
                        <span className="text-sm font-medium">{ctaBanner.tagline}</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                    >
                        <span className="block gradient-text bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                            {ctaBanner.heading}
                        </span>
                    </motion.h2>

                    {/* Subheading */}
                    <motion.p
                        variants={itemVariants}
                        className="text-2xl md:text-3xl font-semibold mb-12 text-gray-200"
                    >
                        {ctaBanner.subheading}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
                    >
                        <a
                            href={ctaBanner.ctaHref}
                            className="btn-premium gradient-primary text-white px-10 py-5 rounded-full font-bold text-xl flex items-center space-x-4 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                        >
                            <Phone className="w-6 h-6" />
                            <span>{ctaBanner.ctaText}</span>
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault()
                                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="glass text-white px-10 py-5 rounded-full font-bold text-xl flex items-center space-x-4 hover:bg-white/20 transition-all duration-300"
                        >
                            <span>Get Free Quote</span>
                        </a>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                    >
                        <div className="glass-dark rounded-2xl p-6 text-center flex items-center justify-center">
                            <CertificationBadge
                                size="sm"
                                animate={false}
                                theme="dark"
                            />
                        </div>

                        <div className="glass-dark rounded-2xl p-6 text-center">
                            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-xl">50+</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Projects Done</h3>
                            <p className="text-gray-300">Successfully Completed</p>
                        </div>

                        <div className="glass-dark rounded-2xl p-6 text-center">
                            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-xl">7+</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Years Experience</h3>
                            <p className="text-gray-300">Building Excellence</p>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 inline-flex items-center space-x-4 glass-dark rounded-2xl px-8 py-6"
                    >
                        <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                            <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                            <p className="text-white font-semibold text-lg">Call us now for immediate assistance</p>
                            <p className="text-gray-300">Available Mon-Sat, 9:00 AM - 6:00 PM</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}