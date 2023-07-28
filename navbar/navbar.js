function navbar(){
    return`  <div class="logo">
    <a href="../index.html"> <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png" width="100px" height ="25px"></a>
</div>
<div class="search">
    <input type="text" placeholder="Search for products,brands and more" id="homeinput">
    <i class="fa-solid fa-magnifying-glass" id="goforsrch"></i>
</div>
 <a href="../login_signup/signin.html"><button class="loginbtn">Login</button></a>
<a href="https://seller.flipkart.com/" class="Navlink">Become a Seller</a>
<span>
<a href="#" class="Navlink">More</a>
    <i class="fa-solid fa-angle-down" class="angledownicon"></i>
    <div class="dropdown-content2">
    <a href="https://www.flipkart.com/communication-preferences/push?t=all"><i class="fa-solid fa-bell"></i>Notification Preference</a><hr>
    <a href="https://www.flipkart.com/helpcentre"><i class="fa-solid fa-question"></i>24*7 Customer Care</a><hr>
    <a href="../login_signup/signin.html"> <i class="fa-sharp fa-solid fa-bolt-lightning"></i>Advertise</a><hr>
    <a href="https://www.flipkart.com/mobile-apps?otracker=ch_vn_mobile_apps"><i class="fa-solid fa-download"></i>Download App</a><hr>
  
  </div>

</span>

<a href="../cart/cart.html" class="Navlinka">
    <i class="fa-solid fa-cart-shopping"></i>  Cart</a>`
}

export default navbar;