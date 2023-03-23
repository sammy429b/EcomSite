
let cart = localStorage.getItem('productsInCart');


cart = JSON.parse(cart)



let pr = document.getElementById('cartItems')

for (let i in cart) {
    cart[i]
    pr.innerHTML +=`
    <div id="item1" class="bg-[#F8F9FA] w-3/5 h-36 py-2 mt-8 flex items-center">
    <img src="${cart[i].path}" class="w-24 h-32 mx-2" alt="">
    <div id="productDes" class="pl-4 flex flex-col items-start gap-y-4 justify-between ">
        <div class="">
            <p class="text-base font-medium ">${cart[i].name}</p>
            <p class="text-sm text-[#666666]">Quantity: ${cart[i].inCart}</p>
        </div>

        <div class="">
            <p class="text-base font-semibold">${cart[i].price}</p>
            <!-- <p class="text-base font-semibold">76,500</p> -->
        </div>
    </div>
</div>
    `
}

