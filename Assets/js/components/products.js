function products (products) {
    const dataCopy = [...products]

    function printProducts () {
        const productsDOM = document.querySelector('.products__container')
        let htmlProduct = ''

        for(let product of dataCopy){
            htmlProduct += `
                      <article class="product">
            <div class="product__image">
              <img src=${product.image} alt=${product.title} />
            </div>
            <div class="product__content">
              <button type="button" class="product__btn add--to--cart" data-id="${product.id}">
                <i class="bx bx-cart-add"></i>
              </button>
              <span class="product__price"> Price: ${product.price} </span>
              <span class="product__stock"> Stock: ${product.rating.count} </span>
              <h3 class="product__title">${product.title}</h3>
            </div>
          </article>`
        }

        productsDOM.innerHTML = htmlProduct
    };

    printProducts();

    return {
        dataCopy,
        printProducts
    };
}

export default products;