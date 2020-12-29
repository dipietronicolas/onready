export class Vehiculo {
    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

    formatPrecio() {
        let precioString = new Intl.NumberFormat("es-ES").format(this.precio);
        let count = 0, flag = false;
        for (let char of precioString) {
            if (flag) {
                count++;
            }
            if (char == ',') {
                flag = true;
            }

        }
        switch (count) {
            case 0:
                precioString += ',00';
                break;
            case 1:
                precioString += '0';
                break;
            default:
                break;
        }
        return precioString;

    }

}

export class Auto extends Vehiculo {
    constructor(marca, modelo, precio, puertas) {
        super(marca, modelo, precio);
        this.puertas = puertas;
    }

    getInfo() {
        return `Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.puertas} // Precio: $${this.formatPrecio()}`
    }
}

export class Moto extends Vehiculo {
    constructor(marca, modelo, precio, cilindrada) {
        super(marca, modelo, precio);
        this.cilindrada = cilindrada;
    }

    getInfo() {
        return `Marca: ${this.marca} // Modelo: ${this.modelo} // Cilindrada: ${this.cilindrada} // Precio: $${this.formatPrecio()}`
    }
}
