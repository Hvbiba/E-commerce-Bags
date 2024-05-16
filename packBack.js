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

// show and hide sideBar links
let expandIcons = document.querySelectorAll('.mainLink i');
expandIcons.forEach(function(icon) {
    icon.addEventListener('click', function() {
        let links = this.parentElement.nextElementSibling;
        if (links.style.display === "none") {
            links.style.display = "block";
        } else {
            links.style.display = "none";
        }
    });
});


// change src using mouseenter & mousemove

const allBags= document.querySelectorAll('.product img');
console.log(allBags);
var div =document.querySelector('product');

var bag_1=document.querySelectorAll('.product img')[0];
console.log(bag_1);
bag_1.addEventListener('mouseenter',function(){
    bag_1.src='https://coveryofficial.com/wp-content/uploads/2023/09/JAS00082-600x600.jpg';
});
bag_1.addEventListener('mouseleave',function(){
    bag_1.src='https://coveryofficial.com/wp-content/uploads/2023/09/JAS00080-600x600.jpg';
});

var bag_2=document.querySelectorAll('.product img')[1];
console.log(bag_2);
bag_2.addEventListener('mouseenter',function(){
    bag_2.src='https://coveryofficial.com/wp-content/uploads/2023/09/JAS00079.jpg';
});
bag_2.addEventListener('mouseleave',function(){
    bag_2.src='https://coveryofficial.com/wp-content/uploads/2023/09/JAS00077-600x600.jpg';
});

var bag_3=document.querySelectorAll('.product img')[2];
console.log(bag_3);
bag_3.addEventListener('mouseenter',function(){
    bag_3.src='https://coveryofficial.com/wp-content/uploads/2023/02/Black-Marble-2-1-600x600.jpg';
});
bag_3.addEventListener('mouseleave',function(){
    bag_3.src='https://coveryofficial.com/wp-content/uploads/2023/02/Black-Marble-1-1-600x600.jpg';
});

var bag_4=document.querySelectorAll('.product img')[3];
console.log(bag_4);
bag_4.addEventListener('mouseenter',function(){
    bag_4.src='https://coveryofficial.com/wp-content/uploads/2023/09/JAS00073-600x600.jpg';
});
bag_4.addEventListener('mouseleave',function(){
    bag_4.src='https://coveryofficial.com/wp-content/uploads/2023/09/JAS00071.jpg';
});

var bag_5=document.querySelectorAll('.product img')[4];
console.log(bag_5);
bag_5.addEventListener('mouseenter',function(){
    bag_5.src='https://coveryofficial.com/wp-content/uploads/2023/09/JAS00076-2-600x600.jpg';
});
bag_5.addEventListener('mouseleave',function(){
    bag_5.src='https://coveryofficial.com/wp-content/uploads/2023/09/JAS00074-600x600.jpg';
});

var bag_6=document.querySelectorAll('.product img')[5];
console.log(bag_6);
bag_6.addEventListener('mouseenter',function(){
    bag_6.src='https://coveryofficial.com/wp-content/uploads/2023/01/Friends2-2-600x600.jpg';
});
bag_6.addEventListener('mouseleave',function(){
    bag_6.src='https://coveryofficial.com/wp-content/uploads/2023/01/Friends1-2-600x600.jpg';
});

var bag_7=document.querySelectorAll('.product img')[6];
console.log(bag_7);
bag_7.addEventListener('mouseenter',function(){
    bag_7.src='https://coveryofficial.com/wp-content/uploads/2023/01/Planets-2-600x600.jpg';
});
bag_7.addEventListener('mouseleave',function(){
    bag_7.src='https://coveryofficial.com/wp-content/uploads/2023/01/Planets-1-1-600x600.jpg';
});

var bag_8=document.querySelectorAll('.product img')[7];
console.log(bag_8);
bag_8.addEventListener('mouseenter',function(){
    bag_8.src='https://coveryofficial.com/wp-content/uploads/2023/01/Great-wave3-600x600.jpg';
});
bag_8.addEventListener('mouseleave',function(){
    bag_8.src='https://coveryofficial.com/wp-content/uploads/2023/01/Great-wave-2-600x600.jpg';
});

var bag_9=document.querySelectorAll('.product img')[8];
console.log(bag_9);
bag_9.addEventListener('mouseenter',function(){
    bag_9.src='https://coveryofficial.com/wp-content/uploads/2023/01/Purple3-3-600x600.jpg';
});
bag9.addEventListener('mouseleave',function(){
     bag_9.src='https://coveryofficial.com/wp-content/uploads/2023/01/Purple2-3.jpg';
});
