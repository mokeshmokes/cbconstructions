import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import companyLogo from '../assets/logo/company-logo.png'

const Preloader = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true)
    const [currentStep, setCurrentStep] = useState(0)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
            setTimeout(() => onComplete(), 400) // Reduced fade out time
        }, 2500) // Reduced total duration from 4500ms to 2500ms

        // Optimized progress animation - less frequent updates
        const progressTimer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressTimer)
                    return 100
                }
                return prev + 4 // Faster progress increment
            })
        }, 100) // Less frequent updates

        // Optimized step progression
        const stepTimers = [
            setTimeout(() => setCurrentStep(1), 200),   // Logo appears faster
            setTimeout(() => setCurrentStep(2), 800),   // Text appears faster
            setTimeout(() => setCurrentStep(3), 1200),  // Subtitle appears faster
        ]

        return () => {
            clearTimeout(timer)
            clearInterval(progressTimer)
            stepTimers.forEach(clearTimeout)
        }
    }, [onComplete])

    // Optimized particles - reduced count and simplified animation
    const particles = useMemo(() => Array.from({ length: 8 }, (_, i) => ( // Reduced from 20 to 8
        <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full" // Reduced opacity
            initial={{
                x: `${Math.random() * 80 + 10}%`,
                y: `${Math.random() * 80 + 10}%`,
                opacity: 0
            }}
            animate={{
                opacity: [0, 0.6, 0], // Simplified animation
            }}
            transition={{
                duration: 3, // Reduced duration
                repeat: Infinity,
                delay: Math.random() * 1.5, // Reduced delay range
                ease: "easeInOut"
            }}
        />
    )), [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        // Removed scale and blur for performance
                    }}
                    transition={{
                        duration: 0.4, // Reduced duration
                        ease: "easeOut"
                    }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden w-full h-full"
                    style={{
                        background: 'linear-gradient(135deg, #0f172a 0%, #020617 100%)' // Simplified gradient
                    }}
                >
                    {/* Simplified Background */}
                    <div className="absolute inset-0">
                        {/* Single optimized gradient orb */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"
                            style={{
                                background: 'radial-gradient(circle, #3b82f6 0%, transparent 60%)'
                            }}
                            animate={{
                                scale: [1, 1.1, 1], // Reduced scale range
                                opacity: [0.05, 0.15, 0.05], // Reduced opacity range
                            }}
                            transition={{
                                duration: 3, // Reduced duration
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Optimized Floating Particles */}
                        {particles}
                    </div>

                    {/* Main Content */}
                    <div className="relative z-10 text-center">
                        {/* Optimized Logo Animation */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }} // Simplified initial state
                            animate={currentStep >= 1 ? {
                                scale: 1,
                                opacity: 1,
                            } : {}}
                            transition={{
                                duration: 0.6, // Reduced duration
                                ease: "easeOut"
                            }}
                            className="mb-6 relative"
                        >
                            {/* Simplified Logo Container */}
                            <div className="relative w-24 h-24 mx-auto"> {/* Reduced size */}
                                <img
                                    src={companyLogo}
                                    alt="CB Building Approval"
                                    className="w-full h-full object-contain"
                                    loading="eager"
                                />
                            </div>
                        </motion.div>

                        {/* Optimized Company Name Animation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} // Reduced y offset
                            animate={currentStep >= 2 ? {
                                opacity: 1,
                                y: 0,
                            } : {}}
                            transition={{
                                duration: 0.5, // Reduced duration
                                ease: "easeOut"
                            }}
                            className="mb-3"
                        >
                            <h1 className="text-2xl md:text-3xl font-bold text-white"> {/* Reduced size */}
                                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    CB Building Approval
                                </span>
                            </h1>
                        </motion.div>

                        {/* Optimized Subtitle Animation */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={currentStep >= 3 ? { opacity: 1 } : {}}
                            transition={{
                                duration: 0.4,
                                ease: "easeOut"
                            }}
                            className="mb-8"
                        >
                            <p className="text-sm text-gray-400">
                                Your Approval Simplified
                            </p>
                        </motion.div>

                        {/* Simplified Loading Animation */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={currentStep >= 1 ? { opacity: 1 } : {}}
                            transition={{ duration: 0.3 }}
                            className="w-48 mx-auto" // Reduced width
                        >
                            {/* Simplified Progress Bar */}
                            <div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden"> {/* Reduced height */}
                                <motion.div
                                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                />
                            </div>

                            {/* Simplified Loading Dots */}
                            <div className="flex justify-center space-x-1 mt-4"> {/* Reduced spacing */}
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="w-1.5 h-1.5 bg-blue-400/60 rounded-full" // Reduced size and opacity
                                        animate={{
                                            scale: [1, 1.2, 1], // Reduced scale range
                                            opacity: [0.4, 0.8, 0.4], // Reduced opacity range
                                        }}
                                        transition={{
                                            duration: 0.8, // Reduced duration
                                            repeat: Infinity,
                                            delay: i * 0.15, // Reduced delay
                                            ease: "easeInOut"
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Preloader