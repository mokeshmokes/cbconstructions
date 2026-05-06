import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Users, Package, MessageCircle, Eye, Search } from 'lucide-react'
import { whyChooseUs } from '../data/content'

const iconMap = {
    award: Award,
    users: Users,
    package: Package,
    'message-circle': MessageCircle,
    eye: Eye,
    search: Search,
}

export default function WhyChooseUs() {
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
        hidden: { opacity: 0, scale: 0.9 },
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
        <section className="section-padding bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-100/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-100/30 to-transparent"></div>
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/10 to-purple-200/10 rounded-full blur-3xl"></div>
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
                            {whyChooseUs.badge}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            {whyChooseUs.heading}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {whyChooseUs.description}
                        </p>
                    </motion.div>
                </motion.div>

                {/* Points Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {whyChooseUs.points.map((point, index) => {
                        const IconComponent = iconMap[point.icon] || Award

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
                                <div className="card-premium rounded-3xl p-8 text-center h-full relative overflow-hidden">
                                    {/* Gradient Background on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="relative mb-6">
                                            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                                <IconComponent className="w-8 h-8 text-white" />
                                            </div>
                                            {/* Glow Effect */}
                                            <div className="absolute inset-0 w-16 h-16 gradient-primary rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 mx-auto"></div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                            {point.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 leading-relaxed">
                                            {point.title === 'Quality, Integrity, Excellence' &&
                                                'We maintain the highest standards in every project, ensuring exceptional results that exceed expectations.'
                                            }
                                            {point.title === 'Experienced Team' &&
                                                'Our skilled professionals bring years of expertise and dedication to every construction project.'
                                            }
                                            {point.title === 'High-Quality Materials' &&
                                                'We source only the finest materials to ensure durability, safety, and aesthetic appeal in all our builds.'
                                            }
                                            {point.title === 'Clear Communication' &&
                                                'We keep you informed at every stage, ensuring transparency and peace of mind throughout the process.'
                                            }
                                            {point.title === 'Transparency' &&
                                                'No hidden costs or surprises. We provide clear, detailed estimates and regular project updates.'
                                            }
                                            {point.title === 'Attention to Detail' &&
                                                'Every aspect of your project receives meticulous attention, from planning to final finishing touches.'
                                            }
                                        </p>
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

                {/* Bottom Section */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mt-20 text-center"
                >
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            }}></div>
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center justify-center space-x-4 mb-6">
                                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center">
                                    <Award className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-2xl font-bold text-white">ISO 9001:2015 Certified</h3>
                                    <p className="text-gray-300">Quality Management System</p>
                                </div>
                            </div>

                            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                                Our certification ensures that every project meets international quality standards, giving you confidence in our commitment to excellence.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                                <a
                                    href="#projects"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                                    }}
                                    className="btn-premium gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center space-x-3 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                                >
                                    <span>View Our Work</span>
                                </a>

                                <a
                                    href="#contact"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                                    }}
                                    className="glass text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center space-x-3 hover:bg-white/20 transition-all duration-300"
                                >
                                    <span>Get Started</span>
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