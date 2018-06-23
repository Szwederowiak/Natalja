//var word = prompt('Podaj słowo:', '').toUpperCase();
var word = "Kurwa kurwie łba nie urwie".toUpperCase();

var word1 = "";
var misses = 0;

for(i = 0; i < word.length; i++) {
    if(word.charAt(i) == " ") {
        word1 += " "
    } else {
        word1 += "_"
    }
    
}

function write () {
    document.getElementById('password').innerHTML = word1;
    
}

window.onload = start; 

var letters =[
    "A","Ą","B","C","Ć","D","E",
    "Ę","F","G","H","I","J","K",
    "L","Ł","M","N","Ń","O","Ó",
    "P","Q","R","S","Ś","T","U",
    "V","W","X","Y","Z","Ż","Ź"
]

function start () {
    var divContent = ""
    
    for(i = 0; i <= 34; i++) {
        divContent += '<button id="key-' + i + '" onclick="check(' + i + ')">' + letters[i] + '</button>'
    }
    
    document.getElementById("keys").innerHTML = divContent;
    write(); 
}

String.prototype.setCharacter = function(index, char) {
    if(index > this.length - 1) {
        return this.toString()
    } else {
        return this.substr(0, index) + char + this.substr(index+1)
        
        
    }
    
}



function check(num) {

    var hit = false;
    
    for(i = 0; i <= word.length; i++) {
        
        
        if(letters[num] == word.charAt(i)) {
            word1 = word1.setCharacter(i, letters[num])
            hit = true;
        } 

    } 
    
    if(hit == true) {
        document.getElementById("key-" + num + "").style.color = "green";   
        document.getElementById("key-" + num + "").style.background = "rgba(50, 205, 50, 0.2)";
        document.getElementById("key-" + num + "").style.cursor = "default"; 
 
    } else {
        document.getElementById("key-" + num + "").style.color = "red"; 
        document.getElementById("key-" + num + "").style.background = "rgba(220, 20, 60, 0.5)";
        document.getElementById("key-" + num + "").style.cursor = "default";  
        misses++;
        
        document.getElementById("key-" + num + "").setAttribute("onclick", ";")
        document.getElementById("hangman").innerHTML = '<img src="img/s' + (misses - 1) + '.jpg" alt="">'
    }
    
    if(word == word1) {
        document.getElementById("keys").style.flexDirection = "column";
        document.getElementById("keys").innerHTML = '<p>Wygrywasz, hasło to: <br/>"' + word + '"</p><br/><br/><button width="100%" onclick="location.reload()">Jeszcze raz</button>';
        document.getElementById("keys").querySelector('p').style.fontSize = "28px"
        document.getElementById("keys").querySelector('button').style.width = "auto";
        document.getElementById("keys").querySelector('button').style.padding = "2px 100px";        
    }
    if(misses >= 6) {
        document.getElementById("keys").style.flexDirection = "column";
        document.getElementById("keys").innerHTML = '<p>Przejebujesz, hasło to:  <br/>"' + word + '"</p><br/><br/><button width="100%" onclick="location.reload()">Jeszcze raz</button>';
        document.getElementById("keys").querySelector('p').style.fontSize = "28px"
        document.getElementById("keys").querySelector('button').style.width = "auto";
        document.getElementById("keys").querySelector('button').style.padding = "2px 100px";     
    
    }
    

     
    write();
}

