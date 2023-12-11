const mainMenu = () => {

    const menuButton = document.querySelector('.menu__icon')
    const menu = document.querySelector('.main-menu')
    const closeButton = document.querySelector('.close-button')

    const toggleMenu = (event) => {
        menu.classList.toggle('main-menu--open')
    }

    menuButton.addEventListener('click', toggleMenu)
    closeButton.addEventListener('click', toggleMenu)
}

mainMenu()