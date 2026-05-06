import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building, Users, Award, Clock } from 'lucide-react'
import { statistics } from '../data/content'
import CertificationBadge from './CertificationBadge'

export default function Statistics() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [counters, setCounters] = useState(statistics.items.map(() => 0))

    const iconMap = {
        'Completed Projects': Building,
        'Years Experience': Clock,
        'Client Satisfaction': Award,
        'Expert Professionals': Users,
    }

    useEffect(() => {
        if (isInView) {
            statistics.items.forEach((item, index) => {
                const target = item.value
                const duration = 2000 // 2 seconds
                const steps = 60
                const increment = target / steps
                let current = 0

                const timer = setInterval(() => {
                    current += increment
                    if (current >= target) {
                        current = target
                        clearInterval(timer)
                    }

                    setCounters(prev => {
                        const newCounters = [...prev]
                        newCounters[index] = Math.floor(current)
                        return newCounters
                    })
                }, duration / steps)
            })
        }
    }, [isInView])

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
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
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
                {/* Header */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mb-16"
                >
                    <motion.div variants={itemVariants}>
                        <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-full text-sm font-semibold mb-4">
                            {statistics.badge}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            {statistics.heading}
                        </h2>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Numbers that reflect our commitment to excellence and the trust our clients place in us.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Statistics Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {statistics.items.map((stat, index) => {
                        const IconComponent = iconMap[stat.label] || Building

                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.3 }
                                }}
                                className="group relative"
                            >
                                {/* Card */}
                                <div className="glass-dark rounded-3xl p-8 text-center relative overflow-hidden">
                                    {/* Background Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="relative mb-6">
                                            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                                <IconComponent className="w-8 h-8 text-white" />
                                            </div>
                                            {/* Icon Glow */}
                                            <div className="absolute inset-0 w-16 h-16 gradient-primary rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 mx-auto"></div>
                                        </div>

                                        {/* Counter */}
                                        <div className="mb-4">
                                            <motion.span
                                                className="text-4xl md:text-5xl font-bold text-white block"
                                                initial={{ scale: 0.5 }}
                                                animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                                                transition={{
                                                    duration: 0.8,
                                                    delay: index * 0.2,
                                                    type: "spring",
                                                    stiffness: 100
                                                }}
                                            >
                                                {counters[index]}{stat.suffix}
                                            </motion.span>
                                        </div>

                                        {/* Label */}
                                        <p className="text-gray-300 font-medium group-hover:text-white transition-colors">
                                            {stat.label}
                                        </p>
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className="absolute top-4 right-4 w-8 h-8 border border-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* External Glow */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                            </motion.div>
                        )
                    })}
                </motion.div>

                {/* Bottom CTA - Certification Image Only */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mt-16"
                >
                    <CertificationBadge
                        size="lg"
                        animate={true}
                        theme="dark"
                    />
                </motion.div>
            </div>
        </section>
    )
}