import { motion } from 'framer-motion'
import companyLogo from '../assets/logo/company-logo.png'

/**
 * Clean Professional Logo Component for CB Building Approval
 * Redesigned for premium corporate branding
 * 
 * Usage:
 * <Logo size="sm" />  // Small (32px)
 * <Logo size="md" />  // Medium (48px) - default
 * <Logo size="lg" />  // Large (56px)
 * <Logo animate={true} />  // Enable subtle hover animation
 */

const Logo = ({
    size = 'md',
    className = '',
    animate = false,
    alt = 'CB Building Approval Logo'
}) => {
    // Clean, professional size mapping
    const sizeClasses = {
        sm: 'w-8 h-8',      // 32px
        md: 'w-12 h-12',    // 48px - clean professional size
        lg: 'w-14 h-14',    // 56px - slightly larger for emphasis
    }

    const sizeClass = sizeClasses[size] || sizeClasses.md

    // Subtle, professional animation
    const logoVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        }
    }

    const LogoImage = () => (
        <img
            src={companyLogo}
            alt={alt}
            className={`${sizeClass} ${className} object-contain`}
            loading="eager"
            style={{
                imageRendering: '-webkit-optimize-contrast',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
            }}
            onError={(e) => {
                console.error('Logo failed to load:', e)
                e.target.style.display = 'none'
            }}
        />
    )

    if (animate) {
        return (
            <motion.div
                variants={logoVariants}
                initial="initial"
                whileHover="hover"
                className="inline-flex items-center justify-center"
            >
                <LogoImage />
            </motion.div>
        )
    }

    return <LogoImage />
}

export default Logo
