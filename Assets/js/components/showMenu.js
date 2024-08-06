function showMenu () {
    const nav = document.querySelector('.nav')
    const menu = document.querySelector('.nav__menu')

    nav.addEventListener('click', function (event) {
        if (event.target.closest('.btn--menu')) {
            menu.classList.toggle('display--menu')
        }

        if (event.target.closest('.btn--close')){
            menu.classList.remove('display--menu')
        }

        if (event.target.closest('.nav__link')){
            menu.classList.remove('display--menu')
        }
    })
}

export default showMenu;