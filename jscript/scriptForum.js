
  var a = document.getElementById("komen");
  a.style.display = "none";

function forumIsi(){
    var x = document.getElementById("komen");
    if (x.style.display == "none") {
        x.style.display = "block";
        }
        
    else{
        x.style.display = "none";
    }
}


var comment1 = document.getElementById("comment");

function add_feed()
{
    var comment = comment1.value;
    if(comment == ""){
        alert("Reply harus diisi")
    }else{

    
    var comment_paragraph = document.getElementById("comment_paragraph");

    comment_paragraph.innerHTML = comment;
    var div1 = document.createElement('div');
  
	// Get template data
    div1.innerHTML = document.getElementById('temp_comment').innerHTML;
    
	
    document.getElementById('comment_1').appendChild(div1);
    }
}
