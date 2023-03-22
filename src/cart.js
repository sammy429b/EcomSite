
let cart = localStorage.getItem('cart');


cart = JSON.parse(cart)


console.log(cart)



let pr = document.getElementById('cartItems')

for (let i = 0; i < cart.length; i++) {

    pr.innerHTML += `
    <div id="item1" class="bg-[#F8F9FA] w-3/5 h-36 py-2 mt-8 flex items-center">
                    <img src="${cart[i].image}" class="w-24 h-32 mx-2" alt="">
                    <div id="productDes" class="pl-4 flex flex-col items-start gap-y-4 justify-between ">
                        <div class="">
                            <p class="text-base font-medium ">${cart[i].pname}</p>
                            <p class="text-sm text-[#666666]">8GB RAM</p>
                        </div>

                        <div class="">
                            <p class="text-base font-semibold">${cart[i].price}</p>
                        </div>
                    </div>
                </div>
    `
}

