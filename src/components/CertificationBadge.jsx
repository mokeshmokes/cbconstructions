import { motion } from 'framer-motion'
import isoCertification from '../assets/certifications/iso-certification.png'

/**
 * Clean Certification Badge Component - Image Only
 * Displays only the ISO certification logo without text
 * 
 * Usage:
 * <CertificationBadge />
 * <CertificationBadge size="lg" />
 * <CertificationBadge animate={true} />
 * <CertificationBadge theme="dark" />
 */

const CertificationBadge = ({
    size = 'md',
    animate = false,
    theme = 'light',
    className = ''
}) => {
    // Enhanced size mapping for certification image
    const sizeClasses = {
        sm: 'w-20 h-20',      // 80px
        md: 'w-28 h-28',      // 112px
        lg: 'w-36 h-36',      // 144px
        xl: 'w-44 h-44',      // 176px
    }

    const sizeClass = sizeClasses[size] || sizeClasses.md

    // Enhanced theme colors with better contrast
    const themeClasses = {
        light: {
            bg: 'bg-white/90 backdrop-blur-lg',
            border: 'border-gray-200/50',
            hover: 'hover:bg-white hover:shadow-2xl hover:border-gray-300'
        },
        dark: {
            bg: 'bg-white/10 backdrop-blur-lg',
            border: 'border-white/20',
            hover: 'hover:bg-white/15 hover:shadow-2xl hover:border-white/30'
        }
    }

    const colors = themeClasses[theme] || themeClasses.light

    // Enhanced animation variants
    const badgeVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    }

    const glowVariants = {
        initial: { opacity: 0.3 },
        hover: {
            opacity: 0.6,
            transition: { duration: 0.3 }
        }
    }

    const CertificationContent = () => (
        <div className={`relative inline-flex items-center justify-center ${colors.bg} border-2 ${colors.border} ${colors.hover} rounded-2xl p-6 transition-all duration-300 shadow-lg ${className}`}>
            {/* Certification Image Only */}
            {isoCertification && (
                <div className="relative">
                    {/* Certification image with enhanced rendering */}
                    <img
                        src={isoCertification}
                        alt="ISO 9001:2015 Certification"
                        className={`${sizeClass} object-contain relative z-10`}
                        loading="eager"
                        style={{
                            imageRendering: '-webkit-optimize-contrast',
                            WebkitFontSmoothing: 'antialiased',
                            MozOsxFontSmoothing: 'grayscale',
                            filter: 'contrast(1.1) brightness(1.05)',
                        }}
                        onError={(e) => {
                            console.error('Certification image failed to load:', e)
                            e.target.style.display = 'none'
                        }}
                    />

                    {/* Subtle glow effect for dark backgrounds */}
                    {theme === 'dark' && animate && (
                        <motion.div
                            variants={glowVariants}
                            className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl blur-xl -z-10"
                        />
                    )}
                </div>
            )}
        </div>
    )

    if (animate) {
        return (
            <motion.div
                variants={badgeVariants}
                initial="initial"
                whileHover="hover"
                className="inline-block"
            >
                <CertificationContent />
            </motion.div>
        )
    }

    return <CertificationContent />
}

export default CertificationBadge
