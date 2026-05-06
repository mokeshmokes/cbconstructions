import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Play, Users, Building, Award } from 'lucide-react'
import { heroSection } from '../data/content'

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    const scrollToNext = () => {
        const nextSection = document.querySelector('#about')
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Dynamic Background */}
            <div className="absolute inset-0">
                {/* Base gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>

                {/* Animated overlay */}
                <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(102, 126, 234, 0.3) 0%, transparent 50%)`,
                    }}
                />

                {/* Construction pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                {/* Floating geometric shapes */}
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
                            rotate: [360, 180, 0],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-lg"
                    />
                    <motion.div
                        animate={{
                            x: [-10, 10, -10],
                            y: [10, -10, 10],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 container-custom text-center text-white">
                <div className="max-w-5xl mx-auto">
                    {/* Main Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="mb-6"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                            <span className="block gradient-text bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                                {heroSection.tagline}
                            </span>
                        </h1>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-2xl md:text-4xl font-semibold mb-6 text-gray-200"
                    >
                        {heroSection.heading}
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        {heroSection.subheading}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
                    >
                        <a
                            href={heroSection.ctaHref}
                            onClick={(e) => {
                                e.preventDefault()
                                document.querySelector(heroSection.ctaHref)?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="btn-premium gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-3 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                        >
                            <span>{heroSection.ctaText}</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href={heroSection.secondaryCtaHref}
                            onClick={(e) => {
                                e.preventDefault()
                                document.querySelector(heroSection.secondaryCtaHref)?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="glass text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-3 hover:bg-white/20 transition-all duration-300 group"
                        >
                            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span>{heroSection.secondaryCtaText}</span>
                        </a>
                    </motion.div>

                    {/* Stats - Added bottom padding to prevent overlap */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto pb-16 md:pb-20"
                    >
                        <div className="text-center">
                            <div className="flex items-center justify-center mb-2">
                                <Building className="w-8 h-8 text-blue-400 mr-2" />
                                <span className="text-3xl font-bold">500+</span>
                            </div>
                            <p className="text-gray-300">Approvals Completed</p>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center mb-2">
                                <Users className="w-8 h-8 text-green-400 mr-2" />
                                <span className="text-3xl font-bold">10+</span>
                            </div>
                            <p className="text-gray-300">Years Experience</p>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center mb-2">
                                <Award className="w-8 h-8 text-yellow-400 mr-2" />
                                <span className="text-3xl font-bold">100%</span>
                            </div>
                            <p className="text-gray-300">Legal Compliance</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator - Positioned below stats with proper spacing */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                onClick={scrollToNext}
                className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors group z-20"
                style={{ marginTop: '2rem' }}
            >
                <div className="flex flex-col items-center space-y-2">
                    <span className="text-xs md:text-sm font-medium">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <ChevronDown className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                    </motion.div>
                </div>
            </motion.button>
        </section>
    )
}