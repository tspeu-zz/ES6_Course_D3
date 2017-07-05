/*let droneID= 5;let pepe= "pepe";console.log('hello mundo '+ droneID +' | '+pepe);*/
class Drone {
	constructor(iden, nombre){
		this.id= iden;
		this.name= nombre;

		console.log('drone listo| ID: '+ this.id, "nombre :" + this.name);
	}

	fly(){
		console.log('DRONE ID: '+this.id+" esta volando");
	}
//metodo statico de la clase
	static company(){
		console.log("la compañia");
	}
//get set
/*	get id(){
		console.log("get id");
		return this.id + "es get";
	}

	set id(value){
		this.id = value;
	}
*/
}
/*propieadad de la clase - estatica*/
Drone.maxHeight = 2000;
let dronito = new Drone(123, "dronito");
dronito.fly();
console.log(dronito.id, dronito.name);
let tron = new Drone(107,"dromespy");

console.log(tron.id);
dronito.fly();
Drone.company();

//console.log(typeof Drone);//function
//console.log(typeof dronito);//objet
//console.log(dronito instanceof Drone); //true

