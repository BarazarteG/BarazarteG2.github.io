let contenedor = document.querySelector(".contenedor");
let contenedor2 = document.querySelector(".contenedor2");
let contenedor3 = document.querySelector(".contenedor3");
let contenedor4 = document.querySelector(".contenedor4");
let contenedor5 = document.querySelector(".contenedor5");
function ShowHide(){
    if(contenedor.style.visibility=="hidden"){
        contenedor.style.visibility="visible";
         contenedor2.style.visibility="hidden";
         contenedor3.style.visibility="hidden";
         contenedor4.style.visibility="hidden"; 
         contenedor5.style.visibility="hidden";
        
    }else{
        contenedor.style.visibility="hidden";
        contenedor2.style.visibility="hidden";
        contenedor3.style.visibility="hidden";
        contenedor4.style.visibility="hidden";
        contenedor5.style.visibility="hidden";
    }
}
function ShowHide2(){
    if(contenedor2.style.visibility=="hidden"){
        contenedor2.style.visibility="visible";
         contenedor.style.visibility="hidden";
         contenedor3.style.visibility="hidden";
         contenedor4.style.visibility="hidden";
         contenedor5.style.visibility="hidden";
    }else{
        contenedor2.style.visibility="hidden";
        contenedor.style.visibility="hidden";
        contenedor3.style.visibility="hidden";
        contenedor4.style.visibility="hidden";
        contenedor5.style.visibility="hidden";
    }
}
function ShowHide3(){
    if(contenedor3.style.visibility=="hidden"){
        contenedor3.style.visibility="visible";
         contenedor.style.visibility="hidden";
         contenedor2.style.visibility="hidden";
         contenedor4.style.visibility="hidden";
         contenedor5.style.visibility="hidden";
    }else{
        contenedor4.style.visibility="hidden";
        contenedor3.style.visibility="hidden";
        contenedor2.style.visibility="hidden";
        contenedor.style.visibility="hidden";
        contenedor5.style.visibility="hidden";
    }
}
function ShowHide4(){
    if(contenedor4.style.visibility=="hidden"){
        contenedor4.style.visibility="visible";
         contenedor.style.visibility="hidden";
         contenedor2.style.visibility="hidden";
         contenedor3.style.visibility="hidden";
         contenedor5.style.visibility="hidden";
    }else{
        contenedor5.style.visibility="hidden";
        contenedor4.style.visibility="hidden";
        contenedor3.style.visibility="hidden";
        contenedor2.style.visibility="hidden";
        contenedor.style.visibility="hidden";
    }
}
function ShowHide5(){
    if(contenedor5.style.visibility=="hidden"){
        contenedor5.style.visibility="visible";
        contenedor4.style.visibility="hidden";
         contenedor.style.visibility="hidden";
         contenedor2.style.visibility="hidden";
         contenedor3.style.visibility="hidden";
    }else{
        contenedor5.style.visibility="hidden";
        contenedor4.style.visibility="hidden";
        contenedor3.style.visibility="hidden";
        contenedor2.style.visibility="hidden";
        contenedor.style.visibility="hidden";
    }
}