
let cart = localStorage.getItem('productInCart');


cart = JSON.parse(cart)

console.log(cart)

console.log(cart)
// console.log(total)



let pr = document.getElementById('cartItems')

for (let i = 0; i < 2; i++) {
    pr.innerHTML =`
    <div id="item1" class="bg-[#F8F9FA] w-3/5 h-36 py-2 mt-8 flex items-center">
                    <img src="#" class="w-24 h-32 mx-2" alt="">
                    <div id="productDes" class="pl-4 flex flex-col items-start gap-y-4 justify-between ">
                        <div class="">
                            <p class="text-base font-medium ">${cart.name}</p>
                            <p class="text-sm text-[#666666]">${cart.inCart}</p>
                        </div>

                        <div class="">
                            <p class="text-base font-semibold">${cart.price}</p>
                        </div>
                    </div>
                </div>
    `
}

