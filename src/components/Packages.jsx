import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Star, ArrowRight } from 'lucide-react'
import { packages } from '../data/content'

export default function Packages() {
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
        <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
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
                            {packages.badge}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            {packages.heading}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Choose the perfect construction package that fits your needs and budget. Each package is designed to deliver exceptional value and quality.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Packages Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                >
                    {packages.items.map((pkg, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            className={`group relative ${pkg.highlight ? 'md:-mt-8' : ''}`}
                        >
                            {/* Popular Badge */}
                            {pkg.highlight && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="gradient-primary text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                                        <Star className="w-4 h-4 fill-current" />
                                        <span>Most Popular</span>
                                    </div>
                                </div>
                            )}

                            {/* Package Card */}
                            <div className={`card-premium rounded-3xl p-8 h-full relative overflow-hidden ${pkg.highlight ? 'ring-2 ring-blue-500 bg-gradient-to-br from-blue-50/50 to-purple-50/50' : ''
                                }`}>
                                {/* Background Pattern for highlighted package */}
                                {pkg.highlight && (
                                    <div className="absolute inset-0 opacity-5">
                                        <div className="absolute inset-0" style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                        }}></div>
                                    </div>
                                )}

                                <div className="relative z-10">
                                    {/* Package Name */}
                                    <div className="text-center mb-8">
                                        <h3 className={`text-2xl font-bold mb-4 ${pkg.highlight ? 'text-blue-600' : 'text-gray-900'
                                            }`}>
                                            {pkg.name}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {pkg.description}
                                        </p>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-4 mb-8">
                                        {[
                                            'Professional Planning & Design',
                                            'Quality Materials & Construction',
                                            'Project Management',
                                            'Timely Completion',
                                            'Post-Construction Support',
                                            pkg.highlight ? 'Premium Finishes' : 'Standard Finishes',
                                            pkg.highlight ? 'Advanced Features' : 'Essential Features',
                                            pkg.name === 'Luxury Package' ? 'Luxury Amenities' : 'Quality Assurance'
                                        ].map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center space-x-3">
                                                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${pkg.highlight ? 'gradient-primary' : 'bg-green-100'
                                                    }`}>
                                                    <Check className={`w-3 h-3 ${pkg.highlight ? 'text-white' : 'text-green-600'
                                                        }`} />
                                                </div>
                                                <span className="text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <button className={`w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-3 transition-all duration-300 group-hover:shadow-lg ${pkg.highlight
                                            ? 'btn-premium gradient-primary text-white hover:shadow-2xl transform hover:scale-105'
                                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                        }`}>
                                        <span>Get Quote</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute top-6 right-6 w-8 h-8 border border-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-6 left-6 w-6 h-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* External Glow for highlighted package */}
                            {pkg.highlight && (
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20H20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            }}></div>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Need a Custom Package?
                            </h3>
                            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                Every project is unique. Let's discuss your specific requirements and create a tailored solution for you.
                            </p>
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault()
                                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                                className="btn-premium gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center space-x-3 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                            >
                                <span>Discuss Custom Package</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
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