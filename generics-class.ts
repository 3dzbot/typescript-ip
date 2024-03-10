class Users <T, S> {
	name: T;
	age: S;

	constructor(name: T, age: S) {
		this.name = name;
		this.age = age;
	}

	sayMyFullName<T>(surname: T): string {
		if (surname) {
			return `${surname}`
		}
		return 'I have only name';
	}
}

class AdminUsers<T> extends Users<string, number> {
	isAdmin: T;

	constructor(name: string, age: number, isAdmin: T) {
		super(name, age)
		this.isAdmin = isAdmin
	}
}

const V = new Users('Vasil', 30);
const V2 = new Users<string, string>('Vasil', '30');