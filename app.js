//Intervalai ir timeout

//setTimeout(fn,2000);
//function fn(){
//    console.log('2s atidejimas');
//}
//
//
//var startCount=setInterval(getNr, 1000);
//var number=0
//
//// function getNr(){
////     console.log(number);
////     number++
////     if(number==10){
////         clearInterval(startCount);
////     }
//// }
//
////nuotrauku galerija

var foto= document.querySelector(".foto");
var tekstas=document.querySelector('.foto h1');
var title=['lets start', 'Try again', 'Oops']
var y=0;     
     setInterval(function(){
         console.log(y);
         y++
         foto.style.transition='1s';
         foto.style.backgroundImage= "url('a" +y+ ".jpg')" 
         if(y==3){
             y=0;
         }
         
     },2000)
setInterval(function(){
    tekstas.textContent="Let's start"
//    if(tekstas==""){
//         tekstas.textContent="Let's start";
//    } else {
//        tekstas.textContent ="Hello the world";
//    }
}, 3000)

// ND puslapis, kurio centre uzrasas, kuris keisis is vienos frazes i kita.
// parsisiusti GIT BASH uzsiregistruoti github.com svetaineje