let ad = prompt("Adınızı Giriniz: ")
let myName = document.querySelector("#myName");
myName.innerHTML= `${ad}`;
let date  = new Date();
let myClock = document.querySelector("#myClock");
myClock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`