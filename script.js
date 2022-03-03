function add(){
  var x = Number(document.getElementById("fnum").value) ;
  var y = Number(document.getElementById("snum").value) ;
  var sum = x + y;
  alert(sum)
};


function check(){
    var age = document.getElementById("agebox").value;
    var nation = document.getElementById("country").value;
    if(age > 18){
        alert("Congrats! Your are eligible");
    }
    else{
        alert("Sorry! Not Eligible")
    }
}

var alpha = "aeroplane";
var count = 0;

if(alpha.charAt(0) == 'a' || alpha.charAt(0) == 'e' || alpha.charAt(0) == 'i' || alpha.charAt(0) == 'o'
 || alpha.charAt(0) == 'u'){
     count = count + 1;
 }

 if(alpha.charAt(1) == 'a' || alpha.charAt(1) == 'e' || alpha.charAt(1) == 'i' || alpha.charAt(1) == 'o'
 || alpha.charAt(1) == 'u'){
     count = count + 1; 
 }

//AJAX -> Asynchronous Javascript And XML

function getdata(){
    var x = new XMLHttpRequest();
    x.open("GET","https://jsonplaceholder.typicode.com/photos",true);
    x.send();

    x.onreadystatechange = function(){
        if(this.readyState == 4 || this.status == 200){
            var xyz = JSON.parse(this.responseText);
            for( i = 1; i <= 10; i++){
                document.getElementById("result").innerHTML += ("<div class='ouput'>"+xyz[i].title + "<br>"+ xyz[i].body +"</div><img src="+xyz[i].ege+ ">");
            }
        }
        else{
            document.getElementById("result").innerHTML = "Sorry, No result Found!"
        }
        
    }

}


// prasanna -> iphone -> desktop -> from js -> backend -> db -> yes available


// mobiles = [
//     {
//         brand: "iphone",
//         price: 20000,
//         model: "iphone12"
//     },
//     {
//         brand: "iphone",
//         price: 20000,
//         model: "iphone12=3"
//     },
//     {
//         brand: "iphone",
//         price: 20000,
//         model: "iphone10"

//     }
// ]

// laptop = [
//     {

//     },
//     {

//     },
//     {

//     }
// // ]
// x = 10

// document.write("We are learning Javascript!");
// document.getElementById("heading").innerHTML = "We are learning Javascript!";
// document.getElementById("heading").style.fontSize = "140px";

// function add(){
//     var x = 8;
//     var y = 9;
//     var sum = x + y;
//     document.getElementById("heading").innerHTML = sum;
// }



// print(10)
// print(11)
// print(12)


// x = 1

// print(x)

// length 
// slice 
// substring 
// substr 
// replace 
// touppercase 
// tolowercase 
// trim 
// split 
// chartAT 
// charCodeAt
// padStart
// padEnd
// concat 


// 1-5000

// document.write(1)
// document.write(2)
// document.write(3)
// document.write(4)
// document.write(5)

// where you have to start? 1
// is there any condition? 50
//     if yes, print and incrmement to next value 1 
// else 
//     skip the loop


var i = 100;
while(i < 50){ 
    document.write(i);
    i++;
}


for(var i = 100;i < 50; i++){
    document.write(i);
}



var i = 100;
do{ 
    document.write(i);
    i++;
}while(i < 50)