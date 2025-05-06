fetch('js/items.json')
    .then(response => response.json())
    .then(data => {
        

        const product_dev = document.getElementById('product_dev');

        
        all_products_json=data

        
        data.forEach(product => {

            all_products_json=data

            const old_price_paragraph=product.old_price ?` <p class="old_price">${product.old_price}dt</p>`:"";

                const percent_disc=product.old_price?`<span class="sale_present">-${Math.floor((product.old_price - product.price)/product.old_price*100)}%</span>`:"";
                
                product_dev.innerHTML += `
                <div class="product swiper-slide">

                        <div class="icons">
                            <span>
                                <i onclick="addToCart(${product.id},this)" class="fa-solid fa-cart-shopping"></i>
                            </span>

                            <span>
                                <i class="fa-solid fa-heart"></i>
                            </span>

                            <span>
                                <i class="fa-solid fa-share-nodes"></i>
                            </span>
                        </div>

                        ${percent_disc}
                        

                        <div class="img_product">
                            <img src="${product.img}" alt="">
                            <img class="img_hover" src="${product.img_hover}" alt="">
                        </div>
                    


                    <h3 class="name_product">
                        <a href="">Lorem ipsum .</a>
                    </h3>

                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>


                        <div class="price">
                        <p><span>${product.price} dt</span></p>
                        ${old_price_paragraph}
                        </div>
                </div>
`;
            
        });




    });