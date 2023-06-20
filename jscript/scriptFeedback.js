    var queryString = decodeURIComponent(window.location.search);
    var queryString = queryString.substring(1);

    image = document.getElementById("images");
    image.src = queryString;

function feedback(){
    var fback = document.getElementById("feedback").value;

    if(fback == ""){
        alert("Please give your feedback")
        return false;
    }
    else{
        alert("Thank you for your feedback")
        window.location.href = "../html/main.html"
    }
}