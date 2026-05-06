import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layout, FileText, Building, Home, ArrowRight } from 'lucide-react'
import { services } from '../data/content'

const iconMap = {
    layout: Layout,
    'file-text': FileText,
    building: Building,
    home: Home,
}

export default function Services() {
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

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    return (
        <section id="services" className="section-padding bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
                <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
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
                            {services.badge}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            {services.heading}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {services.description}
                        </p>
                    </motion.div>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {services.items.map((service, index) => {
                        const IconComponent = iconMap[service.icon] || Building

                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{
                                    y: -10,
                                    transition: { duration: 0.3 }
                                }}
                                className="group relative"
                            >
                                {/* Card */}
                                <div className="card-premium rounded-3xl p-8 h-full relative overflow-hidden">
                                    {/* Gradient Background on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="relative mb-6">
                                            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <IconComponent className="w-8 h-8 text-white" />
                                            </div>
                                            {/* Glow Effect */}
                                            <div className="absolute inset-0 w-16 h-16 gradient-primary rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 leading-relaxed mb-6">
                                            {service.description}
                                        </p>

                                        {/* Learn More Link */}
                                        <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                                            <span className="mr-2">Learn More</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className="absolute top-4 right-4 w-8 h-8 border border-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Hover Shadow */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                            </motion.div>
                        )
                    })}
                </motion.div>

                {/* CTA Section */}
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
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='10' cy='10' r='4'/%3E%3Ccircle cx='50' cy='10' r='4'/%3E%3Ccircle cx='10' cy='50' r='4'/%3E%3Ccircle cx='50' cy='50' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            }}></div>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Ready to Start Your Project?
                            </h3>
                            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                Let's discuss your construction needs and bring your vision to life with our expert team.
                            </p>
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault()
                                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                                className="btn-premium gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center space-x-3 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                            >
                                <span>Get Free Consultation</span>
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