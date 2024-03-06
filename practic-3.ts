// Request
type TAnimal = 'cat' | 'dog' | 'bird';

interface IAnimal {
    animal: TAnimal;
    breed: string;
    sterilized?: string;
	location: string;
	age?: number;
}

interface BadResponceData {
	message: string,
	nextUpdateIn: Date
}

interface BadResponce {
	status: "not available";
	data: BadResponceData
}

interface GoodResponce {
	status: "available",
    data: IAnimal
}

type TResponce = BadResponce | GoodResponce;

function isGoodResponce(responce: TResponce): responce is GoodResponce {
	if (responce.status === "available") {
		return true;
	} else {
		return false;
	}
}

// Response #1

const responceOne = {
    status: "available",
    data: {
        // animal: 'cat' | 'dog' | 'bird',
        animal: 'cat',
        breed: 'breed',
        sterilized: 'yes',
        location: 'street',
        age: 2
    }
} as const;

// Response #2

const responceTwo = {
    status: "not available",
    data: {
        message: 'error',
        nextUpdateIn: new Date()
    }
} as const;

function checkAnimalData(animal: TResponce): IAnimal | string {
	if (isGoodResponce(animal)) {
		// Заменить условие!
		console.log(animal.data)
		return animal.data;
	} else {
		console.log(`${animal.data}, you can try in ${animal.data.nextUpdateIn}`)
		return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
	}
}

checkAnimalData(responceOne);
checkAnimalData(responceTwo);