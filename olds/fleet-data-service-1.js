import {Car} from '../classes/car.js';
import {Drone} from '../classes/drone.js';



export class FleetDataService{
	
	constructor(){
		this.cars =[];
		this.drones =[];

	}

	loadData(flota){
		let nCar= 1;
		let nDron = 1;
		for (let data of flota)
			switch(data.type) {
				case 'car'	: this.cars.push(data);
					
					console.log('add car:' + nCar);
					nCar +=1;
					break;

				case 'drone' : this.drones.push(data);
					console.log('add dron:' + nDron);
					nDron +=1;
					break;
			}
		console.log("total vehicle adds:" , (nCar + nDron));	
	}	
}