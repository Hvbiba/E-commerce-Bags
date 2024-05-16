let divs = document.querySelectorAll('.item');
const btns = document.querySelectorAll('#addTocart');

function alertText() {
    alert("This Product Added To Cart Successfully");
}

btns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        alertText(); // Call the alertText function
    });
});
