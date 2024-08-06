async function getProducts () {
    try {
        const res = await window.fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}


export default getProducts;