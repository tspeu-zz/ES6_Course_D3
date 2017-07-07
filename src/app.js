//moudulo loader
import $ from 'jquery';
import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
//data
import {fleet} from './fleet-data.js';
 //data service
import {FleetDataService} from './services/fleet-data-service.js';

import {Button} from './ui/button.js';
import {Image} from './ui/image.js';
import {Titlebar} from './ui/tittle-bar.js';

/*let b = new Button('CLICK');
b.appendToElement($('body'));

let i = new Image('../images/drone.jpg');
i.appendToElement($('body'));*/

let tb = new Titlebar('appDronesJm');
tb.appendToElement($('body'));

//D3 librery
/*d3.selectAll("p").style("color", "red");
d3.select("body").style("background-color",  function() {
  return "hsl(" + Math.random() * 360 + ",100%,50%)";
});
d3.selectAll("p").style("color", function() {
  return "hsl(" + Math.random() * 360 + ",100%,50%)";
});
d3.selectAll("p")
  .data([ 42])
    .style("font-size", function(d) { return d + "px"; });*/
//

/*console.log("HOLA");
let dataService = new FleetDataService();
dataService.loadData(fleet);
//console.log(fleet);

console.log("cars: "+JSON.stringify(dataService.cars));

for( let e of  dataService.errors)
	console.log(e.message, e.data);

let cars = dataService.getCarsSortedByLicense();
for (let c of cars)
	console.log(c.license);


/*let carro = dataService.getCarByLicense("AT9900");
console.log(carro);*/
/*let cars = dataService.filterCarsByMake('e');
for (let c of cars)
	console.log(c.make);*/