interface User {
	login: string;
	password: string;
	age: number;
	//addr?: string;
	addr: string | undefined;
	parents?: {
		mother?: string;
		father?: string;
	}
}

const user: User = {
	login: 'first',
	password: 'string',
	age: 50,
	addr: ''
}

const dbName = '1234';

function sendUserData(obj: User, db?: string): void {
	console.log(obj.parents?.father?.toLowerCase(), db?.toLowerCase());
}	

sendUserData(user, dbName);

enum Directions {
	TOP,
	RIGHT,
	BOTTOM,
	LEFT
}

function showDirection(dir: Directions) {
	console.log(dir);
}

showDirection(Directions.BOTTOM);

/** Запросы типов */

const dataFromControl = {
	water: 200,
	el: 150
}

function checkreadings(data: typeof dataFromControl): boolean {
	const userData = {
		water: data.water,
		el: data.el
	}
	return true;
}

/** Утверждение типов (Type Assertions) */

const fetchData = (url: string, method: "GET" | "POST"): void => {
	console.log(method);
}

const reqOptions = {
	url: 'https',
	method: "POST" as "POST"
} // as const

// fetchData(reqOptions.url, reqOptions.method as "POST");
fetchData(reqOptions.url, reqOptions.method);

/** Type Guard */

function isNumber(n: unknown): n is number {
	return typeof n === 'number';
}

interface Car {
	engine: string,
	wheels: number
}

interface Ship {
	engine: string,
	sail: boolean
}

function isCar(car: Car | Ship): car is Car {
	return "wheels" in car;
	// return (car as Car).wheels !== undefined;
}