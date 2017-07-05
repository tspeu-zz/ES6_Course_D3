class Vehicle{
	constructor(){
		console.log('vehicle contruido');
		this.gpsEnabled= true;
	}
	//pasa a las clases.
	static getCompany(){
		console.log('Company bad vehicle');
	}
	
}

class Drone extends Vehicle{
	

}

class Car extends Vehicle{
	constructor(){
		super();
			console.log('car contruido');
	}
}


let car = new Car();
console.log(car.gpsEnabled);
Drone.getCompany();
