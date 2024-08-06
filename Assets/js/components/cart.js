function cart (dataCopy,  printProducts) {
    let cart = [];

    // DOM elements

    const productsDOM = document.querySelector('.products__container')
    const notifyDOM = document.querySelector('.notify')
    const cartDOM = document.querySelector('.cart__body')
    const countDOM = document.querySelector('.cart__count--item')
    const totalDOM = document.querySelector('.cart__total--item')
    const checkoutDOM = document.querySelector('.btn--buy')

    // Functions

    function printCart () {

        let htmlCart = '';

        
        if (cart.length === 0){
            htmlCart += `
            <div class="cart__empty">
            <i class='bx bx-cart-alt'></i>
            <p class="cart__empy--text">No products added</p>
          </div>
            ` 
            notifyDOM.classList.remove('display--notify')
        } else {
            for(const item of cart) {
                const product = dataCopy.find(prod => prod.id === item.id)
                htmlCart += `
                <article class="article">
            <div class="article__image">
              <img src=${product.image} alt=${product.title} />
            </div>
            <div class="article__content">
              <h3 class="article__title">${product.title}</h3>
              <span class="article__price">${product.price}</span>
              <div class="article__quantity">
                <button
                  type="button"
                  class="article__quantity-btn article--less" data-id="${item.id}"
                >
                  <i class="bx bx-minus"></i>
                </button>
                <span class="article__quantity-text">${item.cartQuantity}</span>
                <button
                  type="button"
                  class="article__quantity-btn article--add" data-id="${item.id}"
                >
                  <i class="bx bx-plus"></i>
                </button>
              </div>
              <button type="button" class="article__btn remove-from-cart" data-id="${item.id}">
                <i class="bx bx-trash"></i>
              </button>
            </div>
          </article>
                `
            }
            notifyDOM.classList.add('display--notify')
        };

        cartDOM.innerHTML = htmlCart
        notifyDOM.innerHTML = showItemsCount()
        countDOM.innerHTML = showItemsCount()
        totalDOM.innerHTML = showTotal()
    }

    function addToCart (id, cartQuantity = 1) {

        const findItem = cart.find(item => item.id === id)

        if(findItem){

            findItem.cartQuantity += cartQuantity
        } else {

            cart.push({ id, cartQuantity })
        }

        const productsUpdate = dataCopy.map((product)=>{
             if (product.id === id) {
                product.rating.count -= 1
             }
             return product
        })

        printCart()
        printProducts(productsUpdate)
    }


        

    function removeFromCart(id, cartQuantity = 1){
        const findItem = cart.find(item => item.id === id)

        const result = findItem.cartQuantity - cartQuantity

        if (result > 0) {

            findItem.cartQuantity -= cartQuantity
        } else{

            cart = cart.filter(item => item.id !== id)
        }

        const productsUpdate = dataCopy.map((product)=>{
            if (product.id === id) {
               product.rating.count += 1
            }
            return product
       })

        printCart()
        printProducts(productsUpdate)
    }


    function clearCart (id, cartQuantity) {
        cart = cart.filter(item => item.id !== id)

        const productsUpdate = dataCopy.map((product)=>{
            if (product.id === id) {
               product.rating.count += cartQuantity
            console.log(cartQuantity)
            }
            return product
       })


        printCart()
        printProducts(productsUpdate)
    }


    function showItemsCount () {
        let sum = 0

        for(const item of cart) {
            sum += item.cartQuantity
        }
        return sum
    }

    function showTotal () {
        let total = 0

        for (const item of cart) {
            const productFound = dataCopy.find(prod => prod.id === item.id)
            total += item.cartQuantity * productFound.price 
        }
        return total
    }

    function checkout () {
        for (const item of cart){
            const productFound = dataCopy.find(prod => prod.id === item.id)
            productFound.rating.count
        }

        cart = []
        printCart()
        printProducts()
        window.alert('Thanks for your support, we are glad you made your purchase with us!')
    }

    printCart()

    //Events

    productsDOM.addEventListener('click', function (event) {
        if(event.target.closest('.add--to--cart')) {
            const id = +event.target.closest('.add--to--cart').dataset.id
            addToCart(id)
        } 

    })


    cartDOM.addEventListener('click', function (event) {

        if(event.target.closest('.article--less')) {
            const id = +event.target.closest('.article--less').dataset.id
            removeFromCart(id)
        }
        
        if(event.target.closest('.article--add')) {
            const id = +event.target.closest('.article--add').dataset.id
            addToCart(id)
        }

        if(event.target.closest('.remove-from-cart')) {
            const id = +event.target.closest('.remove-from-cart').dataset.id
            clearCart(id)
        }
    })


    checkoutDOM.addEventListener('click', function (){
        checkout();
    })
}

export default cart;