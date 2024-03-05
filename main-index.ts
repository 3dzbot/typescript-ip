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

sendUserData(user, dbName)