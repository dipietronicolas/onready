import {Auto, Moto} from "./classes.js";

let listaDeVehiculos = [];
listaDeVehiculos.push(new Auto('Peugeot', '206', 200000, '4'));
listaDeVehiculos.push(new Moto('Honda', 'Titan', 60000, '125cc'));
listaDeVehiculos.push(new Auto('Peugeot', '208', 250000, '5'));
listaDeVehiculos.push(new Moto('Yamaha', 'YBR', 80500.50, '160cc'));

let vehiculoMasCaro = listaDeVehiculos[0], vehiculoMasBarato = listaDeVehiculos[0];
for (let obj of listaDeVehiculos) {
    console.log(obj.getInfo());
    if (obj.precio > vehiculoMasCaro.precio) {
        vehiculoMasCaro = obj;
    }
    if (obj.precio < vehiculoMasBarato.precio) {
        vehiculoMasBarato = obj;
    }
}
let vehiculoConLetraY = listaDeVehiculos.filter((ve) => {
    return ve.modelo.includes('Y') == true;
})

console.log('=============================');
console.log(`Vehiculo mas caro: ${vehiculoMasCaro.marca} ${vehiculoMasCaro.modelo}`);
console.log(`Vehiculo mas Barato: ${vehiculoMasBarato.marca} ${vehiculoMasBarato.modelo}`);
console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${vehiculoConLetraY[0].marca} ${vehiculoConLetraY[0].modelo}`);
console.log('=============================');

let listaOrdenada = listaDeVehiculos.sort((a, b) => {
    if (a.precio < b.precio) {
        return 1;
    }
    if (a.precio > b.precio) {
        return -1;
    }
    // a must be equal to b
    return 0;
});

console.log('Vehículos ordenados por precio de mayor a menor:');
for(let vehiculo of listaOrdenada){
    console.log(`${vehiculo.marca} ${vehiculo.modelo}`);
}


