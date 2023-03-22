// let pname = document.getElementById('productName').innerHTML
// let pprice = document.getElementById('productPrice').innerHTML
// let btn = document.getElementsByTagName('button')

let cart = localStorage.getItem('cart');
cart = JSON.parse(cart) == null ? [] : JSON.parse(cart)


function SaveItem(e) {
    let item = e.parentElement.parentElement
    item = item.children[0]
    let pname = item.children[0]
    let price = item.children[1]

    cart.push({
        pname: pname.innerHTML,
        price: price.innerHTML,
        image: e.parentElement.parentElement.parentElement.children[0].children[0].attributes[0].textContent
    })

    localStorage.setItem('cart', JSON.stringify(cart))
}
