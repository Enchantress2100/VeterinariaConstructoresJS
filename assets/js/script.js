let formulario=document.querySelector('form')
let datoMascota=(event)=>{
    event.preventDefault()

let propietario=document.getElementById('propietario').value 
let telefono=document.getElementById('telefono').value
let direccion=document.getElementById('direccion').value
let nombreMascota=document.getElementById('nombreMascota').value
let tipo=document.getElementById('tipo').value
let enfermedad=document.getElementById('enfermedad').value
const resultado=document.getElementById('resultado')
const p=document.createElement('p')
resultado.appendChild(p)
p.innerHTML=`* El nombre del propietario/a es ${propietario}, su teléfono es ${telefono}, vive en ${direccion}.<br> *Su animalito es un ${tipo}, su nombre es ${nombreMascota}, y su enfermedad es ${enfermedad}.`

if ('tipo'=='perro'){
    let perro= new Mascota(propietario, telefono, direccion, nombreMascota, tipo, enfermedad)
    resultado.innerHTML=(`${perro.datosPropietario()}, la mascota es un ${perro.tipo}, su nombre es ${perro.nombreMascota} y su enfermedad es ${perro.enfermedad}`)
}else if('tipo'=='gato'){
    let gato= new Mascota(propietario, telefono, direccion,nombreMascota, tipo, enfermedad)
    resultado.innerHTML= (`${gato.datosPropietario()}, la mascota es un ${gato.tipo}, su nombre es ${gato.nombreMascota} y su enfermedad es ${gato.enfermedad}`)
}else if('tipo'=='conejo'){
    let conejo=new Mascota(propietario,telefono,direccion, nombreMascota, tipo, enfermedad)
    resultado.innerHTML= (`${conejo.datosPropietario()}, la mascota es un ${conejo.tipo}, su nombre es ${conejo.nombreMascota} y su enfermedad es ${conejo.enfermedad}`)
        }
    }
formulario.addEventListener('submit', datoMascota)

class Propietario{
    constructor(propietario, telefono,direccion){
        this.propietario=propietario
        this.telefono=telefono
        this.direccion=direccion
    }
    datosPropietario(){
        return (`los datos del propietario son: ${this.propietario}, su telefono es ${this.telefono}, su direccion es ${this.direccion}`)
    }
}
class Animal extends Propietario{
    constructor(propietario,telefono,direccion,tipo){
        super(propietario, telefono, direccion)
            this.tipo=tipo
        }
        get Tipo(){
            return this.tipo
        }
    }

class Mascota extends Animal{
    constructor(propietario, telefono, direccion, tipo, nombre, enfermedad){
        super(propietario, telefono, direccion, tipo)
        this._nombre=nombre
        this._enfermedad=enfermedad
    }
    get nombreMascota(){
        return this._nombre
    }
    set nombreMascota(nombre_nuevo){
        this._nombre=nombre_nuevo
    }
    get enfermedad(){
        return this._enfermedad
    }
    set enfermedad(enfermedad_nueva){
        this._enfermedad=enfermedad_nueva
    }
}


//instancia para probar las clases (funcionan)
let gato1= new Mascota('consuelo', '65016704', 'catedral', 'gato','Artemis', 'dolor de oido')
console.log(gato1.datosPropietario())
console.log(gato1.nombreMascota)
gato1.nombre_nuevo='Luis'
console.log(gato1.nombre_nuevo)
console.log(gato1.enfermedad)
gato1.enfermedad_nueva='otohematoma'
console.log(gato1.enfermedad_nueva)
console.log(gato1.tipo)
