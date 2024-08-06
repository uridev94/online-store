function darkMode () {
    const darkBTn = document.querySelector('.btn--dark')
    const darkBody = document.querySelector('body')

    darkBTn.addEventListener('click', function (){
        darkBody.classList.toggle('dark')
       
        const moonIcon = document.querySelector('.bx-moon')
        const sunIcon = document.querySelector('.bx-sun')
        if (moonIcon.classList.contains('icon__hidden')) {
            moonIcon.classList.remove('icon__hidden')
            sunIcon.classList.add('icon__hidden')
        }else{
        sunIcon.classList.remove('icon__hidden')
        moonIcon.classList.add('icon__hidden')
        }
    })
    
    }


export default darkMode;