let fam=document.getElementById("fam");
let max=document.getElementById("max");
let ul=document.querySelector("ul");
let color1=document.getElementById("color1");
let color2=document.getElementById("color2");
let h4=document.querySelector("h5");
let p=document.querySelector("p");
let gradinet=document.getElementById("gradient");
let div=document.querySelector('div');
let button=document.querySelector('#baton')

function hide(){
    if(div.classList.contains("open")){
        div.classList.remove('open')
    }else{
        div.classList.add('hiden')
    }
}
function colorChange(){
    
    gradinet.style.background ="linear-gradient(to right," 
    + color1.value 
    +", " 
    + color2.value 
    +")";
    h4.style.backgroundColor="#ffffff"
    h4.textContent= fam.value +" "+ "hi! you have just changed the background to" + color1.value + color2.value +";";
    
   
}
function texsting2(event){
    if (fam.value.length > 0 && event.keyCode ===13){
        console.log(fam.value);
        let li=document.createElement("li");
        li.appendChild(document.createTextNode(fam.value));
        ul.appendChild(li);
        fam.value="";
       
    
    }
}    
function texsting() {
    if (fam.value.length > 0){
        console.log(fam.value);
        let li=document.createElement("li");
        li.appendChild(document.createTextNode(fam.value));
        ul.appendChild(li);
        fam.value="";
    
    }
}

function change(){
    if(fam.value.length !==0){
        let ti=document.createElement("h6");
        ti.appendChild(document.createTextNode(fam.value +' '+ 'your name has been added'));
        p.appendChild(ti);
        fam.value="";
    }else{
        let ti=document.createElement("h6");
        ti.appendChild(document.createTextNode('add name please!'));
        p.appendChild(ti);
        fam.value="";
    }
    
}
function hiding(){
    if(button.classList.contains('baton')){
        button.classList.remove('baton')
    }else{
        button.classList.add('hiding')
    }
}
fam.addEventListener("keypress",texsting2);
max.addEventListener("click",texsting);
max.addEventListener("click",change);
color1.addEventListener("input",colorChange);
color2.addEventListener("input",colorChange);
button.addEventListener("click",hide);
button.addEventListener("click",hiding);