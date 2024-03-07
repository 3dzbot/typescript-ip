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