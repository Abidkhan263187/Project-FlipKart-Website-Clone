
import navbar from "../navbar/navbar.js";

let nav = document.getElementById("nav");
nav.innerHTML = navbar()

import { footer, footer2 } from "../footer/footer.js";

let footerpart = document.getElementById("abidFooter");
footerpart.innerHTML = footer();


let footer2part = document.getElementById("abidFooter2");
footer2part.innerHTML = footer2()





let pv=localStorage.getItem("prod-Key")




var url = `https://myjson.onrender.com/`+`/${pv}`




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



function display(electronicArray) {
    document.getElementById("abidelectronicContainer").textContent = ""
    electronicArray.forEach(
        ({
            id,
            basePrice,
            brand,
            displayName,
            img,
            price,
            size,
            dis,
            rat,
            count

        }) => {
            // console.log(basePrice,brand,displayName,gender,id,img,price,size)


            let cardDiv = document.createElement("div");
            cardDiv.setAttribute("class", "cardDivELE");
            let image = document.createElement("img");
            image.addEventListener("click",()=>{
                location.href="prod-details.html"
                localStorage.setItem("prod-Detail",id)
            })
            image.src = img;

            let detailDiv1 = document.createElement("div");
            detailDiv1.setAttribute("class", "detailDivM1")
            let Brandname = document.createElement("p");
            Brandname.setAttribute("class","abidBrandName")
            Brandname.textContent = brand;
            let Pname = document.createElement("p");
            Pname = displayName;
            
            let ratingDiv=document.createElement("div");
            ratingDiv.setAttribute("class","ratingDiv")
            let rating = document.createElement("p");
            rating.setAttribute("class", "rating");
            rating.textContent = rat;

            let counting = document.createElement("p");
            counting.textContent ="("+ count+")"


            ratingDiv.append(rating,counting)

            let divDetails2 = document.createElement("div");
            divDetails2.setAttribute("class", "divdetails2ELE")
            let Pprice = document.createElement("p");
            Pprice.setAttribute("class","Pprice")
            Pprice.textContent = "₹" + price;
            let Bprice = document.createElement("s");
            Bprice.textContent = '₹' + basePrice;
            let disc = document.createElement("p");
            disc.setAttribute("class","disc")
            disc.textContent = dis + '%Off';

            let sizeDiv = document.createElement("div");
            sizeDiv.setAttribute("class", "sizeDiv")
            sizeDiv.textContent = size

            
            detailDiv1.append(Brandname, Pname)
            divDetails2.append(Pprice, Bprice, disc)
            let btnDiv=document.createElement("div");
            let btn = document.createElement("button");
            btn.setAttribute("class","abidCartE")
            btn.addEventListener("click", () => {
                alert("Item Added In Cart")
                gotoCart(id);
            })
            btn.textContent = "ADD TO CART"
            btnDiv.append(btn)
            

            cardDiv.append(image, detailDiv1, ratingDiv, divDetails2, sizeDiv,btnDiv);

            document.getElementById("abidelectronicContainer").append(cardDiv)

        })
}



let clearbtn = document.getElementById("clearAll");
clearbtn.addEventListener("click", () => {
    location.href = "electronics.html"
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


let selRat = document.getElementById("selectRat");
selRat.addEventListener("change", () => {
    brand();
})
let selCat = document.getElementById("selectCat");
selCat.addEventListener("change", () => {
    brand();
})



function brand() {
    let discount = disc.value;
    let price = selPrice.value;
    let brand = selBrand.value;
    let rating = selRat.value;
    let gender = selCat.value;

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
    if (rating !== "") {
        url += `&rat_gte=${rating}`
    }

    if (discount !== "") {
        url += `&dis_gte=${discount}`
    }

    if (price !== "") {
        url += `&_sort=${price}&_order=asc`
    }
    fetchProducts();
    url = `https://myjson.onrender.com/electron`
}


var arr= JSON.parse(localStorage.getItem("cart"))|| []
async function gotoCart(id) {
    try {
        let fetchRes = await geturl(`https://myjson.onrender.com/electron` + `/${id}`)
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