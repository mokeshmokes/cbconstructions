import { Suspense, lazy, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Preloader from './components/Preloader'

// Lazy load components for better performance
const QualityFeatures = lazy(() => import('./components/QualityFeatures'))
const About = lazy(() => import('./components/About'))
const Services = lazy(() => import('./components/Services'))
const Packages = lazy(() => import('./components/Packages'))
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'))
const Statistics = lazy(() => import('./components/Statistics'))
const Approvals = lazy(() => import('./components/Approvals'))
const WorkProcess = lazy(() => import('./components/WorkProcess'))
const CTABanner = lazy(() => import('./components/CTABanner'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

// Loading component
const SectionLoader = () => (
    <div className="flex items-center justify-center py-20">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
)

// Error fallback component
const ErrorFallback = ({ componentName }) => (
    <div className="flex items-center justify-center py-20 bg-red-50">
        <div className="text-center">
            <p className="text-red-600">Failed to load {componentName}</p>
        </div>
    </div>
)

export default function App() {
    const [showPreloader, setShowPreloader] = useState(true)

    const handlePreloaderComplete = () => {
        setShowPreloader(false)
    }

    return (
        <div className="min-h-screen bg-white overflow-hidden w-full" style={{ maxWidth: '100%' }}>
            {/* Premium Cinematic Preloader */}
            {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

            {/* Main Website Content */}
            {!showPreloader && (
                <>
                    <Navbar />
                    <main className="overflow-hidden w-full" style={{ maxWidth: '100%' }}>
                        <Hero />
                        <Suspense fallback={<SectionLoader />}>
                            <QualityFeatures />
                        </Suspense>
                        <Suspense fallback={<SectionLoader />}>
                            <About />
                        </Suspense>
                        <Suspense fallback={<SectionLoader />}>
                            <Services />
                        </Suspense>
                        <Suspense fallback={<SectionLoader />}>
                            <Packages />
                        </Suspense>
                        <Suspense fallback={<SectionLoader />}>
                            <WhyChooseUs />
                        </Suspense>
                        <Suspense fallback={<SectionLoader />}>
                            <Statistics />
                        </Suspense>
                        <Suspense fallback={<SectionLoader />}>
                            <Approvals />
                        </Suspense>
                        <Suspense fallback={<SectionLoader />}>
                            <WorkProcess />
                        </Suspense>
                        <Suspense fallback={<SectionLoader />}>
                            <CTABanner />
                        </Suspense>
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
