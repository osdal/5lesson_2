let openShop = document.getElementById('open-btn'),
	name_value = document.getElementsByClassName('name-value')[0],
	storeBudget = document.getElementsByClassName('budget-value')[0],
	goods_value = document.getElementsByClassName('goods-value')[0],
	items_value = document.getElementsByClassName('items-value')[0],
	employers_value = document.getElementsByClassName('employers-value')[0],
	discount = document.getElementsByClassName('discount-value')[0],
	isOpen = document.getElementsByClassName('isopen-value')[0],
	goods_item = document.getElementsByClassName('goods-item'),
	goods_btn = document.getElementsByTagName('button')[1],
	employers_btn = document.getElementsByTagName('button')[3],
	budget_btn = document.getElementsByTagName('button')[2],
	choose_item = document.querySelector('.choose-item'),
	time_value = document.querySelector('.time-value'),
	count_budget_value = document.querySelector('.count-budget-value'),
	hireEmployersItem = document.querySelectorAll('.hire-employers-item'),
	discountChek = document.querySelector('.discount-chek'),
	budgetForTheMonth,
	nameOfShop;

	let summMonth,
		price = 100;

count_budget_value.disabled = true;
/*goods_bt.disabled = true;
employers_bt.disabled = true;
budget_btn.disabled = true;*/

openShop.addEventListener('click', () => {
	
	
	summMonth = prompt('Ваш бюджет на месяц?', '');

	while (isNaN(summMonth) || summMonth =='' || summMonth == null) {
		summMonth = prompt('Ваш бюджет на месяц?', '');
	}

	storeBudget.textContent = summMonth;

	nameShop = prompt('Название вашего магазина?', '');
	while(nameShop == '' || nameShop == null) {
		nameShop = prompt('Название вашего магазина?', '');
	}
	nameShop = nameShop.toUpperCase();
	name_value.textContent = nameShop;

	if (openShop) {
		goods_btn.disabled = true;
	}
});

goods_btn.addEventListener('click', () => {

	let i = 0;
				do {
					let a = goods_item[i].value;
					
					if ((typeof(a))  === 'string' && (typeof(a))  != null  && a.length < 50) {
						console.log('Все верно!');
						mainList.shopGoods[i] = a;
						goods_value.textContent = mainList.shopGoods;
						i++;
					} else {
						console.log('Вы ввели неправильное название товара');
						
					}
				} while (i < goods_item.length);

});

choose_item.addEventListener('change', () => {

	let items = choose_item.value;
				
				if (isNaN(items) && items != ''){
						mainList.shopItems = items.split(",");
						mainList.shopItems.sort();

						items_value.textContent = mainList.shopItems;
					}

});

time_value.addEventListener('change', () => {
	let time = time_value.value;

	if (time < 0) {
				mainList.open = false;
				console.log('Такого не может быть');
				} else if (time > 0 && time < 20) {
					console.log('Время работать');
					mainList.open = true;
				} else if (time < 24) {
					mainList.open = false;
					console.log('Уже поздно');
				} else {
					mainList.open = false;
					console.log('В сутках только 24 часа');
				}

				if (mainList.open == true) {
					isOpen.style.backgroundColor  = 'green';
				} else {
					isOpen.style.backgroundColor = 'red';
				}

});

budget_btn.addEventListener('click', () => {

count_budget_value.value = summMonth / 30;

});

employers_btn.addEventListener('click', () => {

	for(let i = 0; i < hireEmployersItem.length; i++) {

				
				let a = hireEmployersItem[i].value;
				
					if ((typeof(a))  === 'string' && (typeof(a))  != null && a != '' && a.length < 50) {
						console.log('Все верно!');
						mainList.employers[i] = a;

						employers_value.textContent += mainList.employers[i] + ', ';

					} else {
						console.log('Вы ввели неправильное имя');
						i--;
				}
			}

});

discountChek.addEventListener('click', () => {
	if (discountChek) {
		discount.style.backgroundColor = 'green';
	}
	
	
});





mainList = {
		summMonth: summMonth,
		shopGoods: [],
		employers: {},
		open: false,
		discount: true,
		shopItems: [],
		
		
		
		discountPrice: function discountPrice () {
			if (mainList.discount) {
				console.log('Цена со скидкой ' + price*0.8);
			} else console.log(price);
			
		},
		
		printItems: function printItems () {
			mainList.shopItems.forEach (function(item, i) {
				console.log('У нас вы можете купить: ' + (i + 1) + ' ' + item);
			})
		},

		includeShop: function includeShop () {
			for (key in mainList) {
				console.log('Наш сагазин включает в себя:' + mainList[key]);
			}	
		}

};
