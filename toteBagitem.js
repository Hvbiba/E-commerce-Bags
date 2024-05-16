//change src for bags
const other = document.querySelectorAll('#other img');
console.log(other);
var mainImg = document.getElementById('mainImg');

let beKind = other[0];
let badDays = other[1];
let selfLove = other[2];

badDays.addEventListener('click' , function(){
    mainImg.src='https://coveryofficial.com/wp-content/uploads/2023/02/no-bad-days-pink.jpg';
    headLine.innerHTML="No More Bad Days";
    topName.innerHTML="No More Bad Days";

});
beKind.addEventListener('click' , function(){
    mainImg.src='https://coveryofficial.com/wp-content/uploads/2023/02/Be-Kind-1-600x600.jpg';
    headLine.innerHTML="Be Kind";
    topName.innerHTML="Be Kind";
});
selfLove.addEventListener('click' , function(){
    mainImg.src='https://coveryofficial.com/wp-content/uploads/2023/02/Self-love-club-1.jpg';
    headLine.innerHTML="Self Love";
    topName.innerHTML="Self Love";
});

//chamge name 
var headLine = document.getElementById('bagHeadline');
var topName =document.getElementById('bagName');
console.log(headLine.textContent);
console.log(topName.textContent);

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

