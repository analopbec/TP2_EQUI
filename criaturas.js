
class Mascota{
    constructor(edad,cuernos){
        this.edad = edad
        this.cuernos = cuernos
    }
    getEdad(){
        return this.edad
    }
    tieneCuernos(){
        return this.cuernos
    }
    esVeterana(){
        return this.edad >= 10
    }

}


const guardian = {
    name: "Guardian",
    extra(){return 100},
    extraordinario(criatura) {
        return criatura.getPoderMagico() > 50;
    },
    siguienteRol() {
        return new Domador([new Mascota(1, false)]);
    },
    agregarMascota(mascota){
        return `❌ Los Guardianes no entrenan mascotas. Para entrenar a ${mascota} cambia de Rol.`
    }
}


class Domador{
    constructor(mascotas = [], name = "Domador") { 
        this.mascotas = mascotas;
        this.name = name;
    }
    cantidadMascotas(){
        return this.mascotas.length
    }
    agregarMascota(mascota){
        this.mascotas.push(mascota)
    }
    extra(){
        return 150 * this.mascotas.filter(m => m.tieneCuernos()).length;
    }
    extraordinario(criatura){
        return (criatura.getPoderMagico() >= 15 || this.mascotas.every( m=> m.esVeterana()))
    }
    siguienteRol(){
        if (this.mascotas.some(m => m.tieneCuernos())) {
            return hechicero;
        } else {
            return this;
        }
        
    }

}

const hechicero = {
    name : "Hechicero",
    extra(){return 0},
    extraordinario(criatura){
        return true;
    },
    siguienteRol(){
        return guardian
    },
    agregarMascota(mascota){
        return `❌ Los hechiceros no entrenan mascotas. Para entrenar a ${mascota} cambia de Rol.`
    }
}


class Duende {
    //Reino del Bosque
    constructor(name, poderMagico, astucia, rol){
        this.name = name;
        this.poderMagico = poderMagico;
        this.astucia = astucia;
        this.rol = rol;
        this.kmVuelo = 0;
    }
    getPoderMagico(){
        return this.poderMagico
    }
    getPoderOfensivo(){
        return ((this.poderMagico * 10 ) + this.rol.extra()) * 1.10
    }
    esAstuta(){
        return false
    }
    esExtraordinaria(){
        return this.rol.extraordinario(this);
    }
    esFormidable(){
        return (this.esAstuta() || this.esExtraordinaria())
    }
    cambiarRol(){
        this.rol === this.rol.siguienteRol() ? console.log("❌ Ninguna mascota tiene cuernos. No se puede cambiar de rol") :
        this.rol = this.rol.siguienteRol();
    }
    getVuelo(){
        return "❌ Error: Los duendes no vuelan";
    }
    aumentarVuelo(km){
        return "❌ Error: Los duendes no vuelan";
    }
    entrenarMascota(mascota){
        return this.rol.agregarMascota(mascota)
    }

}

class Hada {
    //Reino de los Cielos
    constructor(name, poderMagico, astucia, rol){
        this.name = name;
        this.poderMagico = poderMagico;
        this.astucia = astucia;
        this.rol = rol;
        this.kmVuelo = 2; //máximo 25
    }
    getPoderOfensivo(){
        return (this.poderMagico * 10 ) + this.rol.extra()
    }
    getPoderMagico(){
        return this.poderMagico
    }
    getVuelo(){
        return this.kmVuelo
    }
    esAstuta(){
        return this.astucia > 50
    }
    esExtraordinaria(){
        return (this.rol.extraordinario(this) && this.kmVuelo > 10)
    }
    esFormidable(){
        return (this.esAstuta() || this.esExtraordinaria())
    }
    aumentarVuelo(km) {
        const vueloPosible = 25 - this.kmVuelo;
        if (this.kmVuelo === 25) {
            return `❌ Error. Ya alcanzó el máximo de km`;
        } else if (vueloPosible < km) {
            return `Solo puede agregar ${vueloPosible} km.`;
        }
        this.kmVuelo = Math.min(this.kmVuelo + km, 25);
        return `Vuelo aumentado en ${km} km. Total: ${this.kmVuelo} km.`;
    }
    cambiarRol(){
        this.rol = this.rol.siguienteRol();
    }
    entrenarMascota(mascota){
        return this.rol.agregarMascota(mascota)
    }
}

module.exports = {Mascota, guardian, hechicero, Domador, Duende, Hada};

// ver