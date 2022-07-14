var items=document.getElementById("items");
levels={}
for (const [key, value] of Object.entries(modules)){
    var keydec=key.toLowerCase().split(' ').join('-');
    levels[keydec]=0;
    
}


function toUpperFirst(words) {
    var separateWord = words.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
       separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
       separateWord[i].substring(1);
    }
    return separateWord.join(' ');
 }


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
    //redefine pricing
    var newdata=data
    //console.log(newdata);
    for (const [key, value] of Object.entries(levels)) {
        if (value!=0){
            for (i=1;i<=value;i++){
                for (const [key1, value1] of Object.entries(modules[key][parseInt(i)].requirements)) {
                    //console.log(key1);
                        for (const [key2, value2] of Object.entries(newdata)) {
                            //check if item in data
                            if (newdata[key2][key1]!=undefined){
                                newdata[key2][key1]["qty"]-=value1;
                                if (newdata[key2][key1]["qty"]==0){
                                    delete newdata[key2][key1];
                                }

                            }
                        }
                    
                }
            }
            
        }
    }
    clearitems();
    c1=false
    for (const [key, value] of Object.entries(newdata["hardware"])) {
        if (key.toLowerCase().includes(filter.toLowerCase())){
            c1=true
        }
    }
    if (c1){
        addseparator("Hardware","#996633");
        for (const [key, value] of Object.entries(newdata["hardware"])) {
            if (key.toLowerCase().includes(filter.toLowerCase())){
                loaditem(key,value);
            }
        }
    }

    c2=false
    for (const [key, value] of Object.entries(newdata["electronics"])) {
        if (key.toLowerCase().includes(filter.toLowerCase())){
            c2=true
        }
    }
    if (c2){
        addseparator("Electronics","#336699");
        for (const [key, value] of Object.entries(newdata["electronics"])) {
            if (key.toLowerCase().includes(filter.toLowerCase())){
                loaditem(key,value);
            }
        }
    }

    c3=false
    for (const [key, value] of Object.entries(newdata["medical"])) {
        if (key.toLowerCase().includes(filter.toLowerCase())){
            c3=true
        }
    }
    if (c3){
        addseparator("Medical","#e6ffff");
        for (const [key, value] of Object.entries(newdata["medical"])) {
            if (key.toLowerCase().includes(filter.toLowerCase())){
                loaditem(key,value);
            }
        }
    }

    c4=false
    for (const [key, value] of Object.entries(newdata["valuables"])) {
        if (key.toLowerCase().includes(filter.toLowerCase())){
            c4=true
        }
    }
    if (c4){
        addseparator("Valuables","#ffcc00");
        for (const [key, value] of Object.entries(newdata["valuables"])) {
            if (key.toLowerCase().includes(filter.toLowerCase())){
                loaditem(key,value);
            }
        }
    }

    c5=false
    for (const [key, value] of Object.entries(newdata["money"])) {
        if (key.toLowerCase().includes(filter.toLowerCase())){
            c5=true
        }
    }
    if (c5){
        addseparator("Money","#2eb82e");
        for (const [key, value] of Object.entries(newdata["money"])) {
            if (key.toLowerCase().includes(filter.toLowerCase())){
                loaditem(key,value);
            }
        }
    }

    c6=false
    for (const [key, value] of Object.entries(newdata["skills"])) {
        if (key.toLowerCase().includes(filter.toLowerCase())){
            c6=true
        }
    }
    if (c6){
        addseparator("Skills","#cc0000");
        for (const [key, value] of Object.entries(newdata["skills"])) {
            if (key.toLowerCase().includes(filter.toLowerCase())){
                loaditem(key,value);
            }
        }
    }

    c7=false
    for (const [key, value] of Object.entries(newdata["traders"])) {
        if (key.toLowerCase().includes(filter.toLowerCase())){
            c7=true
        }
    }
    if (c7){
        addseparator("Traders","#6600cc");
        for (const [key, value] of Object.entries(newdata["traders"])) {
            if (key.toLowerCase().includes(filter.toLowerCase())){
                loaditem(key,value);
            }
        }
    }

    if (!c1 && !c2 && !c3 && !c4 && !c5 && !c6 && !c7){
        addHeader("No Result","#ffffff");
    }
}


function closeprompt(){
    var div=document.getElementById("overlay");
    div.hidden=true;
    loadallitems();
}


function changevalue(id,value){
    //console.log(id);
    var div=document.getElementById(id);
    var val=parseInt(document.getElementById(id).dataset.value);
    
    if (val==value){
        return
    } else {
        document.getElementById(id+val.toString()).className = "disabled";
        document.getElementById(id+value.toString()).className = "";
        levels[id]=value;
        document.getElementById(id).dataset.value=value;
        //console.log(levels);
    }
    
    
}

function loadallmodules(){
    var content=""
    var div=document.getElementById("overlay");
    
    div.innerHTML="";
    div.innerHTML+='<div class="over">Select your current modules values</div>';
    for (const [key1, value1] of Object.entries(modules)) {
        content="";
        var key1dec=key1.toLowerCase().split(' ').join('-');
        var key1display=toUpperFirst(key1.split("-").join(" "));
        //console.log(key1dec)
        content+='<div class="module" id="'+key1dec+'" data-value="0">'
        content+='<span>'+key1display+'</span>'
        content+=` <button class="" id="`+key1dec+`0" onclick="changevalue('`+key1dec+`',0)">0</button>`
        for (const [key2, value2] of Object.entries(modules[key1])){
            content+=` <button class="disabled" id="`+key1dec+key2.toString()+`" onclick="changevalue('`+key1dec+`',`+key2.toString()+`)">`+key2.toString()+`</button>`
        }
        content+='</div>'
        div.innerHTML+=content;
    }
    div.innerHTML+='<br><br><br><button onclick="closeprompt()">Calculate</button>';
    div.hidden=false;
}

loadallitems();