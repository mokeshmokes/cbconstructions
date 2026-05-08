import { Suspense, lazy, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Preloader from './components/Preloader'

// Lazy load components for better performance - grouped by priority
const QualityFeatures = lazy(() => import('./components/QualityFeatures'))
const About = lazy(() => import('./components/About'))
const Services = lazy(() => import('./components/Services'))

// Second priority components
const Packages = lazy(() => import('./components/Packages'))
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'))
const Statistics = lazy(() => import('./components/Statistics'))

// Third priority components
const Approvals = lazy(() => import('./components/Approvals'))
const WorkProcess = lazy(() => import('./components/WorkProcess'))
const CTABanner = lazy(() => import('./components/CTABanner'))

// Fourth priority components
const Testimonials = lazy(() => import('./components/Testimonials'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

// Optimized loading component with reduced animation
const SectionLoader = () => (
    <div className="flex items-center justify-center py-12"> {/* Reduced padding */}
        <div className="w-8 h-8 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div> {/* Reduced size */}
    </div>
)

// Optimized error fallback component
const ErrorFallback = ({ componentName }) => (
    <div className="flex items-center justify-center py-12 bg-red-50"> {/* Reduced padding */}
        <div className="text-center">
            <p className="text-red-600 text-sm">Failed to load {componentName}</p> {/* Reduced text size */}
        </div>
    </div>
)

export default function App() {
    const [showPreloader, setShowPreloader] = useState(true)
    const [isLoaded, setIsLoaded] = useState(false)

    const handlePreloaderComplete = () => {
        setShowPreloader(false)
        // Delay main content rendering slightly for smoother transition
        setTimeout(() => setIsLoaded(true), 100)
    }

    // Preload critical components
    useEffect(() => {
        if (!showPreloader) {
            // Preload first priority components
            import('./components/QualityFeatures')
            import('./components/About')
            import('./components/Services')
        }
    }, [showPreloader])

    return (
        <div className="min-h-screen bg-white overflow-hidden w-full" style={{ maxWidth: '100%' }}>
            {/* Optimized Premium Cinematic Preloader */}
            {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

            {/* Main Website Content - Only render when loaded */}
            {!showPreloader && isLoaded && (
                <>
                    <Navbar />
                    <main className="overflow-hidden w-full" style={{ maxWidth: '100%' }}>
                        <Hero />

                        {/* First priority sections */}
                        <Suspense fallback={<SectionLoader />}>
                            <QualityFeatures />
                        </Suspense>
                        <Suspense fallback={<SectionLoader />}>
                            <About />
                        </Suspense>
                        <Suspense fallback={<SectionLoader />}>
                            <Services />
                        </Suspense>

                        {/* Second priority sections */}
                        <Suspense fallback={<SectionLoader />}>
                            <Packages />
                        </Suspense>
                        <Suspense fallback={<SectionLoader />}>
                            <WhyChooseUs />
                        </Suspense>
                        <Suspense fallback={<SectionLoader />}>
                            <Statistics />
                        </Suspense>

                        {/* Third priority sections */}
                        <Suspense fallback={<SectionLoader />}>
                            <Approvals />
                        </Suspense>
                        <Suspense fallback={<SectionLoader />}>
                            <WorkProcess />
                        </Suspense>
                        <Suspense fallback={<SectionLoader />}>
                            <CTABanner />
                        </Suspense>

                        {/* Fourth priority sections */}
                        <Suspense fallback={<SectionLoader />}>
                            <Testimonials />
                        </Suspense>
                        <Suspense fallback={<SectionLoader />}>
                            <Contact />
                        </Suspense>
                    </main>
                    <Suspense fallback={<SectionLoader />}>
                        <Footer />
                    </Suspense>
                </>
            )}
        </div>
    )
}
