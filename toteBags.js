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
