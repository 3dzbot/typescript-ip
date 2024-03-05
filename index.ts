const electricityUserData = {
	readings: 95,
	units: "kWt",
	mode: "double",
};

const waterUserData = {
	readings: 3,
	units: "m3",
};

const elRate: number = 0.45;
const wRate: number = 2;

const monthPayments: number[] = [0, 0]; // [electricity, water]

	// const calculatePayments = (elData, wData, elRate, wRate) => {
const calculatePayments = (
		{ readings, units, mode }: {
			readings: number,
			units: string,
			mode: string,
		}, 
		wData: {
			readings: number
			units: string
		}, 
		elRate: number, 
		wRate: number
	): void => {
	if (mode === "double" && readings < 50) {
		monthPayments[0] = readings * elRate * 0.7;
	} else {
		monthPayments[0] = readings * elRate;
	}

	monthPayments[1] = wData.readings * wRate;
};

calculatePayments(electricityUserData, waterUserData, elRate, wRate);

const sendInvoice = (
	monthPayments: number[], 
	{ readings, units, mode }: {
		readings: number,
		units: string,
		mode: string,
	}, waterUserData: {
		readings: number
		units: string
	}
	): string => {
	const text = `    Hello!
    This month you used ${readings} ${units} of electricity
    It will cost: ${monthPayments[0]}€
    
    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${monthPayments[1]}€`;

	return text.trim();
};

console.log(sendInvoice(monthPayments, electricityUserData, waterUserData));

/* Type aliases */
type AnimationTimingFunction = "ease" | "ease-out" | "ease-in";

/* Literal types */
function createAnimation(
	id: string | number,
	animName: string,
	timingFunc: AnimationTimingFunction = "ease",
	duration: number,
	iterCount: "infinite" | number
): void {
	// const elem = document.querySelector(`#${id}`) as HTMLElement;

	// if (elem) {
	console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`);
	// elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`;
	// }
}

createAnimation("id", "fade", "ease-in", 5, "infinite");

/* тест на тип */
const port3000: number = 3000;
const port3001 = 3001;
let port3002 = 3002;

// type Config = { protocol: "http" | "https"; port: 3000 | 3001 };
interface Config {
	protocol: "http" | "https"; 
	port: 3000 | 3001,
	log: (msg: string) => void
}

interface Role {
	role: string
}

interface ConfigWithRole extends Config, Role {
	test: string
}
// type Role = {
// 	role: string
// }
// type ConfigWithRole = Config & Role;

const serverConfig: ConfigWithRole = {
	protocol: "http",
	port: 3000,
	role: "admin",
	test: "test string",
	log: (msg: string): void => console.log(msg)
}

type StartFunction = (protocol: "http" | "https", port: 3000 | 3001, log: (msg: string) => void) => string;
const startServer: StartFunction = (
	protocol: "http" | "https",
	port: 3000 | 3001,
	log: (msg: string) => void
): "Server started" => {
	if (port === port3000 || port === port3001) {
		log(`Server started on ${protocol}://server:${port}`);
	} else {
		console.error("Invalid port");
	}

	return "Server started";
}

startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);

interface Styles {
	[key: string]: string
}

const styles: Styles = {
	position: 'absolute',
	top: '20px'
}