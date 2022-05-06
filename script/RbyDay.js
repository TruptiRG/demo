

import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

let value=document.getElementById("input").value;
const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;

const receipes=async()=>{
    try{
        const res=await fetch(url);
        const data= await res.json();
        console.log(data.meals);
        add(data.meals);
    }catch(err){
        console.log(err);
    }
}

let add=(data)=>{
    let showdiv=document.getElementById("show");
    data.forEach((el)=>{
        let div=document.createElement("div");
        div.setAttribute("class","subdiv")
        let area=document.createElement("h3");
        area.innerText=el.strArea;
        let intr=document.createElement("p");
        intr.innerText=el.strInstructions;
        let vedio=document.createElement("video");
        vedio.src=el.strYoutube;
        let pic=document.createElement("img");
        pic.src=el.strMealThumb;

        div.append(area,pic,intr,vedio);
        showdiv.append(div);
        
    })
}

document.getElementById("input").addEventListener("input",receipes);