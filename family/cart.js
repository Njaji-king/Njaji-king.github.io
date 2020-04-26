//let liked=document.querySelector(".liked");
let add1=document.querySelector('.add');
let add2=document.querySelector('.twa');
let add3=document.querySelector('.twin');
let cart1=document.querySelector('.di-one');
let cart2=document.querySelector('.di-two');
let cart=document.querySelectorAll('.one');
let cart3=document.querySelector('.di-3');
let cted=document.querySelector('.cart');
let h3 =document.querySelector('h3');
console.log(h3)

function hidee(){
    if(cart1.classList.contains('di-one')){
        cart1.classList.remove('di-one')
        cart1.classList.add('hidii')
    }else{
        cart1.classList.add('di-one')
    }
}
function added1(){
    if(cart2.classList.contains('di-two')){
        cart2.classList.remove('di-two')
        cart2.classList.add('hidii')
    }else{
        cart2.classList.add('di-two')
    }
}
function added2(){
    if(cart3.classList.contains('di-3')){
        cart3.classList.remove('di-3')
        cart3.classList.add('hidii')
        }else{
        cart3.classList.add('di-3')
    }
}
function checkCart(){
    if(cart3.classList.contains('hidii')){
        cart3.classList.remove('hidii')
        cted.classList.add('hidii')
        add1.classList.add('hidii')
        cart.forEach(tr=>{
            tr.classList.add('hidii')
        })
    }
}
