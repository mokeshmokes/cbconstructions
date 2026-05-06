import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { workProcess } from '../data/content'

export default function WorkProcess() {
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

    const stepVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    return (
        <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/10 to-purple-100/10 rounded-full blur-3xl"></div>
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
                        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                            {workProcess.badge}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            {workProcess.heading}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Our systematic approach ensures every project is completed efficiently, on time, and to the highest quality standards.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Process Steps */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-4xl mx-auto"
                >
                    {workProcess.steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={stepVariants}
                            className="relative mb-12 last:mb-0"
                        >
                            <div className="flex items-start space-x-8">
                                {/* Step Number */}
                                <div className="flex-shrink-0 relative">
                                    <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                        {step.number}
                                    </div>

                                    {/* Connecting Line */}
                                    {index < workProcess.steps.length - 1 && (
                                        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                                    )}

                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 w-16 h-16 gradient-primary rounded-2xl blur-xl opacity-30"></div>
                                </div>

                                {/* Step Content */}
                                <div className="flex-1">
                                    <div className="card-premium rounded-3xl p-8 hover-lift group">
                                        {/* Background Gradient on Hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                    {step.title}
                                                </h3>
                                                <div className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-50 transition-colors">
                                                    <CheckCircle className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                                                </div>
                                            </div>

                                            <p className="text-gray-600 leading-relaxed text-lg">
                                                {step.description}
                                            </p>
                                        </div>

                                        {/* Decorative Elements */}
                                        <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mt-20"
                >
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            }}></div>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Ready to Start Your Journey?
                            </h3>
                            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                Let's begin with step one - planning and designing your dream project. Our team is ready to guide you through every phase.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                                <a
                                    href="#contact"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                                    }}
                                    className="btn-premium gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center space-x-3 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                                >
                                    <span>Start Planning</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>

                                <a
                                    href="tel:+917448922333"
                                    className="glass text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center space-x-3 hover:bg-white/20 transition-all duration-300"
                                >
                                    <span>Call for Consultation</span>
                                </a>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute top-8 right-8 w-20 h-20 border border-white/10 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-8 left-8 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}