function navbar(){
    return`  <div class="logo">
    <a href="../home/index.html"> <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png" width="100px" height ="25px"></a>
</div>
<div class="search">
    <input type="text" placeholder="Search for products,brands and more" id="homeinput">
    <i class="fa-solid fa-magnifying-glass" id="goforsrch"></i>
</div>
 <a href="../login_signup/signin.html"><button class="loginbtn">Login</button></a>
<a href="https://seller.flipkart.com/" class="Navlink">Become a Seller</a>
<a href="#" class="Navlink">More
    <i class="fa-solid fa-angle-down" class="angledownicon"></i>
</a>

<a href="../cart/cart.html" class="Navlinka">
    <i class="fa-solid fa-cart-shopping"></i>  Cart</a>`
}

export default navbar;