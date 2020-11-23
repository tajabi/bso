'use strict';
const ballplusBtn = document.getElementById('ballplusBtn');
var bi = document.getElementById('BallIndicator');
//ボールふえるボタン
ballplusBtn.addEventListener('click',() => {
    //alert(bi.textContent);
switch (bi.textContent){
    case "":
    bi.textContent="●";
    break;
    case "●":
    bi.textContent="●●";
    break;
    default:
    bi.textContent="●●●";
    break;
}
}); 
//ボール減るボタン
const ballminusBtn = document.getElementById('ballminusBtn');
//var bi = document.getElementById('BallIndicator');
ballminusBtn.addEventListener('click',() => {
    
switch (bi.textContent){
    case "●●":
    bi.textContent="●";
    break;
    case "●●●":
    bi.textContent="●●";
    break;
    default:
    bi.textContent="";
    break;
}
}); 
const strikeplusBtn = document.getElementById('strikeplusBtn');
var si = document.getElementById('StrikeIndicator');
//ストライクふえるボタン
strikeplusBtn.addEventListener('click',() => {
    
switch (si.textContent){
    case "":
    si.textContent="●";
    break;
    //case "●":
    //si.textContent="●●";
    //break;
    default:
    si.textContent="●●";
    break;
}
}); 
//ストライク減るボタン
const strikeminusBtn = document.getElementById('strikeminusBtn');
//var si = document.getElementById('StrikeIndicator');
strikeminusBtn.addEventListener('click',() => {
    
switch (si.textContent){
    case "●●":
    si.textContent="●";
    break;
    //case "●●●":
    //si.textContent="●●";
    //break;
    default:
    si.textContent="";
    break;
}
}); 
const outplusBtn = document.getElementById('outplusBtn');
var oi = document.getElementById('OutIndicator');
//アウトふえるボタン
outplusBtn.addEventListener('click',() => {
    
switch (oi.textContent){
    case "":
    oi.textContent="●";
    break;
    //case "●":
    //oi.textContent="●●";
    //break;
    default:
    oi.textContent="●●";
    break;
}
}); 
//アウト減るボタン
const outminusBtn = document.getElementById('outminusBtn');
var oi = document.getElementById('OutIndicator');
outminusBtn.addEventListener('click',() => {
    
switch (oi.textContent){
    case "●●":
    oi.textContent="●";
    break;
    //case "●●●":
    //oi.textContent="●●";
    //break;
    default:
    oi.textContent="";
    break;
}
}); 
const allclearBtn = document.getElementById('allclearBtn');
allclearBtn.addEventListener('click',() => {
    


    bi.textContent="";
    si.textContent="";
    oi.textContent="";
}); 

