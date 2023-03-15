 window.onload=function() {
    document.getElementById("loader").style.display="none";
 }


 function show() {
    var list=document.getElementById("info");
    if(list.style.display=="block"){
        list.style.display="none";
    }
    else
    {
        list.style.display="block";
    }
 }