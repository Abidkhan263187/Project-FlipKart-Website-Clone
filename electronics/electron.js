
import navbar from "../navbar/navbar.js";

let nav=document.getElementById("nav");
nav.innerHTML=navbar()
import {footer,footer2} from "../footer/footer.js";

 let footerpart=document.getElementById("abidFooter");
 footerpart.innerHTML=footer();


 let footer2part=document.getElementById("abidFooter2");
 footer2part.innerHTML=footer2()

 
let pv = localStorage.getItem("prod-Key")
var url = `https://myjson.onrender.com/electron`


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
        // console.log(fetchData)
        display(fetchData)
    } catch (error) {
        console.log(error)
    }
}
fetchProducts();


function display(mobilesArray) {

    document.getElementById("abidmobileContainer").textContent = ""
    // console.log(mobilesArray)
    mobilesArray.forEach(
        ({
            basePrice,
            brand,
            displayName,
            id,
            img,
            price,
            discount,
            f1, f2, f3, f4, f5, f6

        }) => {
            // console.log( f1, f2, f3, f4, f5, f6)


            let card = document.createElement("div");
            card.setAttribute("class", "card")

            let cardA = document.createElement("div");
            cardA.setAttribute("class", "cardA")

            let cardAChilda = document.createElement("div")
            cardAChilda.setAttribute("class", "cardAchilda");

            let image = document.createElement("img");
            image.setAttribute("class", "eleimg")
            image.src = img;
            image.addEventListener("click", () => {
                location.href = "../prod_desc/prod_desc.html"
                localStorage.setItem("prod-Data", "electron?id="+id)
            })

            cardAChilda.append(image);

            let cardAchildb = document.createElement("div");
            cardAchildb.setAttribute("class", "cardAchildbele");

            let Brandh2 = document.createElement("h3");
            Brandh2.setAttribute("class", "Brandh2");
            Brandh2.textContent = brand;
            let mobname = document.createElement("h4");
            mobname.textContent = displayName;
            mobname.setAttribute("class","mobName")

            let p1 = document.createElement("li");
            p1.textContent = f1;
            let p2 = document.createElement("li");
            p2.textContent = f2;
            let p3 = document.createElement("li");
            p3.textContent = f3;
            let p4 = document.createElement("li");
            p4.textContent = f4;
            let p5 = document.createElement("li");
            p5.textContent = f5;
            let p6 = document.createElement("li");
            p6.textContent = f6;

            cardAchildb.append(Brandh2, mobname,p1,p2,p3,p4,p5,p6)



            cardA.append(cardAChilda, cardAchildb)


            let cardB = document.createElement("div");
            cardB.setAttribute("class", "cardB")

            let cardBa = document.createElement("div");
            cardBa.setAttribute("class", "cardBa")
            let h3 = document.createElement("h3");
            h3.textContent = "₹ "+price;
            let logo = document.createElement("img");
            logo.setAttribute("class", "assured")
            logo.src = "https://www.adgully.com/img/800/68264_fl.png.jpg"

            cardBa.append(h3, logo);

            let cardBb = document.createElement("div");
            cardBb.setAttribute("class", "cardBb")

            let basep = document.createElement("s");
            basep.setAttribute("class", "basep")
            basep.textContent = "₹ "+basePrice;

            let offDivo=document.createElement("div")
            offDivo.setAttribute("id","offDivo")
            
            let disInfo = document.createElement("p");
            disInfo.setAttribute("class", "disInfo")
            disInfo.textContent = discount;
            let off=document.createElement("p");
            off.textContent="%Off"
            off.setAttribute("class","freeP")


            offDivo.append(disInfo,off)
            cardBb.append(basep,offDivo)


            let cardBc = document.createElement("div");
            cardBc.setAttribute("class", "cardBc");
            let freeP = document.createElement("p");
            freeP.textContent = "Free delivery";
            freeP.setAttribute("class","freeP")
            let h5Excng = document.createElement("h4");
            h5Excng.setAttribute("class", "bankOffer")
            h5Excng.textContent = "  Upto ₹7,650 Off on Exchange"
            let bankOffer = document.createElement("h4");
            bankOffer.setAttribute("class", "bankOffer")
            bankOffer.textContent = "Bank Offer"

            let btn = document.createElement("button");
            btn.setAttribute("class","abidCart")
            btn.addEventListener("click", () => {
                alert("Item Added In Cart")
                gotoCart(id);
            })
            btn.textContent = "ADD TO CART"


            cardBc.append(btn,freeP, h5Excng, bankOffer);


            cardB.append(cardBa, cardBb, cardBc)
            let hr=document.createElement("hr")



            card.append(cardA, cardB)

            document.getElementById("abidmobileContainer").append(card,hr);


        })
}

var arr= JSON.parse(localStorage.getItem("cart"))|| []
async function gotoCart(id) {
    try {
        let fetchRes = await geturl(`https://myjson.onrender.com/electron` +`/${id}`)
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

let clearbtn = document.getElementById("clearAll");
clearbtn.addEventListener("click", () => {
    location.href = "electron.html"
})


let selBrand = document.getElementById("select")
selBrand.addEventListener("change", () => {
    brand();
})

let disc = document.getElementById("selectDiscount")
disc.addEventListener("change", () => {
    brand();
})
let selPrice = document.getElementById("selectPrice");
selPrice.addEventListener("change", () => {
    brand();
})

let selCat = document.getElementById("selectCat");
selCat.addEventListener("change", () => {
    brand();
})




function brand() {
    let brand = selBrand.value;
    let discount = disc.value;
    let price = selPrice.value;
    let gender = selCat.value;

    // if(gender===""){
    //     url = `https://myjson.onrender.com/electron`
    //     fetchProducts();
    //     return;
    // }

    if (gender !== "") {
        url += `?cat=${gender}`

    }
    else {
        if (gender === "") {
            url += `?brand=${brand}`
        }
        else {(brand !== "")
            url += `&brand=${brand}`
        }
    }

    if (brand !== "") {
        url += `&brand=${brand}`
    }
    // if (rating !== "") {
    //     url += `&rat_gte=${rating}`
    // }

    if (discount !== "") {
        url += `&discount_gte=${discount}`
    }

    if (price !== "") {
        url += `&_sort=${price}&_order=asc`
    }
    fetchProducts();
    url = `https://myjson.onrender.com/electron`
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


// pagination part 

let page=1;
let pageno=document.getElementById("pageno");
pageno.textContent=page;
let prevbtn=document.getElementById("prev");

prevbtn.addEventListener("click",()=>{
  prev()
})

let nextbtn=document.getElementById("next");

nextbtn.addEventListener("click",()=>{
  next()
})


function prev(){

    if(page==1) return;
    page--;
    pageno.textContent=page
    fetchProductpage(`https://myjson.onrender.com` + `/${pv}`+`?_page=${page}&_limit=4`)
  
}

function next(){

page++;
    console.log(page)
    pageno.textContent=page
    fetchProductpage(`https://myjson.onrender.com` + `/${pv}`+`?_page=${page}&_limit=4`)
}

async function fetchProductpage(url){
    try {
        let fetchData = await geturl(url)
        // console.log(fetchData)
        display(fetchData)
    } catch (error) {
        console.log(error)
    }
}



