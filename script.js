const sections = document.querySelectorAll('.js-scroll')

function animaScroll() {
    sections.forEach( (section) => {
        const sectionTop = section.getBoundingClientRect().top - 300
        if (sectionTop < 0) {
            section.classList.add('ativo')
        }
    })
}

window.addEventListener('scroll', animaScroll)