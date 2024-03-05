type EmptyOrNumber = "empty" | number;
type EmptyOrBoolean = "empty" | boolean;

// структура данных склада с одеждой

interface ClothesWarehouse {
	jackets: EmptyOrNumber;
	hats: EmptyOrNumber;
	socks: EmptyOrNumber;
	pants: EmptyOrNumber;
}

// структура данных склада с канцтоварами

interface StationeryWarehouse {
	scissors: EmptyOrNumber;
	paper: EmptyOrBoolean;
}

// структура данных склада с бытовой техникой

interface AppliancesWarehouse {
	dishwashers: EmptyOrNumber;
	cookers: EmptyOrNumber;
	mixers: EmptyOrNumber;
}

// общая структура данных, наследует все данные из трех выше
// + добавляет свои

interface TotalWarehouse extends ClothesWarehouse, StationeryWarehouse, AppliancesWarehouse {
	deficit: boolean;
	date: Date;
}

// главный объект со всеми данными, должен подходить под формат TotalWarehouse

const totalData: TotalWarehouse = {
	jackets: 5,
	hats: "empty",
	socks: "empty",
	pants: 15,
	scissors: 15,
	paper: true,
	dishwashers: 3,
	cookers: "empty",
	mixers: 14,
	deficit: true,
	date: new Date()
};

// Реализуйте функцию, которая принимает в себя главный объект totalData нужного формата
// и возвращает всегда строку
// Функция должна отфильтровать данные из объекта и оставить только те названия товаров, у которых значение "empty"
// и поместить их в эту строку. Если таких товаров нет - возвращается другая строка (см ниже)

// С данным объектом totalData строка будет выглядеть:
// "We need this items: hats, socks, cookers"
// Товары через запятую, в конце её не должно быть. Пробел после двоеточия, в конце строки его нет.

function printReport(data: TotalWarehouse): string {
	if(typeof data !== 'object') return 'Incorrect data type';

	const arr: string = Object.entries(data).filter(item => item[1] === "empty").reduce((res, item) => `${res} ${item[0]},`, "").trim();
	if(arr.length === 0) {
		return "Everything fine";
	}

	return `We need this items: ${arr.slice(0, -1)}`;
	// или

}

console.log(printReport(totalData));
