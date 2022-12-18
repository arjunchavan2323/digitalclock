//alert("hi");
let cl=console.log;
function dclock(){
let digitalclock=document.getElementById("digitalclock");

let d=new Date();
cl(d);



//hr//min//sec//session


let hr=d.getHours();
let min=d.getMonth();
let sec=d.getSeconds();
let ses="am"
if (hr>=12){
	ses="pm"
}
if (hr>=12){
	hr=hr-12
}
cl(hr,min,sec,ses);


hr=setzero(hr);
min=setzero(min);
sec=setzero(sec);

let result=`${hr} : ${min} : ${sec}${ses}`;


digitalclock.innerHTML=result;
setTimeout(dclock,1000);
}

function setzero(num){
	return(num <10)?("0"+num):num
}



dclock()