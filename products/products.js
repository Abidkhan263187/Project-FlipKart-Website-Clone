
import navbar from "../navbar/navbar.js";

let nav = document.getElementById("nav");
nav.innerHTML = navbar()

import { footer, footer2 } from "../footer/footer.js";

let footerpart = document.getElementById("abidFooter");
footerpart.innerHTML = footer();


let footer2part = document.getElementById("abidFooter2");
footer2part.innerHTML = footer2()

let pv = localStorage.getItem("prod-Key")
var url = `https://myjson.onrender.com` + `/${pv}`+`?_page=1&_limit=12`

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
    // url = `https://myjson.onrender.com/products`
    try {
        let fetchData = await geturl(url)
        console.log(fetchData)
        display(fetchData)
    } catch (error) {
        console.log(error)
    }
}
fetchProducts();


function display(productsArray) {
    document.getElementById("abidproductContainer").textContent = ""
    productsArray.forEach(
        ({
            basePrice,
            brand,
            displayName,
            gender,
            id,
            img,
            price,
            size,
            discount

        }) => {
            // console.log(basePrice,brand,displayName,gender,id,img,price,size)


            let cardDiv = document.createElement("div");
            cardDiv.setAttribute("class", "cardDiv");
            let image = document.createElement("img");
            image.addEventListener("click", () => {
                location.href = "../prod_desc/prod_desc.html"
                localStorage.setItem("prod-Data", "products?id="+id)
            })

            image.src = img;

            let detailDiv1 = document.createElement("div");
            detailDiv1.setAttribute("class", "detailDiv1")
            let Brandname = document.createElement("p");
            Brandname.setAttribute("class", "abidBrandName")
            Brandname.textContent = brand;
            let Pname = document.createElement("p");
            Pname = displayName;

            let divDetails2 = document.createElement("div");
            divDetails2.setAttribute("class", "divdetails2")
            let Pprice = document.createElement("p");
            Pprice.textContent = "₹" + price;
            Pprice.setAttribute("class", "Pprice")
            let Bprice = document.createElement("s");
            Bprice.textContent = '₹' + basePrice;
            let dis = document.createElement("p");
            dis.setAttribute("class", "dis")
            dis.textContent = discount + '%Off';

            let sizeDiv = document.createElement("div");

            sizeDiv.setAttribute("class", "sizeDiv")
            let sizetxt = document.createElement("p");
            sizetxt.textContent = "Size";
            sizetxt.setAttribute("class", "sizetxt")
            let sizeDef = document.createElement("p");
            sizeDef.textContent = "  " + size

            sizeDiv.append(sizetxt, sizeDef)

            detailDiv1.append(Brandname, Pname)
            divDetails2.append(Pprice, Bprice, dis)
            let btn = document.createElement("button");
            btn.setAttribute("class","abidCartP")
            btn.addEventListener("click", () => {
                alert("Item Added In Cart")
                gotoCart(id);
            })
            btn.textContent = "ADD TO CART"



            cardDiv.append(image, detailDiv1, divDetails2, sizeDiv, btn);

            document.getElementById("abidproductContainer").append(cardDiv)



        })
}

var arr= JSON.parse(localStorage.getItem("cart"))|| []
async function gotoCart(id) {
    try {
        let fetchRes = await geturl(`https://myjson.onrender.com/products` + `/${id}`)
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
    location.href = "products.html"
})



let selBrand = document.getElementById("select")
selBrand.addEventListener("change", () => {
    brand();
})


function brand() {
    let brand = selBrand.value;
    let sizeVal = selSize.value;
    let gender = selCat.value;
    let discount = disc.value;
    let price = selPrice.value;



    if (gender !== "") {
        url += `?cat=${gender}`

    }
    else {
        if (gender === "") {
            url += `?brand=${brand}`
        }
        else {
            (brand !== "")
            url += `&brand=${brand}`
        }
    }

    if (brand !== "") {
        url += `&brand=${brand}`
    }

    if (sizeVal !== "") {
        url += `&size=${sizeVal}`;
    }
    if (discount !== "") {
        url += `&discount_gte=${discount}`
    }
    if (price !== "") {
        url += `&_sort=${price}&_order=asc,desc`
    }


    fetchProducts();
    url = `https://myjson.onrender.com/products`

}


let selSize = document.getElementById("selectSize");
selSize.addEventListener("change", () => {
    brand()
})


let selCat = document.getElementById("selectCat");
selCat.addEventListener("change", () => {
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
    fetchProductpage(`https://myjson.onrender.com` + `/${pv}`+`?_page=${page}&_limit=12`)
  
}

function next(){

page++;
    console.log(page)
    pageno.textContent=page
    fetchProductpage(`https://myjson.onrender.com` + `/${pv}`+`?_page=${page}&_limit=12`)
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















//  async function filter(brand){
// try {
//     let fetchRes=await geturl(`http://localhost:3000/products?brand=${brand}`)
//     let data=fetchRes;
//     display(data);
//     brand=""
// } catch (error) {
//     console.log(error)
// }
// }



