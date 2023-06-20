function register(){
    var fullName = document.getElementById("fullName").value;
    var username = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    var date = document.getElementById("date").value;
    var gender = document.getElementsByClassName("gender");

    if(fullName == ""){
        alert("Fullname must be filled");
        return false;
    }

    else if(lettersonly(fullName) == false){
        alert("Fullname must consist of letters only");
        return false;
    }

    else if (simbolsimbol(fullName) == false){
        alert("Fullname must not contain symbols");
        return false;
    }

    else if(username == ""){
        alert("Username must be filled");
        return false;
    }

    else if(username.length < 6){
        alert("Username length must be grater than 6 characters")
    }

    else if(username.includes(' ')){
        alert("Username cannot contain SPACE");
        return false;
    }

    else if (simbolsimbol(username) == false){
        alert("Username must not contain symbols");
        return false;
    }

    else if(password.length < 8){
        alert("Password length must be greater than 8 characters");
        return false;
    }

    else if (alphanumeric(password) == false){
        alert("Password must be alphanumeric (contain letter and digit)");
        return false;
    }

    else if(date == ""){
        alert("Birthdate must be filled");
        return false;
    }

    else if(gender[0].checked == false && gender[1].checked == false){
        alert("Gender must be chosen");
        return false;
    }

    else{
        alert("Welcome!");
        window.location.href = "../html/main.html"
    }
}

function lettersonly(fullName){
    var number = ['1','2','3','4','5','6','7','8','9','0'];
   
    for (var i = 0; i < fullName.length; i++){
        if(number.includes(fullName.charAt(i))){
            return false;
        }
    }
    return true;
}

function simbolsimbol(fullName){
    var symbol = ['`','~','!','#','$','%','^','&','*','(',')','-','_','=','+','[','{',']',
    '}',';',':','|','\\',';',':','\'','\"',',','<','>','/','?','@','.'];
   
    for(var i = 0; i < fullName.length; i++){
        if(symbol.includes(fullName.charAt(i))){
            return false;
        }
    }
    return true;
}

function simbolsimbol(username){
    var symbol = ['`','~','!','#','$','%','^','&','*','(',')','-','_','=','+','[','{',']',
    '}',';',':','|','\\',';',':','\'','\"',',','<','>','/','?','@','.'];
   
    for(var i = 0; i < username.length; i++){
        if(symbol.includes(username.charAt(i))){
            return false;
        }
    }
    return true;
}

function alphanumeric(password){
    var number = [];
    for (var i = 48; i <= 57 ; i++) {
        number.push(i);
    }

    if(isNaN(password) == true){
        for (var i = 0; i < password.length; i++) {
        if(number.includes(password.charCodeAt(i)) ){
            return true;
            }
        }
        return false;
    }
    else{
        return false;
    }
    return true;
}