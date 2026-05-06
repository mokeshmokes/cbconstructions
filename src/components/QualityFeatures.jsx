import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layers, Star, Home, Clock, Users, Briefcase, Award, Smartphone } from 'lucide-react'
import { qualityFeatures } from '../data/content'

const iconMap = {
    layers: Layers,
    star: Star,
    home: Home,
    clock: Clock,
    users: Users,
    briefcase: Briefcase,
    award: Award,
    smartphone: Smartphone,
}

export default function QualityFeatures() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    return (
        <section className="py-16 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
                <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container-custom relative z-10" ref={ref}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6"
                >
                    {qualityFeatures.map((feature, index) => {
                        const IconComponent = iconMap[feature.icon] || Star

                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{
                                    y: -10,
                                    transition: { duration: 0.3 }
                                }}
                                className="group"
                            >
                                <div className="card-premium rounded-2xl p-6 text-center h-full hover-lift">
                                    {/* Icon */}
                                    <div className="relative mb-4">
                                        <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                        {/* Glow Effect */}
                                        <div className="absolute inset-0 w-12 h-12 gradient-primary rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 mx-auto"></div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-sm font-semibold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                                        {feature.title}
                                    </h3>

                                    {/* Decorative Element */}
                                    <div className="mt-3 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}