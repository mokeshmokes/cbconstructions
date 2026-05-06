import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import { contactDetails } from '../data/content'

export default function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        approvalType: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000))

        setIsSubmitting(false)
        setIsSubmitted(true)

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false)
            setFormData({
                name: '',
                email: '',
                phone: '',
                approvalType: '',
                message: ''
            })
        }, 3000)
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

    const contactInfo = [
        {
            icon: MapPin,
            title: 'Visit Our Office',
            content: contactDetails.address,
            action: 'Get Directions'
        },
        {
            icon: Phone,
            title: 'Call Us',
            content: contactDetails.phone,
            action: 'Call Now',
            href: `tel:${contactDetails.phone}`
        },
        {
            icon: Mail,
            title: 'Email Us',
            content: contactDetails.email,
            action: 'Send Email',
            href: `mailto:${contactDetails.email}`
        },
        {
            icon: Clock,
            title: 'Working Hours',
            content: 'Mon - Sat: 9:00 AM - 6:00 PM\nSunday: Closed',
            action: 'Schedule Meeting'
        }
    ]

    return (
        <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
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
                            Get In Touch
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Let's Get Your Approval Started
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Ready to start your building approval process? Get in touch with our expert team for a free consultation and quote.
                        </p>
                    </motion.div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="space-y-8"
                    >
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
                        </motion.div>

                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ x: 10 }}
                                className="group"
                            >
                                <div className="card-premium rounded-2xl p-6 hover-lift">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                            <info.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                                {info.title}
                                            </h4>
                                            <p className="text-gray-600 mb-3 whitespace-pre-line">
                                                {info.content}
                                            </p>
                                            {info.href ? (
                                                <a
                                                    href={info.href}
                                                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                                                >
                                                    <span>{info.action}</span>
                                                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                                </a>
                                            ) : (
                                                <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                                                    <span>{info.action}</span>
                                                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Map Placeholder */}
                        <motion.div
                            variants={itemVariants}
                            className="card-premium rounded-2xl p-6 hover-lift"
                        >
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Find Us</h4>
                            <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-2" />
                                    <p className="text-gray-600 font-medium">Interactive Map</p>
                                    <p className="text-sm text-gray-500">Shoolagiri, Tamil Nadu</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <motion.div variants={itemVariants}>
                            <div className="card-premium rounded-3xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>

                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle className="w-8 h-8 text-green-600" />
                                        </div>
                                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h4>
                                        <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all peer"
                                                    placeholder=" "
                                                />
                                                <label className="absolute left-4 top-4 text-gray-500 transition-all peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75">
                                                    Full Name *
                                                </label>
                                            </div>

                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all peer"
                                                    placeholder=" "
                                                />
                                                <label className="absolute left-4 top-4 text-gray-500 transition-all peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75">
                                                    Email Address *
                                                </label>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="relative">
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all peer"
                                                    placeholder=" "
                                                />
                                                <label className="absolute left-4 top-4 text-gray-500 transition-all peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75">
                                                    Phone Number
                                                </label>
                                            </div>

                                            <div className="relative">
                                                <select
                                                    name="approvalType"
                                                    value={formData.approvalType}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                >
                                                    <option value="">Select Approval Type *</option>
                                                    <option value="dtcp">DTCP Approval</option>
                                                    <option value="cmda">CMDA Approval</option>
                                                    <option value="panchayat">Panchayat Approval</option>
                                                    <option value="building-permit">Building Permit</option>
                                                    <option value="layout">Layout Approval</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="relative">
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                rows={6}
                                                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all peer resize-none"
                                                placeholder=" "
                                            />
                                            <label className="absolute left-4 top-4 text-gray-500 transition-all peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75">
                                                Approval Requirements *
                                            </label>
                                        </div>

                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full btn-premium gradient-primary text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-3 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    <span>Sending...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    <span>Send Message</span>
                                                </>
                                            )}
                                        </motion.button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}