// import navbar from "../navbar/navbar.js";

// let nav=document.getElementById("navbar");
// nav.innerHTML=navbar()
let sildeimages = [

    "https://raw.githubusercontent.com/Abidkhan263187/Project-FlipKart-Website-Clone/home_products/home/images/g54.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/11042023-UHP-D-Main-P4-LevisSpykar-Min40.jpg",
    // "https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_essentials_200323_01.jpg",
    "https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_96.jpg",
    "https://cdn.shopclues.com/images/banners/2023/Apr/12/shopclues-Intel-PCRefresh_SYM_12April23_Web.jpg",

    // "https://cdn.shopclues.com/images/banners/2023/Apr/11/HB1_BaisakhiSale_Web_SYM_11April23.jpg",
    // "https://cdn.shopclues.com/images/banners/2023/Apr/11/HB3_Trueware_Web_Esha_11thApr23.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/11042023-UHP-D-Main-P7-DNMXTS-Under299.jpg",
    "https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_nursery_210323_31.jpg",
    "https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_446_desktop_summer_200323_01_new.jpg",
    // "https://cdn.shopclues.com/images/banners/2023/Apr/11/HB2_RefurbMobile_Web_Esha_11thApr23.jpg",

  
    // "https://www.jiomart.com/images/cms/aw_rbslider/slides/1681134185_MUMBAI.jpg",






]
let index = 0;
function slide() {
    document.getElementById("slideImg").src = sildeimages[index];
    index++;
    if (index >= sildeimages.length) {
        index = 0;
    }
}
setInterval("slide () ", 1800)

function gotoFun(){
    localStorage.setItem("prod-Key","products")
    
}
function gotoMob(){
    localStorage.setItem("prod-Key","mobiles")
    
}
function gotoFas(){
    localStorage.setItem("prod-Key","products")
    
}
function gotoEle(){
    localStorage.setItem("prod-Key","electron")
    
}


let debounce=document.getElementById("goforsrch");
debounce.addEventListener("click",()=>{


    found();
})




function found(){
    let inputfromserarch=document.getElementById("homeinput").value;
    // localStorage.setItem("navSearch",inputfromserarch);

    if(inputfromserarch==="men"||inputfromserarch==="women"||inputfromserarch==="boy"||inputfromserarch==="saree"||inputfromserarch==="shirt"||inputfromserarch==="pants"){
        location.href="../products/products.html"
        localStorage.setItem("prod-Key","products")
    }else if(inputfromserarch==="mobile"){
        location.href="../electronics&Mobiles/mobile.html"
        localStorage.setItem("prod-Key","mobiles")
    }


}

