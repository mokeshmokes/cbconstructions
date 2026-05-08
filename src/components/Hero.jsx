import { useEffect, useState, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Play, Users, Building, Award } from 'lucide-react'
import { heroSection } from '../data/content'

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })

    // Optimized mouse move handler with throttling
    const handleMouseMove = useCallback((e) => {
        // Throttle mouse updates for performance
        setMousePosition({
            x: (e.clientX / window.innerWidth) * 100,
            y: (e.clientY / window.innerHeight) * 100,
        })
    }, [])

    useEffect(() => {
        // Throttled mouse move listener
        let ticking = false
        const throttledMouseMove = (e) => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleMouseMove(e)
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('mousemove', throttledMouseMove, { passive: true })
        return () => window.removeEventListener('mousemove', throttledMouseMove)
    }, [handleMouseMove])

    const scrollToNext = useCallback(() => {
        const nextSection = document.querySelector('#about')
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
        }
    }, [])

    // Memoized floating shapes to prevent re-renders
    const floatingShapes = useMemo(() => (
        <div className="absolute inset-0 overflow-hidden">
            <motion.div
                animate={{
                    y: [-15, 15, -15],
                    rotate: [0, 90, 180],
                }}
                transition={{
                    duration: 15, // Reduced frequency
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-20 left-4 md:left-20 w-20 h-20 md:w-24 md:h-24 border border-white/5 rounded-full" // Reduced opacity
            />
            <motion.div
                animate={{
                    y: [15, -15, 15],
                    rotate: [180, 90, 0],
                }}
                transition={{
                    duration: 20, // Reduced frequency
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-20 right-4 md:right-20 w-16 h-16 md:w-20 md:h-20 border border-white/5 rounded-lg" // Reduced opacity
            />
            <motion.div
                animate={{
                    x: [-5, 5, -5],
                    y: [5, -5, 5],
                }}
                transition={{
                    duration: 12, // Reduced frequency
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/2 right-1/4 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-lg" // Reduced blur and opacity
            />
        </div>
    ), [])

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Optimized Dynamic Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Simplified base gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>

                {/* Optimized animated overlay - reduced opacity and simplified */}
                <motion.div
                    className="absolute inset-0 opacity-20" // Reduced opacity
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(102, 126, 234, 0.2) 0%, transparent 40%)`, // Reduced intensity
                    }}
                />

                {/* Simplified pattern overlay */}
                <div className="absolute inset-0 opacity-5"> {/* Reduced opacity */}
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20h4v4h-4z'/%3E%3C/g%3E%3C/svg%3E")`, // Simplified pattern
                    }}></div>
                </div>

                {/* Optimized floating geometric shapes */}
                {floatingShapes}
            </div>

            {/* Content */}
            <div className="relative z-10 container-custom text-center text-white">
                <div className="max-w-5xl mx-auto">
                    {/* Optimized Main Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} // Reduced y offset
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }} // Reduced duration and delay
                        className="mb-6"
                    >
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            <span className="block gradient-text bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                                {heroSection.tagline}
                            </span>
                        </h1>
                    </motion.div>

                    {/* Optimized Subtitle */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }} // Reduced y offset
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }} // Reduced duration and delay
                        className="text-lg md:text-xl lg:text-2xl font-semibold mb-8 text-gray-200 leading-relaxed"
                    >
                        {heroSection.heading}
                    </motion.h2>

                    {/* Optimized Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }} // Reduced y offset
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }} // Reduced duration and delay
                        className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        {heroSection.subheading}
                    </motion.p>

                    {/* Optimized CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }} // Reduced y offset
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }} // Reduced duration and delay
                        className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
                    >
                        <a
                            href={heroSection.ctaHref}
                            onClick={(e) => {
                                e.preventDefault()
                                document.querySelector(heroSection.ctaHref)?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="btn-premium gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-3 hover:shadow-xl transform hover:scale-105 transition-all duration-200 group" // Reduced duration
                        >
                            <span>{heroSection.ctaText}</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" /> {/* Reduced duration */}
                        </a>

                        <a
                            href={heroSection.secondaryCtaHref}
                            onClick={(e) => {
                                e.preventDefault()
                                document.querySelector(heroSection.secondaryCtaHref)?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="glass text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-3 hover:bg-white/20 transition-all duration-200 group" // Reduced duration
                        >
                            <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" /> {/* Reduced duration */}
                            <span>{heroSection.secondaryCtaText}</span>
                        </a>
                    </motion.div>

                    {/* Optimized Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }} // Reduced y offset
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }} // Reduced duration and delay
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

            {/* Optimized Scroll Indicator */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }} // Reduced delay
                onClick={scrollToNext}
                className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors duration-200 group z-20" // Reduced duration
            >
                <div className="flex flex-col items-center space-y-2">
                    <span className="text-xs md:text-sm font-medium">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }} // Reduced range
                        transition={{ duration: 1.5, repeat: Infinity }} // Reduced duration
                    >
                        <ChevronDown className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-200" /> {/* Reduced duration */}
                    </motion.div>
                </div>
            </motion.button>
        </section>
    )
}