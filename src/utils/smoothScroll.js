// Smooth scroll utility with offset for fixed navbar

export const smoothScrollTo = (elementId, offset = 80) => {
    const element = document.getElementById(elementId.replace('#', ''))

    if (element) {
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
    }
}

export const handleNavClick = (e, href) => {
    e.preventDefault()
    smoothScrollTo(href)
}
