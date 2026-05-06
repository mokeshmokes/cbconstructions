import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, User } from 'lucide-react'
import { testimonials } from '../data/content'

export default function Testimonials() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    // Auto-slide functionality
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.items.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.items.length)
        setIsAutoPlaying(false)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.items.length) % testimonials.items.length)
        setIsAutoPlaying(false)
    }

    const goToTestimonial = (index) => {
        setCurrentIndex(index)
        setIsAutoPlaying(false)
    }

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

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
            />
        ))
    }

    return (
        <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/10 to-purple-100/10 rounded-full blur-3xl"></div>
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
                            {testimonials.badge}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            {testimonials.heading}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with CB Construction.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Testimonials Carousel */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="relative max-w-4xl mx-auto"
                >
                    {/* Main Testimonial Card */}
                    <motion.div
                        variants={itemVariants}
                        className="relative"
                    >
                        <div className="card-premium rounded-3xl p-12 text-center relative overflow-hidden">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-5">
                                <div className="absolute inset-0" style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                }}></div>
                            </div>

                            <div className="relative z-10">
                                {/* Quote Icon */}
                                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-8">
                                    <Quote className="w-8 h-8 text-white" />
                                </div>

                                {/* Stars */}
                                <div className="flex justify-center space-x-1 mb-6">
                                    {renderStars(testimonials.items[currentIndex].rating)}
                                </div>

                                {/* Testimonial Text */}
                                <motion.blockquote
                                    key={currentIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium"
                                >
                                    "{testimonials.items[currentIndex].feedback}"
                                </motion.blockquote>

                                {/* Client Info */}
                                <motion.div
                                    key={`client-${currentIndex}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="flex items-center justify-center space-x-4"
                                >
                                    <div className="w-12 h-12 gradient-secondary rounded-full flex items-center justify-center">
                                        <User className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-bold text-gray-900 text-lg">
                                            {testimonials.items[currentIndex].name}
                                        </h4>
                                        <p className="text-gray-600">
                                            {testimonials.items[currentIndex].role}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-8 right-8 w-20 h-20 border border-gray-200 rounded-full opacity-50"></div>
                            <div className="absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
                        </div>
                    </motion.div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-center space-x-4 mt-8">
                        <button
                            onClick={prevTestimonial}
                            className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex space-x-2">
                            {testimonials.items.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? 'gradient-primary w-8'
                                            : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextTestimonial}
                            className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Auto-play indicator */}
                    <div className="text-center mt-4">
                        <button
                            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            {isAutoPlaying ? 'Pause auto-play' : 'Resume auto-play'}
                        </button>
                    </div>
                </motion.div>

                {/* All Testimonials Grid (Hidden on mobile, shown on larger screens) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="hidden lg:grid lg:grid-cols-2 gap-8 mt-20"
                >
                    {testimonials.items.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className={`card-premium rounded-2xl p-6 cursor-pointer transition-all duration-300 ${index === currentIndex ? 'ring-2 ring-blue-500 bg-blue-50/50' : ''
                                }`}
                            onClick={() => goToTestimonial(index)}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex space-x-1">
                                    {renderStars(testimonial.rating)}
                                </div>
                                <Quote className="w-6 h-6 text-gray-400" />
                            </div>

                            <p className="text-gray-600 mb-4 line-clamp-3">
                                "{testimonial.feedback}"
                            </p>

                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                                    <User className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}