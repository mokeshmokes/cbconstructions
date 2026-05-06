import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Eye, Quote, CheckCircle, Award, Users } from 'lucide-react'
import { aboutSection } from '../data/content'

export default function About() {
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
        <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container-custom relative z-10" ref={ref}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Left Content */}
                    <div className="space-y-8">
                        <motion.div variants={itemVariants}>
                            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                                {aboutSection.badge}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                {aboutSection.heading}
                            </h2>
                        </motion.div>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-gray-600 leading-relaxed"
                        >
                            {aboutSection.description}
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-gray-600 leading-relaxed"
                        >
                            {aboutSection.description2}
                        </motion.p>

                        {/* Experience Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center space-x-4 bg-white rounded-2xl p-6 shadow-lg hover-lift"
                        >
                            <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center">
                                <Award className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">{aboutSection.experience}</h3>
                                <p className="text-gray-600">Building Excellence</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content - Mission & Vision Cards */}
                    <div className="space-y-8">
                        {/* Mission Card */}
                        <motion.div
                            variants={itemVariants}
                            className="card-premium rounded-3xl p-8 hover-lift group"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{aboutSection.mission.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{aboutSection.mission.text}</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Vision Card */}
                        <motion.div
                            variants={itemVariants}
                            className="card-premium rounded-3xl p-8 hover-lift group"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <Eye className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{aboutSection.vision.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{aboutSection.vision.text}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Quote Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mt-20"
                >
                    <motion.div
                        variants={itemVariants}
                        className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center overflow-hidden"
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20H20z'/%3E%3C/g%3E%3C/svg%3E")`,
                            }}></div>
                        </div>

                        <div className="relative z-10">
                            <Quote className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                            <blockquote className="text-2xl md:text-3xl font-bold text-white mb-6 leading-relaxed">
                                "{aboutSection.quote}"
                            </blockquote>
                            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                                {aboutSection.quoteDesc}
                            </p>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute top-8 right-8 w-20 h-20 border border-white/10 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-8 left-8 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
                    </motion.div>
                </motion.div>

                {/* Key Features */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {[
                        { icon: CheckCircle, title: "Quality Assured", desc: "ISO 9001:2015 Certified" },
                        { icon: Users, title: "Expert Team", desc: "Skilled Professionals" },
                        { icon: Award, title: "50+ Projects", desc: "Successfully Completed" },
                        { icon: Target, title: "On-Time Delivery", desc: "Always On Schedule" }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="text-center group"
                        >
                            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <feature.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}