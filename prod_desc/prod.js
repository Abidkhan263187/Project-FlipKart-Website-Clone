
import navbar from "../navbar/navbar.js";

let nav = document.getElementById("nav");
nav.innerHTML = navbar()
import { footer, footer2 } from "../footer/footer.js";

let footerpart = document.getElementById("abidFooter");
footerpart.innerHTML = footer();


let footer2part=document.getElementById("abidFooter2");
footer2part.innerHTML=footer2()

let prod=localStorage.getItem("prod-Data")
var   url = `https://myjson.onrender.com/${prod}`
async function geturl(url) {
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}


async function fetchProducts() {
    try {
        let fetchData = await geturl(url)
        console.log(fetchData)
        display(fetchData)
    } catch (error) {
        console.log(error)
    }
}
fetchProducts();


function display(a){
    document.getElementById("MainCard2").textContent=""
    a.forEach(({  displayName,
        id,
        price,
        img,
        basePrice,
        discount})=>{
    //   console.log(displayName,price,img,basePrice,dis)

  let mainprod=document.createElement("div");
  mainprod.setAttribute("class","mainprod")


    let ProdDesCardOne=document.createElement("div");
    ProdDesCardOne.setAttribute("class","proddesone")


    let imageDicProd=document.createElement("div");
    let image=document.createElement("img");
    image.setAttribute("class","prodImg")
    image.src=img;

    imageDicProd.append(image);

    let buttondivProd=document.createElement("div");
    buttondivProd.setAttribute("class","buttonproddiv")

    let addToProd=document.createElement("button");
    addToProd.setAttribute("class","addtoprod")
    addToProd.textContent="ADD TO CART";
    addToProd.addEventListener("click",()=>{
        gotoCart(id);
        alert("ITEM Added in cart")

    })

    let buyNowProd=document.createElement("button");
    buyNowProd.setAttribute("class","buynowprod")
    buyNowProd.textContent="BUY NOW";
    buyNowProd.addEventListener("click",()=>{
        gotoBuy(id);
    })

    buttondivProd.append(addToProd,buyNowProd)
    ProdDesCardOne.append(imageDicProd,buttondivProd)


    let ProdDesCardTwo=document.createElement("div");
 ProdDesCardTwo.setAttribute("id","proddestwo")


    let pdiv1=document.createElement("div");
    pdiv1.setAttribute("class","pdiv1")
    let pdiv1P=document.createElement("p");
    pdiv1P.setAttribute("class","pdiv1p");
    pdiv1P.textContent="HomeMobiles & Accessories > Mobiles >APPLE Mobiles APPLE iPhone 13 (RED, 128 GB)"


    pdiv1.append(pdiv1P);

    let pdiv2=document.createElement("div");

    pdiv2.setAttribute("class","pdiv2")
    let ProdName=document.createElement("h4");
    ProdName.setAttribute("class","prodName")
    ProdName.textContent=displayName;

    pdiv2.append(ProdName);

    let pdiv3=document.createElement("div");

    pdiv3.setAttribute("class","pdiv3")
    let pdiv3p=document.createElement("p");
    pdiv3p.setAttribute("class","pdivp3")
    pdiv3p.textContent="Extra ₹10901 off";

    pdiv3.append(pdiv3p)

    let pdiv4=document.createElement("div");
      pdiv4.setAttribute("class","pdiv4")
    let prodprice=document.createElement("h4");
    prodprice.setAttribute("class","prodprice");
    prodprice.textContent="₹ "+price;

    let prodBaseprice=document.createElement("s");
    prodBaseprice.setAttribute("class","prodBasePrice");
    prodBaseprice.textContent= "₹ "+basePrice;

    let prodDis=document.createElement("p");
    prodDis.setAttribute("class","prodDis");
    prodDis.textContent=discount+'%Off';

    pdiv4.append(prodprice,prodBaseprice,prodDis);




    let pdiv5=document.createElement("div");

    pdiv5.setAttribute("class","pdiv5")
    let prodRat=document.createElement("p");
    prodRat.setAttribute("class","prodrat")
    prodRat.textContent="4.3  1,00,411 Ratings & 10,890 Reviews";
    let prodAssureImg=document.createElement("img");
    prodAssureImg.setAttribute("class","prodassure")
    prodAssureImg.src="https://www.adgully.com/img/800/68264_fl.png.jpg"


    pdiv5.append(prodRat,prodAssureImg);

    let pdiv6=document.createElement("div");
    pdiv6.setAttribute("class","pdiv6")

    let pdiv6H4=document.createElement("h4")
    pdiv6H4.setAttribute("class","pdiv6h4");
    pdiv6H4.textContent="Available Offers"


    let pdiv6p=document.createElement("div");
    pdiv6p.setAttribute("class","pdiv6p1")
    let pdiv6p1img=document.createElement("img");
   pdiv6p1img.src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
   let pdiv6p1=document.createElement("p")
    pdiv6p1.textContent="Bank Offer10% off on Axis Bank Credit Card and EMI Transactions, up to ₹1000, on orders of ₹5,000 and aboveT&C"

    pdiv6p.append(pdiv6p1img,pdiv6p1);

    let pdiv6pt=document.createElement("div");
    pdiv6pt.setAttribute("class","pdiv6p1")
    let pdiv6pimgt=document.createElement("img");
 
    pdiv6pimgt.src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
    let pdiv6p2=document.createElement("p")
    pdiv6p2.textContent="Bank Offer10% off on Flipkart Axis Bank Credit Card EMI Transactions,up to ₹1000,on orders of ₹5,000 and aboveT&C"

    pdiv6pt.append(pdiv6pimgt,pdiv6p2);

    let pdiv6pt3=document.createElement("div");
    pdiv6pt3.setAttribute("class","pdiv6p1")
    let pdiv6p3img=document.createElement("img");
    pdiv6p3img.src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
   let pdiv6p3t=document.createElement("p")
    pdiv6p3t.textContent="Bank OfferFlat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm accountT&C"

    pdiv6pt3.append(pdiv6p3img,pdiv6p3t);


    let pdiv6p4=document.createElement("div");
    pdiv6p4.setAttribute("class","pdiv6p1")
    let pdiv6p4img=document.createElement("img");
    pdiv6p4img.src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
   let pdiv6p4t=document.createElement("p")
    pdiv6p4t.textContent="Special PriceGet extra ₹10901 off (price inclusive of cashback/coupon)T&C"

    pdiv6p4.append(pdiv6p4img,pdiv6p4t);


    pdiv6.append(pdiv6H4,pdiv6p,pdiv6pt,pdiv6pt3,pdiv6p4)


    ProdDesCardTwo.append(pdiv1,pdiv2,pdiv5,pdiv3,pdiv4,pdiv6);
    mainprod.append(ProdDesCardOne,ProdDesCardTwo);

    document.getElementById("MainCard2").append(mainprod)




   

    })
}

var arr= JSON.parse(localStorage.getItem("cart"))|| []
async function gotoCart(id) {
    let keyVal=localStorage.getItem("prod-Key")
    try {
        let fetchRes = await geturl(`https://myjson.onrender.com/`+`${keyVal}` + `/${id}`)
        // console.log(fetchRes)

        let obj = {
            image_url: fetchRes.img,
            name:fetchRes.displayName,
            mrp: fetchRes.basePrice,
            price:fetchRes.price,
        }
        console.log(obj)
        arr.push(obj)
        localStorage.setItem("cart",JSON.stringify(arr))
        
    } catch (error) {
console.log(error)
    }

}

async function gotoBuy(id) {
    let keyVal=localStorage.getItem("prod-Key")
    try {
        let fetchRes = await geturl(`https://myjson.onrender.com/`+`${keyVal}` + `/${id}`)
        // console.log(fetchRes)

        let obj = {
            image_url: fetchRes.img,
            name:fetchRes.displayName,
            mrp: fetchRes.basePrice,
            price:fetchRes.price,
        }
        console.log(obj)
        arr.push(obj)
        localStorage.setItem("cart",JSON.stringify(arr))
        location.href="../address&payment/address.html"
        
    } catch (error) {
console.log(error)
    }

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
    }else if(inputfromserarch==="tab"||inputfromserarch==="camera"||inputfromserarch==="lcd"){
        location.href="../electronics/electron.html"
    }


}
