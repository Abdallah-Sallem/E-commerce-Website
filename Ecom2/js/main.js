var cart = document.querySelector('.cart');
function open_cart(){
    cart.classList.add("active")
}
function close_cart(){
    cart.classList.remove("active")
}

var all_products_json;


var items_in_cart=document.querySelector('.items_in_cart');
let product_cart= [];


function addToCart(id,btn){
    product_cart.push(all_products_json[id])
    btn.classList.add("active");
    getCartItems();

}
let count_item= document.querySelector('.count_item');
let Price_cart_header=document.querySelector('.Price_cart_header');
let count_item_cart=document.querySelector('.count_item_cart');

let cart_total_price=document.querySelector('.cart_total_price');
function getCartItems(){
    let total_price=0;
    let items_c = "";
    for (let i = 0; i < product_cart.length; i++) {
        items_c += `
            <div class="item_cart">
                <img src="${product_cart[i].img}" alt=""/>
                <div class="content">
                    <h4>lorum ipsum</h4>
                    <p class="price_cart">${product_cart[i].price}dt</p>
                </div>
                <button onclick="remove_from_cart(${i})" class="delete_item"><i class="fa-solid fa-trash-can"></i></button>
            </div>`;
        total_price += product_cart[i].price;
    }
    items_in_cart.innerHTML=items_c;   

    Price_cart_header.innerHTML=total_price+"dt";
    count_item.innerHTML=product_cart.length;
    count_item_cart.innerHTML=`${product_cart.length} items in cart`;

    cart_total_price.innerHTML=total_price+"dt";

}

/*function remove_from_cart(index){
    product_cart.splice(index,1);
    getCartItems();

    let addToCartButtons=querySelectorAll(".fa-cart-shopping");
    for(let i=0; i<addToCartButtons.length;i++){

        addToCartButtons[i].classList.remove("active");

        product_cart.forEach(product =>{
            if(product.id==i){
                addToCartButtons[i].classList.add("active");
            }
        })
    }
}*/

function remove_from_cart(index) {
    const removedProduct = product_cart[index];
    product_cart.splice(index, 1);
    getCartItems();

    let addToCartButtons = document.querySelectorAll(".fa-cart-shopping");
    for (let i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].classList.remove("active");
    }

    product_cart.forEach(product => {
        addToCartButtons[product.id].classList.add("active");
    });

    // Re-enable the add to cart button for the removed product
    if (removedProduct) {
        addToCartButtons[removedProduct.id].classList.remove("active");
    }
}

//back to top


let back_to_top=document.querySelector('.back_to_top');

back_to_top.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
} )

let bigImage = document.getElementById("bigImg");

function changeItemImage(img) {
    bigImage.src = img;
}


