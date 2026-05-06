// Performance monitoring utilities

// Log Web Vitals in development
export const reportWebVitals = (onPerfEntry) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            getCLS(onPerfEntry)
            getFID(onPerfEntry)
            getFCP(onPerfEntry)
            getLCP(onPerfEntry)
            getTTFB(onPerfEntry)
        }).catch(() => {
            // web-vitals not installed, skip
        })
    }
}

// Debounce utility for scroll handlers
export const debounce = (func, wait = 100) => {
    let timeout
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout)
            func(...args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}

// Throttle utility for performance-critical handlers
export const throttle = (func, limit = 100) => {
    let inThrottle
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args)
            inThrottle = true
            setTimeout(() => (inThrottle = false), limit)
        }
    }
}

// Lazy load images
export const lazyLoadImage = (imageElement) => {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target
                    img.src = img.dataset.src
                    img.classList.remove('lazy')
                    imageObserver.unobserve(img)
                }
            })
        })
        imageObserver.observe(imageElement)
    } else {
        // Fallback for older browsers
        imageElement.src = imageElement.dataset.src
    }
}

// Preload critical resources
export const preloadResource = (href, as = 'script') => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = as
    link.href = href
    document.head.appendChild(link)
}
