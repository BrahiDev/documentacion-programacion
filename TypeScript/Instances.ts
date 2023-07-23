import { IAvenger } from '../types.d'

// Forma correcta de declarar una clase y de tiparla

class Avenger implements IAvenger {
    readonly name: string   // <--- Uso ReadOnly que me permite que esta propiedad solo sea de lectura
    private powerScore: number  // <---- Uso Private que me permite que esta propiedad solo se pueda acceder desde dentro de la clase
    private readonly wonBattles: number = 0   // <---- Uso private y readOnly que seria la mezcla de las dos
    protected age: number = 0   // <---- Uso protected que me permite que esta propiedad solo se pueda acceder desde dentro de la clase y desde las clases que hereden de esta

    constructor(name: string, powerScore: number) {
        this.name = name
        this.powerScore = powerScore
    }

    get fullName() {
        return `${this.name}, de poder ${this.powerScore}`
    }

    set power(newPower: number) {
        if (newPower <= 100) {
            this.powerScore = newPower
        } else {
            throw new Error('Power score cannot be more than 100')
        }
    }
}

const avenger = new Avenger('Steve', 100)

avenger.name = 'Peter'    // <--- No deberia poder hacer esto !