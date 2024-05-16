// Set attribute loading lazy to all image in home page
var allImages = document.querySelectorAll('#items img');
const Images = document.querySelectorAll('img');
Images.forEach(function(image) {
    image.setAttribute("loading", "lazy");
});

console.log("all images in carousel");
console.log(allImages);

let marbelBag =  document.querySelectorAll('#items img')[15];
console.log(marbelBag)
marbelBag.addEventListener("mouseenter" , function (){
    marbelBag.src="https://coveryofficial.com/wp-content/uploads/2023/01/White-Marble1-1-600x600.jpg";
});
marbelBag.addEventListener("mouseleave" , function (){
    marbelBag.src="https://coveryofficial.com/wp-content/uploads/2023/01/White-Marble3-1-600x600.jpg";
});

let tigerBag= document.querySelectorAll('#items img')[17];
tigerBag.addEventListener("mouseenter" , function (){
    tigerBag.src="https://coveryofficial.com/wp-content/uploads/2024/01/tiger2-600x600.jpg";
});
tigerBag.addEventListener("mouseleave" , function (){
    tigerBag.src="https://coveryofficial.com/wp-content/uploads/2024/01/tiger1-600x600.jpg";
});

let toteBag = document.querySelectorAll('#items img')[19];
toteBag.addEventListener("mouseenter" , function (){
    toteBag.src="https://coveryofficial.com/wp-content/uploads/2023/02/Red-Shapes-1-1.jpg";
});
toteBag.addEventListener("mouseleave" , function (){
    toteBag.src="https://coveryofficial.com/wp-content/uploads/2023/02/Red-Shapes-2-1.jpg";
});

// get sleeve items
let tigerSleeve= document.querySelectorAll('#items img')[30];
let greySleeve= document.querySelectorAll('#items img')[31];
let sunSleeve= document.querySelectorAll('#items img')[32];
let summerSleeve= document.querySelectorAll('#items img')[33];
let faceSleeve= document.querySelectorAll('#items img')[34];

tigerSleeve.addEventListener("mouseenter" , function(){
    tigerSleeve.src="https://coveryofficial.com/wp-content/uploads/2023/02/tiger-1.jpg";
});
tigerSleeve.addEventListener("mouseleave" , function(){
    tigerSleeve.src="https://coveryofficial.com/wp-content/uploads/2023/02/7-2-600x600.jpg";
});

greySleeve.addEventListener("mouseenter" , function(){
    greySleeve.src="https://coveryofficial.com/wp-content/uploads/2023/01/White-Marble1-2-600x600.jpg";
});

greySleeve.addEventListener("mouseleave" , function(){
    greySleeve.src="https://coveryofficial.com/wp-content/uploads/2023/01/White-Marble2-2-600x600.jpg";
});

sunSleeve.addEventListener("mouseenter" , function(){
    sunSleeve.src="https://coveryofficial.com/wp-content/uploads/2023/01/Sunflower1-600x600.jpg";
});
sunSleeve.addEventListener("mouseleave" , function(){
    sunSleeve.src="https://coveryofficial.com/wp-content/uploads/2023/01/Sunflower2-600x600.jpg";
});

summerSleeve.addEventListener("mouseenter" , function(){
    summerSleeve.src="https://coveryofficial.com/wp-content/uploads/2023/03/Summer-Doodles-2.jpg";
});
summerSleeve.addEventListener("mouseleave" , function(){
    summerSleeve.src="https://coveryofficial.com/wp-content/uploads/2023/02/Summer-doodles-2.jpg";
});

faceSleeve.addEventListener("mouseenter" , function(){
    faceSleeve.src="https://coveryofficial.com/wp-content/uploads/2023/01/White-faceless1-600x600.jpg";
});
faceSleeve.addEventListener("mouseleave" , function(){
    faceSleeve.src="https://coveryofficial.com/wp-content/uploads/2023/01/White-faceless2.jpg";
});

// footer inputs check

let name = document.querySelector('footer #name');
let email = document.querySelector('footer #email');
let Btn = document.querySelector('footer #Btn');
let textCheck = document.querySelector('footer nav');
let nameAlert= document.querySelector('footer #nameAlert');
let emailAlert= document.querySelector('footer #emailAlert');

Btn.addEventListener("click",function(){
    if(name.value===''){
        textCheck.style.display = 'block';
        nameAlert.innerHTML="Please fill out this field.";
        nameAlert.style.color ="red";
        nameAlert.style.fontSize ="13px";
    }
    if(email.value===''){
        textCheck.style.display = 'block';
        emailAlert.innerHTML="Please fill out this field.";
        emailAlert.style.color ="red";
        emailAlert.style.fontSize ="13px";
    }
});

