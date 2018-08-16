let openShop = document.getElementById('open-btn'),
	leftMenu = document.getElementsByClassName('main-info'),
	leftTitles = [],
	leftClasses = [];
/*	
for (let i = 0; i < leftMenu[0].childNodes.length; i++) {
	leftClasses.push(leftMenu[0].childNodes[i].classList);
console.log(leftMenu[0].childNodes[i].classList);

	if(leftMenu[0].childNodes[i].classList.indexOf('-')) {
		console.log(leftMenu[0].childNodes[i].classList)
	}
	
}
*/
let goodsIten = document.getElementsByClassName('goods-item');


let buttons = document.getElementsByTagName('button'),
	btnResalt =[];

for (let i = 0; i < buttons.length; i++) {
	if (i != 0) {btnResalt.push(buttons[i])}
}

let items = document.querySelector('#items');
let time = document.querySelector('#time');
let budget = document.querySelector('#budget');
let employers = document.querySelectorAll('.hire-employers-item');

console.log(employers);


	/*if (leftMenu[0].childNodes[i].classList !== null){
		  leftTitles.push(leftMenu[0].childNodes[i]) 
		console.log(leftMenu[0].childNodes[i]);
	}*/


