import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QualityFeatures from './components/QualityFeatures'
import About from './components/About'
import Services from './components/Services'
import Packages from './components/Packages'
import WhyChooseUs from './components/WhyChooseUs'
import Statistics from './components/Statistics'
import Projects from './components/Projects'
import WorkProcess from './components/WorkProcess'
import CTABanner from './components/CTABanner'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <QualityFeatures />
                <About />
                <Services />
                <Packages />
                <WhyChooseUs />
                <Statistics />
                <Projects />
                <WorkProcess />
                <CTABanner />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}
