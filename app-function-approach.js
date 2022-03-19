// Classes
function Counter(element, value){

	// Constructeur
	this.counter = element;
	this.value = value;
	this.initValue = value;

	// Éléments
	this.decreaseBtn = element.querySelector('.decrease');
	this.resetBtn = element.querySelector('.reset');
	this.increaseBtn = element.querySelector('.increase');
	this.valueDOM = element.querySelector('.value');
	this.valueDOM.textContent = this.value;

	// Events listener
	/* Nous devons faire pointer l'événements sur CETTE classe => bind */
	this.decrease = this.decrease.bind(this);
	this.decreaseBtn.addEventListener('click', this.decrease);
	this.reset = this.reset.bind(this);
	this.resetBtn.addEventListener('click', this.reset);
	this.increase = this.increase.bind(this);
	this.increaseBtn.addEventListener('click', this.increase);

};

// Méthodes du compteur
Counter.prototype.decrease = function(){
	this.value--;
	this.valueDOM.textContent = this.value;
};
Counter.prototype.reset = function(){
	this.value = this.initValue;
	this.valueDOM.textContent = this.value;
};
Counter.prototype.increase = function(){
	this.value++;
	this.valueDOM.textContent = this.value;
};

// Instances
const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);

// Get element function
function getElement(selection){
	const element = document.querySelector(selection);
	if (element){
		return element;
	}
	throw new Error(`Please check ${ selection } selector, no such element exists.`)
};