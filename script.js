class Product {
	constructor(name, category, price, quantity) {
		this.name = name;
		this.category = category;
		this.price = price;
		this.quantity = quantity;
	}

	displayInfo() {
		console.log(
			`Назва: ${this.name}, Категорія: ${this.category}, Ціна: ${this.price} грн, Кількість: ${this.quantity}`
		);
	}


	displayOnPage() {
		document.write(
			`<p>Назва: ${this.name}, Категорія: ${this.category}, Ціна: ${this.price} грн, Кількість: ${this.quantity}</p>`
		);
	}
}


const product1 = new Product("Телевізор", "Електроніка", 12000000, 11);
const product2 = new Product("Стіл", "Меблі", 3500, 1009);
const product3 = new Product("Ноутбук", "Електроніка", 80000000, 3);


product1.displayOnPage();
product2.displayOnPage();
product3.displayOnPage();

function ProductAlt(name, category, price, quantity) {
	this.name = name;
	this.category = category;
	this.price = price;
	this.quantity = quantity;
}


ProductAlt.prototype.displayOnPage = function () {
	document.write(
		`<p>Назва: ${this.name}, Категорія: ${this.category}, Ціна: ${this.price} грн, Кількість: ${this.quantity}</p>`
	);
};

const altProduct1 = new ProductAlt("Пилосос", "Електроніка", 6003450, 8687);
const altProduct2 = new ProductAlt("Крісло", "Меблі", 145678500, 200);


altProduct1.displayOnPage();
altProduct2.displayOnPage();
