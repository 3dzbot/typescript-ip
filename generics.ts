/** Generics */

function genericExample<T>(data: T): T {
	return data;
}

let genericExampleVal = genericExample('str');
let genericExampleValTwo = genericExample<number>(10);

interface Print<T> {
	design: T
}

const somePrint: Print<string> = {
	design: 'string'
} 

/** Generics functions */
function processingDataOne<T, S>(data: T, options: S): T {
	return data;
}
const valueProcessingData = processingDataOne<number, string>(10, 'some');

function processingData<T, S>(data: T[], options: S): string {
	switch (typeof data) {
		case "string": 
			return "string"
			break;
		default: 
			return 'not a string';
	}
}

/** interface with methods */
function processing<T>(data: T): T {
	return data;
}

interface IProcessing {
	<T>(data: T): T
}

let newTestFunc1: <T>(data: T) => T = processing;
let newTestFunc2: IProcessing = processing;

interface DataSaver {
	// processing: <T>(data: T) => T 

	/** с запросом типа */
	// processing: typeof processing 

	/** с интерфейсом */
	processing: IProcessing
}

/** два (три) способа записи */
/** + способ с использованием ф-ции generic */
const saver: DataSaver = {
	// processing(data) {
	// 	console.log(data);
	// 	return data;
	// }

	// processing: (data) => {
	// 	return data;
	// }

	// processing: <T>(data: T) => {
	// 	return data;
	// }

	processing: processing
}

/** Generics types and interfaces, constraints */

interface ParentsOfUser {
	mother: string;
	father: string;
}
/** Расширение дженерика с ограничением свойств */
interface UserG<ParentsData extends ParentsOfUser> {
	login: string;
	age: number;
	parents: ParentsData;
}

const userG: UserG<{mother: string; father: string; test: string}> = {
	login: 'str',
	age: 50,
	parents: {mother: "Anna", father: "no data", test: "some"}
}

type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];

const dataG: OneOrMany<number[]> = [5];

const depositMoney = <T extends number | string>(amount: T): T => {
	return amount;
}

/** Readonly, Partial, Required */
interface IState {
	data: {
		name: string;
	};
	tag: string;
}

function action(state: Readonly<IState>) {
	/** запрет на 1н уровень вложенности */
	state.data.name = 'atd'
}

/** Readonly - запрет на изменение */
/** Partial - делает свойства необязательными ?: */
/** Required - обратный Partial. Удаляет все символы необязательности */

/** Оператор keyof */

interface ICompany {
	name: string;
	debts: number;
}

type CompanyKeys = keyof ICompany;
const keys: CompanyKeys = "name";

function printDebts<T, K extends keyof T, S extends keyof T>(company: T, name: K, debts: S) {
	console.log(`Compane ${company[name]}, debts: ${company[debts]}`)
}

const testCompany: ICompany = {
	name: 'hhh',
	debts: 50000
}

printDebts(testCompany, "name", "debts");

const google: ICompany = {
	name: 'Google',
	debts: 150000
}

/** Способ получить ключи у типа через экземпляр обьекта */
type GoogleKeys = keyof typeof google; 
const keys2: GoogleKeys = "name"; //смотри const keys (128 строка)

/** Indexed Access Types */

interface ICompany2 {
	name: string;
	debts: number;
	departments: Department[];
	managment: {
		owner: string;
	}
}

interface Department {
	[key: string]: string;
}

const debts = "debts";

type CompanyDebtsType = ICompany2["debts"];
type CompanyDebtsType2 = ICompany2[typeof debts];
type CompanyOwnerType = ICompany2["managment"]["owner"];
type CompanyDepartmentsType = ICompany2["departments"][number];
type CompanyDepartmentsTypes = ICompany2["departments"];
type TestICompKeys = ICompany2[keyof ICompany2];