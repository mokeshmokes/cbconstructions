import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import companyLogo from '../assets/logo/company-logo.png'

const Preloader = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true)
    const [currentStep, setCurrentStep] = useState(0)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
            setTimeout(() => onComplete(), 800) // Allow fade out animation
        }, 4500) // Total preloader duration

        // Progress animation
        const progressTimer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressTimer)
                    return 100
                }
                return prev + 2
            })
        }, 80)

        // Step progression
        const stepTimers = [
            setTimeout(() => setCurrentStep(1), 500),   // Logo appears
            setTimeout(() => setCurrentStep(2), 1500),  // Text appears
            setTimeout(() => setCurrentStep(3), 2500),  // Subtitle appears
            setTimeout(() => setCurrentStep(4), 3500),  // Loading complete
        ]

        return () => {
            clearTimeout(timer)
            clearInterval(progressTimer)
            stepTimers.forEach(clearTimeout)
        }
    }, [onComplete])

    // Floating particles animation - Fixed overflow issues
    const particles = Array.from({ length: 20 }, (_, i) => (
        <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            initial={{
                x: `${Math.random() * 90 + 5}%`, // Keep within 5-95% of container
                y: `${Math.random() * 90 + 5}%`, // Keep within 5-95% of container
                opacity: 0
            }}
            animate={{
                x: `${Math.random() * 90 + 5}%`, // Keep within 5-95% of container
                y: `${Math.random() * 90 + 5}%`, // Keep within 5-95% of container
                opacity: [0, 1, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
            }}
        />
    ))

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.1,
                        filter: "blur(10px)"
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut"
                    }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden w-full h-full"
                    style={{
                        background: 'radial-gradient(ellipse at center, #0f172a 0%, #020617 70%, #000000 100%)'
                    }}
                >
                    {/* Animated Background */}
                    <div className="absolute inset-0">
                        {/* Gradient Orbs */}
                        <motion.div
                            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
                            style={{
                                background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)'
                            }}
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.1, 0.3, 0.1],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        <motion.div
                            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15"
                            style={{
                                background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)'
                            }}
                            animate={{
                                scale: [1.2, 1, 1.2],
                                opacity: [0.1, 0.25, 0.1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        />

                        {/* Floating Particles */}
                        {particles}

                        {/* Cinematic Vignette */}
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.4) 100%)'
                            }}
                        />
                    </div>

                    {/* Main Content */}
                    <div className="relative z-10 text-center">
                        {/* Logo Animation */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0, rotateY: 180 }}
                            animate={currentStep >= 1 ? {
                                scale: 1,
                                opacity: 1,
                                rotateY: 0,
                            } : {}}
                            transition={{
                                duration: 1.2,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 100
                            }}
                            className="mb-8 relative"
                        >
                            {/* Logo Glow Effect */}
                            <motion.div
                                className="absolute inset-0 rounded-full blur-2xl"
                                style={{
                                    background: 'radial-gradient(circle, #3b82f6 0%, #8b5cf6 50%, transparent 70%)'
                                }}
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />

                            {/* Logo Container */}
                            <motion.div
                                className="relative w-32 h-32 mx-auto"
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <img
                                    src={companyLogo}
                                    alt="CB Building Approval"
                                    className="w-full h-full object-contain filter drop-shadow-2xl"
                                    style={{
                                        filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.5))'
                                    }}
                                />
                            </motion.div>
                        </motion.div>

                        {/* Company Name Animation */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={currentStep >= 2 ? {
                                opacity: 1,
                                y: 0,
                            } : {}}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut"
                            }}
                            className="mb-4"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                                    CB BUILDING APPROVAL.COM
                                </span>
                            </h1>
                        </motion.div>

                        {/* Subtitle Animation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={currentStep >= 3 ? {
                                opacity: 1,
                                y: 0,
                            } : {}}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut"
                            }}
                            className="mb-12"
                        >
                            <p className="text-lg text-gray-300 font-medium">
                                
                            </p>
                        </motion.div>

                        {/* Loading Animation */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={currentStep >= 1 ? { opacity: 1 } : {}}
                            transition={{ duration: 0.5 }}
                            className="w-64 mx-auto"
                        >
                            {/* Progress Bar */}
                            <div className="relative">
                                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative"
                                        initial={{ width: "0%" }}
                                        animate={{ width: `${progress}%` }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    >
                                        {/* Glow effect on progress bar */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-sm opacity-60"></div>
                                    </motion.div>
                                </div>

                                {/* Progress Text */}
                                <motion.div
                                    className="text-center mt-4"
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <span className="text-sm text-gray-400 font-medium">
                                        Loading Experience...
                                    </span>
                                </motion.div>
                            </div>

                            {/* Loading Dots */}
                            <div className="flex justify-center space-x-2 mt-6">
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="w-2 h-2 bg-blue-400 rounded-full"
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [0.5, 1, 0.5],
                                        }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            delay: i * 0.2,
                                            ease: "easeInOut"
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Cinematic Scan Lines */}
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: `repeating-linear-gradient(
                                0deg,
                                transparent,
                                transparent 2px,
                                rgba(255,255,255,0.01) 2px,
                                rgba(255,255,255,0.01) 4px
                            )`
                        }}
                        animate={{
                            opacity: [0.3, 0.1, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Preloader