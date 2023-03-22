let pname = document.getElementById('productName').innerHTML
let pprice = document.getElementById('productPrice').innerHTML
let btn = document.getElementsByTagName('button')


function SaveItem(){
localStorage.setItem('pName', pname)
localStorage.setItem('pPrice', pprice)
localStorage.getItem(pname)
localStorage.getItem(pprice)
}

addEventListener('click',SaveItem)