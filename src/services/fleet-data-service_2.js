import {Car} from '../classes/car.js';
import {Drone} from '../classes/drone.js';

import {DataError} from './data-error.js';

export class FleetDataService{
	
	constructor(){
		this.cars =[];
		this.drones =[];
//hand errores		
		this.errors= [];

	}

	loadData(flota){
		let nCar= 0;
		let nDron = 0;
		let nErr = 0;
		for (let data of flota)
			switch(data.type) {
				case 'car'	: 
					let car = this.loadCar(data);
					this.cars.push(car);
						nCar +=1;
						console.log('add car:' + nCar);
					break;

				case 'drone' :
					let dron = this.loadDron(data);  
					this.drones.push(dron);
						nDron +=1;
						console.log('add dron:' + nDron);
						
					break;
//errores					
				default :	
					let e = new DataError('typo vehículo inválido!', data);
					this.errors.push(e);
						nErr +=1;
						console.log('error dron:' + nErr);
					break;
			}
		console.log("total vehicle adds:" , (nCar + nDron));
		console.log("total errors vehicle adds:" , nErr);	
	}

	loadCar(carro){
//hand error
		try{
			let c = new Car(carro.licarense, carro.model, carro.latLong);
			c.miles = carro.miles;
			c.make = carro.make;
			return c; 
			//si no se retorn aki que toda va bien se devuelve null
					  //pork es error
		}catch(e){
			this.errors.push(new DataError('erro con car', car));
		}
		return null;
	}		
		

	loadDron(dron){
		try{
			let d = new Drone(dron.lidronense, dron.model, dron.latLong);
			d.airTimeHours = dron.airTimeHours;
			d.base = dron.base;
			return d;
		}catch(e){
			this.errors.push(new DataError('error en dron', dron));
		}
			return null;
	}
		
}