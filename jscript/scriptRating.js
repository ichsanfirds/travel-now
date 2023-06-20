var queryString = decodeURIComponent(window.location.search);
var queryString = queryString.substring(1);

image = document.getElementById("images");
image.src = queryString;

    var value1="../img/singapore.jpg";
    var value2="../img/korea.jpg";
    var value3="../img/japan.jpg";
    
    function button(){
    var queryString = "?" + value1;
    var rate = document.getElementById("rating").value;
    if(rate == 0){
        alert("Please select your rating")
    }else{
        window.location.href = "../html/feedback.html" + queryString;
        }
    }
    
    function button_2(){
    var queryString = "?" + value2;
    var rate = document.getElementById("rating").value;
    if(rate == 0){
        alert("Please select your rating")
    }else{
        window.location.href = "../html/feedback.html" + queryString;
        }
    }
    function button_3(){
    var queryString = "?" + value3;
    var rate = document.getElementById("rating").value;
    if(rate == 0){
        alert("Please select your rating")
    }else{
        window.location.href = "../html/feedback.html" + queryString;
        }
    }


    
