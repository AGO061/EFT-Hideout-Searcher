
function toUpperFirst(words) {
    var separateWord = words.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
       separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
       separateWord[i].substring(1);
    }
    return separateWord.join(' ');
 }

function loadtrader(trader){
    return '<div class="topside"><img class="traderimage" style="margin-bottom:0;" src="'+quests[trader]["image"]+'" alt=""><h1 style="margin-top:0;">'+toUpperFirst(trader)+'</h1></div>'
}

function loaditem(trader,item){
    highlight="";
    if (quests[trader]["items"][item]["FiR"]){
        highlight=" highlighted";
    }
    return '<span class="item"><img class="itemimage" src="'+quests[trader]["items"][item]["image"]+'" alt=""><span class="quantity'+highlight+'">x '+quests[trader]["items"][item]["qty"]+'</span></span>'
}

function creatediv(trader){
    return '<div id="'+trader+'" class="fullquests">'
}


function loadalltraders(){
    //read all keys and values of the quests object
    for (const [key,value] of Object.entries(quests)){
        document.body.innerHTML+=creatediv(key);
        document.getElementById(key).innerHTML+=loadtrader(key);
        for (const [key1,value1] of Object.entries(quests[key]["items"])){
            document.getElementById(key).innerHTML+=loaditem(key,key1);
        }
    }
}

loadalltraders();