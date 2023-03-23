let carts = document.querySelectorAll('.addToCart')

const products = [
    {
        name: "Google Pixel 7 Pro",
        price: 76500,
        path: "images/Pixel.png",
        tag: "Pixel",
        inCart: 0
    },
    {
        name: "Nothing phone 1",
        price: 31500,
        path: "images/product4.webp",
        tag: "Nothing",
        inCart: 0
    },
    {
        name: "Oneplus 11 5G",
        price: 57000,
        path: "images/product3.png",
        tag: "Oneplus",
        inCart: 0
    },
    {
        name: "Apple AirPods (3rd Generation)",
        price: 20000,
        path: "images/product10.png",
        tag: "AirPods",
        inCart: 0
    },
    {
        name: "OnePlus Nord Buds CE",
        price: 8000,
        path: "images/product9.png",
        tag: "Nord",
        inCart: 0
    },
    {
        name: "Samsung Galaxy Buds Live",
        price: 12000,
        path: "images/product11.png",
        tag: "Samsung",
        inCart: 0
    },
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        itemNumber(products[i])
        totalCost(products[i])
    })
}

function onLoadItemNumber() {
    let productCount = localStorage.getItem('itemNumber')
    if (productCount) {
        document.querySelector('.cart span').textContent = productCount
    }
}

function itemNumber(product) {
    // console.log(product)
    let productCount = localStorage.getItem('itemNumber')

    productCount = parseInt(productCount)

    if (productCount) {
        localStorage.setItem('itemNumber', productCount + 1)
        document.querySelector('.cart span').textContent = productCount + 1
    } else {
        localStorage.setItem('itemNumber', 1)
        document.querySelector('.cart span').textContent = 1
    }
    // console.log(productCount)

    setItem(product)
}

function setItem(product) {
    let cartItem = localStorage.getItem('productsInCart')
    cartItem = JSON.parse(cartItem)

    // console.log('My cartItem are', cartItem)

    if (cartItem != null) {
        if (cartItem[product.tag] == undefined) {
            cartItem = {
                ...cartItem,
                [product.tag]: product
            }
        }
        cartItem[product.tag].inCart += 1
    } else {
        product.inCart = 1;
        cartItem = {
            [product.tag]: product
        }
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartItem))
}

function totalCost(product){
    // console.log("The product price is",product.price)
    let cartCost = localStorage.getItem('totalCost')
    // console.log("mycost",cartCost)
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost',cartCost + product.price  )
    }else{
    localStorage.setItem('totalCost',product.price  )
}
}


// 

onLoadItemNumber()
// displayCart()












// let cart = localStorage.getItem('cart');
// cart = JSON.parse(cart) == null ? [] : JSON.parse(cart)


// function SaveItem(e) {
//     let item = e.parentElement.parentElement
//     item = item.children[0]
//     let pname = item.children[0]
//     let price = item.children[1]

//     cart.push({
//         pname: pname.innerHTML,
//         price: price.innerHTML,
//         image: e.parentElement.parentElement.parentElement.children[0].children[0].attributes[0].textContent
//     })

//     localStorage.setItem('cart', JSON.stringify(cart))
// }
