
//Variables
var products = document.getElementsByClassName('products');
var productImg;


function MoveProduct(event){

    productImg = event.target;
    console.log(productImg.src);

}

function DomLoaded(){   

    for(let product of products){
        product.addEventListener('dragstart', MoveProduct);
    }

}

function clickprueba(){
    console.log('Funciona la prueba del click');
}

document.addEventListener('DOMContentLoaded', DomLoaded);
var prueba = document.getElementsByClassName('products');


