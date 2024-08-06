import loader from "./components/loader.js";
import showMenu from "./components/showMenu.js";
import showCart from "./components/showCart.js";
import products from "./components/products.js";
import getProducts from "./handlers/getProducts.js";
import cart from "./components/cart.js";
import darkMode from "./components/darkMode.js";



/* UI elements */
/* Hide loader */


loader()

/* --- Dark mode ---*/

darkMode()




/* ----- Display menu ----- */
showMenu()

/* ----- Display Cart ----- */

showCart()

/*----- end of UI ----- */



/* ----- Products ----- */

const { dataCopy, printProducts } = products(await getProducts())



/* ----- Cart ------ */

cart(dataCopy, printProducts)