var items=document.getElementById("items");

function addseparator(name,color){
    bgcolor="background: linear-gradient(90deg, rgba(0,0,0,0) 0%, "+color+" 15%, "+color+" 85%, rgba(0,0,0,0) 100%);"
    result='<div class="section"><span class="sectiontitle" style="color:'+color+'">'+name+'</span><div class="underline" style="'+bgcolor+'"></div></div>'
    items.innerHTML+=result;
}

function loaditem(itemname,itemdata){
    //worst way to do it, but it works
    result='<div class="container"><img class="itemimage" src="'+itemdata["image"]+'"><span class="itemname">'+itemname+'</span><br><span>Required: '+itemdata["qty"]+'</span><br></div>';
    items.innerHTML+=result;
}

function clearitems(){
    items.innerHTML="";
}


function loadallitems(filter=""){
    clearitems();
    if (filter==""){
        addseparator("Hardware","#00ffff");
        for (const [key, value] of Object.entries(data.hardware)) {
            loaditem(key,value);
        }
    }
    else{
        addseparator("Search Results","#ffffff");
    }
}


loadallitems();