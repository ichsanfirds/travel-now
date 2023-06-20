function login(){
    var username = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    
    if(username == ""){
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

    else{
        alert("Welcome!");
        window.location.href = "../html/main.html"
    }
    
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