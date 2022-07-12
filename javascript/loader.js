var items=document.getElementById("items");

function addseparator(name,color){
    bgcolor="background: linear-gradient(90deg, rgba(0,0,0,0) 0%, "+color+" 15%, "+color+" 85%, rgba(0,0,0,0) 100%);"
    result='<div class="section"><span class="sectiontitle" style="color:'+color+'">'+name+'</span><div class="underline" style="'+bgcolor+'"></div></div>'
    items.innerHTML+=result;
}

function addHeader(name,color){
    bgcolor="background: linear-gradient(90deg, rgba(0,0,0,0) 0%, "+color+" 15%, "+color+" 85%, rgba(0,0,0,0) 100%);"
    result='<div class="section"><span class="sectiontitle" style="color:'+color+'">'+name+'</span></div>'
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
    c1=false
    for (const [key, value] of Object.entries(data.hardware)) {
        if (key.toLowerCase().includes(filter.toLowerCase())){
            c1=true
        }
    }
    if (c1){
        addseparator("Hardware","#996633");
        for (const [key, value] of Object.entries(data.hardware)) {
            if (key.toLowerCase().includes(filter.toLowerCase())){
                loaditem(key,value);
            }
        }
    }

    c2=false
    for (const [key, value] of Object.entries(data.electronics)) {
        if (key.toLowerCase().includes(filter.toLowerCase())){
            c2=true
        }
    }
    if (c2){
        addseparator("Electronics","#336699");
        for (const [key, value] of Object.entries(data.electronics)) {
            if (key.toLowerCase().includes(filter.toLowerCase())){
                loaditem(key,value);
            }
        }
    }

    c3=false
    for (const [key, value] of Object.entries(data.medical)) {
        if (key.toLowerCase().includes(filter.toLowerCase())){
            c3=true
        }
    }
    if (c3){
        addseparator("Medical","#e6ffff");
        for (const [key, value] of Object.entries(data.medical)) {
            if (key.toLowerCase().includes(filter.toLowerCase())){
                loaditem(key,value);
            }
        }
    }

    c4=false
    for (const [key, value] of Object.entries(data.valuables)) {
        if (key.toLowerCase().includes(filter.toLowerCase())){
            c4=true
        }
    }
    if (c4){
        addseparator("Valuables","#ffcc00");
        for (const [key, value] of Object.entries(data.valuables)) {
            if (key.toLowerCase().includes(filter.toLowerCase())){
                loaditem(key,value);
            }
        }
    }

    c5=false
    for (const [key, value] of Object.entries(data.money)) {
        if (key.toLowerCase().includes(filter.toLowerCase())){
            c5=true
        }
    }
    if (c5){
        addseparator("Money","#2eb82e");
        for (const [key, value] of Object.entries(data.money)) {
            if (key.toLowerCase().includes(filter.toLowerCase())){
                loaditem(key,value);
            }
        }
    }

    if (!c1 && !c2 && !c3 && !c4 && !c5){
        addHeader("No Result","#ffffff");
    }
}


loadallitems();