import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, ArrowRight, Filter } from 'lucide-react'
import { projects } from '../data/content'

export default function Projects() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [activeFilter, setActiveFilter] = useState('All')

    const categories = ['All', ...new Set(projects.items.map(project => project.category))]
    const filteredProjects = activeFilter === 'All'
        ? projects.items
        : projects.items.filter(project => project.category === activeFilter)

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
        <section id="projects" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-100/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-100/30 to-transparent"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/10 to-purple-200/10 rounded-full blur-3xl"></div>
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
                            {projects.badge}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            {projects.heading}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                            Discover our portfolio of exceptional construction projects that showcase our commitment to quality and innovation.
                        </p>
                    </motion.div>

                    {/* Filter Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeFilter === category
                                        ? 'gradient-primary text-white shadow-lg'
                                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            layout
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            className="group relative"
                        >
                            {/* Project Card */}
                            <div className="card-premium rounded-3xl overflow-hidden h-full relative">
                                {/* Image Container */}
                                <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                                    {/* Placeholder for project image */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                <ExternalLink className="w-8 h-8 text-white" />
                                            </div>
                                            <p className="text-gray-600 font-medium">{project.category}</p>
                                        </div>
                                    </div>

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* View Project Button */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="btn-premium bg-white text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center space-x-2 transform scale-90 group-hover:scale-100 transition-transform">
                                            <span>View Project</span>
                                            <ExternalLink className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                                            {project.category}
                                        </span>
                                        <div className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-50 transition-colors">
                                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* External Shadow */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Tagline */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center"
                >
                    <div className="inline-flex items-center space-x-4 bg-white rounded-2xl px-8 py-6 shadow-lg">
                        <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                            <Filter className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-xl font-semibold text-gray-900">
                            {projects.tagline}
                        </p>
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            }}></div>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Have a Project in Mind?
                            </h3>
                            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                Let's collaborate to create something extraordinary. Our team is ready to bring your vision to life.
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
                                    <span>Start Your Project</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>

                                <a
                                    href="tel:+917448922333"
                                    className="glass text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center space-x-3 hover:bg-white/20 transition-all duration-300"
                                >
                                    <span>Call Now</span>
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